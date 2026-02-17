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
  var fabPositioningBound = false;
  var EXIT_HOOK_STORAGE_KEY = 'lfn_bp_exit_intent_hook_shown';
  var EXIT_HOOK_PROMPT_SENT_STORAGE_KEY = 'lfn_bp_exit_intent_prompt_sent';
  var CONVERSATION_SESSION_STORAGE_KEY = 'lfn_bp_conversation_started';
  var CONVERSATION_LOCAL_STORAGE_KEY = 'lfn_bp_conversation_started_persisted';
  var EXIT_HOOK_MESSAGE = "Before you head out, want a quick win first? I can help you run a Free Website & SEO Audit (if you already have a site) or a fast ROI Calculator check to see if we're worth it before you commit.";
  var EXIT_HOOK_FALLBACK_PROMPT =
    "I'm about to leave. What's the fastest next step for me right now? If I have a website, should I start with the free audit, or should I run the ROI calculator first?";
  var conversationStarted =
    readSessionFlag(CONVERSATION_SESSION_STORAGE_KEY) ||
    readLocalFlag(CONVERSATION_LOCAL_STORAGE_KEY) ||
    hasPersistedBotpressConversation();
  var exitHookShown = readSessionFlag(EXIT_HOOK_STORAGE_KEY);
  var exitHookPromptSent = readSessionFlag(EXIT_HOOK_PROMPT_SENT_STORAGE_KEY);
  var webchatReady = false;
  var pendingExitIntentPrompt = null;

  function getStorage(storageType) {
    try {
      if (storageType === 'local') {
        return window.localStorage;
      }
      return window.sessionStorage;
    } catch (_error) {
      return null;
    }
  }

  function readStorageFlag(storageType, key) {
    var storage = getStorage(storageType);
    if (!storage) {
      return false;
    }

    try {
      return storage.getItem(key) === '1';
    } catch (_error) {
      return false;
    }
  }

  function writeStorageFlag(storageType, key) {
    var storage = getStorage(storageType);
    if (!storage) {
      return;
    }

    try {
      storage.setItem(key, '1');
    } catch (_error) {
      // Ignore storage errors (private mode / disabled storage).
    }
  }

  function readSessionFlag(key) {
    return readStorageFlag('session', key);
  }

  function readLocalFlag(key) {
    return readStorageFlag('local', key);
  }

  function writeSessionFlag(key) {
    writeStorageFlag('session', key);
  }

  function writeLocalFlag(key) {
    writeStorageFlag('local', key);
  }

  function hasPersistedBotpressConversation() {
    var localStorageRef = getStorage('local');
    if (!localStorageRef) {
      return false;
    }

    var keysToCheck = [];
    if (botpressClientId) {
      keysToCheck.push('bp-webchat-' + botpressClientId);
    }

    for (var index = 0; index < localStorageRef.length; index += 1) {
      var storageKey = localStorageRef.key(index);
      if (storageKey && storageKey.indexOf('bp-webchat-') === 0 && keysToCheck.indexOf(storageKey) === -1) {
        keysToCheck.push(storageKey);
      }
    }

    for (var i = 0; i < keysToCheck.length; i += 1) {
      var rawState = null;
      try {
        rawState = localStorageRef.getItem(keysToCheck[i]);
      } catch (_error) {
        rawState = null;
      }
      if (!rawState) {
        continue;
      }

      if (rawState.indexOf('"conversationId"') !== -1 || rawState.indexOf('"user"') !== -1) {
        return true;
      }

      try {
        var parsed = JSON.parse(rawState);
        var state = parsed && parsed.state ? parsed.state : parsed;
        if (state && (state.conversationId || state.user)) {
          return true;
        }
      } catch (_error) {
        // Ignore malformed storage payloads.
      }
    }

    return false;
  }

  function markConversationStarted() {
    if (conversationStarted) {
      return;
    }
    conversationStarted = true;
    writeSessionFlag(CONVERSATION_SESSION_STORAGE_KEY);
    writeLocalFlag(CONVERSATION_LOCAL_STORAGE_KEY);
  }

  function bindRuntimeListeners() {
    if (listenersBound || !window.botpress || typeof window.botpress.on !== 'function') {
      return;
    }

    listenersBound = true;
    window.botpress.on('message', function () {
      markConversationStarted();
    });
    window.botpress.on('webchat:ready', function () {
      webchatReady = true;
      flushPendingExitIntentPrompt();
    });
    window.botpress.on('webchat:opened', function () {
      markConversationStarted();
      flushPendingExitIntentPrompt();
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

  function parseCssPx(value) {
    var parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function positionFab() {
    var wrapper = document.querySelector('.bpFabWrapper');
    if (!wrapper) {
      return;
    }

    var isMobile = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    var rootStyles = window.getComputedStyle(document.documentElement);
    var stickyHeight = parseCssPx(rootStyles.getPropertyValue('--lfn-mobile-sticky-cta-height'));
    var baseOffset = isMobile ? Math.max(stickyHeight - 6, 12) : 20;
    var launcherSize = isMobile ? 56 : 64;

    wrapper.style.setProperty('position', 'fixed', 'important');
    wrapper.style.setProperty('z-index', '9999', 'important');
    wrapper.style.setProperty('right', isMobile ? '8px' : '20px', 'important');
    wrapper.style.setProperty('bottom', baseOffset + 'px', 'important');
    wrapper.style.setProperty('width', launcherSize + 'px', 'important');
    wrapper.style.setProperty('height', launcherSize + 'px', 'important');

    var frame = wrapper.querySelector('.bpFab');
    if (frame) {
      frame.style.setProperty('width', launcherSize + 'px', 'important');
      frame.style.setProperty('height', launcherSize + 'px', 'important');
    }
  }

  function setupFabPositioning() {
    if (fabPositioningBound || typeof window === 'undefined') {
      return;
    }

    fabPositioningBound = true;
    var applyPosition = function () {
      positionFab();
    };

    applyPosition();
    window.setTimeout(applyPosition, 250);
    window.setTimeout(applyPosition, 900);
    window.setTimeout(applyPosition, 2200);
    window.addEventListener('resize', applyPosition, { passive: true });

    if (typeof MutationObserver === 'function' && document.body) {
      var observer = new MutationObserver(applyPosition);
      observer.observe(document.body, { childList: true, subtree: true });
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

  function buildExitIntentPayload(pageContext) {
    return {
      path: pageContext.path,
      pageType: pageContext.pageType,
      hookMessage: EXIT_HOOK_MESSAGE,
    };
  }

  function flushPendingExitIntentPrompt() {
    if (!pendingExitIntentPrompt || !webchatReady || exitHookPromptSent || readSessionFlag(EXIT_HOOK_PROMPT_SENT_STORAGE_KEY)) {
      return;
    }

    var payload = pendingExitIntentPrompt;
    pendingExitIntentPrompt = null;
    exitHookPromptSent = true;
    writeSessionFlag(EXIT_HOOK_PROMPT_SENT_STORAGE_KEY);

    callBotpressMethod('sendEvent', {
      type: 'lfn.exit_intent',
      payload: payload,
    });

    callBotpressMethod('sendMessage', EXIT_HOOK_FALLBACK_PROMPT);
  }

  function queueExitIntentPrompt(pageContext) {
    if (exitHookPromptSent || readSessionFlag(EXIT_HOOK_PROMPT_SENT_STORAGE_KEY)) {
      return;
    }

    pendingExitIntentPrompt = buildExitIntentPayload(pageContext);
    flushPendingExitIntentPrompt();
    window.setTimeout(flushPendingExitIntentPrompt, 1200);
    window.setTimeout(flushPendingExitIntentPrompt, 3000);
  }

  function triggerExitIntentHook(pageContext) {
    if (conversationStarted || exitHookShown || readSessionFlag(EXIT_HOOK_STORAGE_KEY) || !window.botpress) {
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

    callBotpressMethod('open');
    queueExitIntentPrompt(pageContext);
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
      storageLocation: 'localStorage',
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
        '.bpFabWrapper{position:fixed!important;right:20px!important;bottom:20px!important;z-index:9999!important}',
        '.bpFab{display:flex!important;box-shadow:0 14px 36px rgba(15,23,42,.32)!important}',
        '.bpHeaderContainer{background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 58%,#16a34a 100%)!important}',
        '.bpComposerSendButton{background:#15803d!important;color:#fff!important}',
        '.bpComposerSendButton:hover{background:#166534!important}',
        '.bpMessageBlocksButton,.bpMessageBlocksButton button{border-radius:9999px!important;font-weight:600!important}',
        '@media (max-width: 767px){.bpFabWrapper{right:8px!important;bottom:calc(env(safe-area-inset-bottom,0px) + var(--lfn-mobile-sticky-cta-height,0px))!important;width:56px!important;height:56px!important}.bpFab{width:56px!important;height:56px!important}}',
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
    setupFabPositioning();
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
