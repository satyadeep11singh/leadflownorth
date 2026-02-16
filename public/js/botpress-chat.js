(function () {
  'use strict';

  if (window.__LFN_BOTPRESS_CHAT_READY__) {
    return;
  }

  var runtimeConfig = window.__LFN_BOTPRESS_CONFIG__ || {};
  var botpressInjectUrl = runtimeConfig.injectUrl || 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
  var botpressConfigUrl = runtimeConfig.configUrl || '';
  var botpressBotId = runtimeConfig.botId || '';
  var botpressClientId = runtimeConfig.clientId || '';
  var shouldInitialize = !!botpressConfigUrl || (!!botpressBotId && !!botpressClientId);
  if (!shouldInitialize) {
    window.__LFN_BOTPRESS_BOOTSTRAP_LOADING__ = false;
    return;
  }

  window.__LFN_BOTPRESS_CHAT_READY__ = true;

  var contextSent = false;
  var listenersBound = false;
  var exitIntentWatcherBound = false;
  var EXIT_HOOK_STORAGE_KEY = 'lfn_bp_exit_intent_hook_shown';
  var CONVERSATION_STORAGE_KEY = 'lfn_bp_conversation_started';
  var EXIT_HOOK_MESSAGE = "Before you head out, want a quick win first? I can help you run a Free Website & SEO Audit (if you already have a site) or a fast ROI Calculator check to see if we're worth it before you commit.";
  var conversationStarted = readSessionFlag(CONVERSATION_STORAGE_KEY);
  var exitHookShown = readSessionFlag(EXIT_HOOK_STORAGE_KEY);

  function readSessionFlag(key) {
    try {
      return window.sessionStorage.getItem(key) === '1';
    } catch (_error) {
      return false;
    }
  }

  function writeSessionFlag(key) {
    try {
      window.sessionStorage.setItem(key, '1');
    } catch (_error) {
      // Ignore storage errors (private mode / disabled storage).
    }
  }

  function markConversationStarted() {
    if (conversationStarted) {
      return;
    }
    conversationStarted = true;
    writeSessionFlag(CONVERSATION_STORAGE_KEY);
  }

  function bindRuntimeListeners() {
    if (listenersBound || !window.botpress || typeof window.botpress.on !== 'function') {
      return;
    }

    listenersBound = true;
    window.botpress.on('message', function () {
      markConversationStarted();
    });
    window.botpress.on('conversation', function () {
      markConversationStarted();
    });
  }

  function callBotpressMethod(methodName, payload) {
    if (!window.botpress || typeof window.botpress[methodName] !== 'function') {
      return;
    }

    try {
      var result = window.botpress[methodName](payload);
      if (result && typeof result.catch === 'function') {
        result.catch(function () {});
      }
    } catch (_error) {
      // Ignore runtime method failures to avoid noisy page errors.
    }
  }

  function getPageContext() {
    var path = (window.location.pathname || '/').toLowerCase();
    var context = {
      path: path,
      pageType: 'general',
      pageCue: "Let's find your true North.",
    };

    if (path.indexOf('/services') === 0 || path.indexOf('/pricing') === 0) {
      context.pageType = 'pricing_or_services';
      context.pageCue = 'Ready to scale? I can show you which path yields the highest ROI.';
      return context;
    }

    if (path.indexOf('/roi-calculator') === 0) {
      context.pageType = 'roi_calculator';
      context.pageCue = 'Want a fast estimate first? I can walk you through the ROI calculator.';
      return context;
    }

    if (path.indexOf('/free-audit') === 0) {
      context.pageType = 'free_audit';
      context.pageCue = 'If you already have a website, I can point you to the free audit in under a minute.';
      return context;
    }

    if (path.indexOf('/contact') === 0 || path.indexOf('/book-call') === 0) {
      context.pageType = 'contact_or_booking';
      context.pageCue = 'If you are ready, I can help you book the discovery call.';
    }

    return context;
  }

  function triggerExitIntentHook(pageContext) {
    if (conversationStarted || exitHookShown || !window.botpress) {
      return;
    }

    exitHookShown = true;
    writeSessionFlag(EXIT_HOOK_STORAGE_KEY);

    var exitCue = 'Visitor showed exit intent. Start with the exit-intent sales hook.';
    callBotpressMethod('updateUser', {
      data: {
        page_path: pageContext.path,
        page_type: pageContext.pageType,
        page_cue: exitCue,
        exit_intent: true,
        exit_intent_hook: EXIT_HOOK_MESSAGE,
      },
    });

    callBotpressMethod('sendEvent', {
      type: 'lfn.exit_intent',
      payload: {
        path: pageContext.path,
        pageType: pageContext.pageType,
        hookMessage: EXIT_HOOK_MESSAGE,
      },
    });

    callBotpressMethod('open');
  }

  function setupExitIntentWatcher(pageContext) {
    if (exitIntentWatcherBound || conversationStarted || exitHookShown) {
      return;
    }
    if (window.matchMedia && !window.matchMedia('(pointer:fine)').matches) {
      return;
    }

    exitIntentWatcherBound = true;
    var exitContext = {
      path: pageContext.path,
      pageType: pageContext.pageType,
      pageCue: pageContext.pageCue,
    };

    document.addEventListener(
      'mouseout',
      function (event) {
        if (conversationStarted || exitHookShown) {
          return;
        }

        var related = event.relatedTarget || event.toElement;
        if (related) {
          return;
        }
        if (typeof event.clientY !== 'number' || event.clientY > 0) {
          return;
        }

        triggerExitIntentHook(exitContext);
      },
      { passive: true }
    );
  }

  function buildNoraConfiguration() {
    var origin = window.location.origin || 'https://leadflownorth.com';
    return {
      botName: 'Nora',
      botDescription: 'Lead Flow North AI assistant',
      composerPlaceholder: 'Which direction are we heading today?',
      color: '#2563eb',
      variant: 'solid',
      themeMode: 'light',
      radius: 2,
      fontFamily: 'inter',
      botAvatar: origin + '/icon-192.png',
      fabImage: origin + '/icon-192.png',
      website: {
        title: 'leadflownorth.com',
        link: 'https://leadflownorth.com',
      },
      email: {
        title: 'hello@leadflownorth.com',
        link: 'mailto:hello@leadflownorth.com',
      },
      phone: {
        title: '+1 (905) 783-5996',
        link: 'tel:+19057835996',
      },
      termsOfService: {
        title: 'Terms',
        link: 'https://leadflownorth.com/terms',
      },
      privacyPolicy: {
        title: 'Privacy',
        link: 'https://leadflownorth.com/privacy',
      },
      additionalStylesheet: [
        '.bpFab{display:flex!important;position:fixed!important;right:20px!important;bottom:20px!important;z-index:9999!important;box-shadow:0 14px 36px rgba(15,23,42,.32)!important}',
        '.bpHeaderContainer{background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 58%,#16a34a 100%)!important}',
        '.bpComposerSendButton{background:#15803d!important;color:#fff!important}',
        '.bpComposerSendButton:hover{background:#166534!important}',
        '.bpMessageBlocksButton,.bpMessageBlocksButton button{border-radius:9999px!important;font-weight:600!important}',
        '@media (max-width: 767px){.bpFab{right:16px!important;bottom:88px!important}}',
      ].join(''),
    };
  }

  function applyPageContext(pageContext) {
    if (!window.botpress) {
      return;
    }

    callBotpressMethod('updateUser', {
      data: {
        page_path: pageContext.path,
        page_type: pageContext.pageType,
        page_cue: pageContext.pageCue,
      },
    });

    if (!contextSent && typeof window.botpress.sendEvent === 'function') {
      contextSent = true;
      callBotpressMethod('sendEvent', {
        type: 'lfn.page_context',
        payload: {
          path: pageContext.path,
          pageType: pageContext.pageType,
          pageCue: pageContext.pageCue,
        },
      });
    }
  }

  function applyRuntime(pageContext) {
    bindRuntimeListeners();
    applyPageContext(pageContext);
    setupExitIntentWatcher(pageContext);
  }

  function runRuntimeAfterInit(initResult, pageContext) {
    if (initResult && typeof initResult.then === 'function') {
      initResult
        .then(function () {
          applyRuntime(pageContext);
        })
        .catch(function () {
          // Keep page stable if init fails; do not call runtime hooks.
        });
      return;
    }

    applyRuntime(pageContext);
  }

  function initWithCredentials(pageContext) {
    if (!window.botpress || !botpressBotId || !botpressClientId) {
      return false;
    }

    var initResult = window.botpress.init({
      botId: botpressBotId,
      clientId: botpressClientId,
      configuration: buildNoraConfiguration(),
    });
    runRuntimeAfterInit(initResult, pageContext);
    return true;
  }

  function loadBotpress() {
    var pageContext = getPageContext();
    var injectScript = document.createElement('script');
    injectScript.src = botpressInjectUrl;
    injectScript.async = true;
    injectScript.defer = true;
    injectScript.onload = function () {
      if (initWithCredentials(pageContext)) {
        return;
      }

      if (botpressConfigUrl) {
        var configScript = document.createElement('script');
        configScript.src = botpressConfigUrl;
        configScript.defer = true;
        configScript.onload = function () {
          if (window.botpress && typeof window.botpress.config === 'function') {
            window.botpress.config({
              configuration: buildNoraConfiguration(),
            });
          }
          applyRuntime(pageContext);
        };
        document.head.appendChild(configScript);
        return;
      }

      if (window.botpress && typeof window.botpress.config === 'function') {
        window.botpress.config({
          configuration: buildNoraConfiguration(),
        });
        applyRuntime(pageContext);
      }
    };

    document.head.appendChild(injectScript);
  }

  loadBotpress();
})();
