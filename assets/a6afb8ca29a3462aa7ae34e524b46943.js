var injectedOptions = {"flow": "OPT_IN", "key": "a6afb8ca29a3462aa7ae34e524b46943", "timeoutSeconds": 10, "scripts": {}, "frames": {}, "cookies": {"28fc6058a7": "C001", "__cf_bm": "C001", "__hssc": "C003", "__hssrc": "C003", "__hstc": "C004", "_ga": "C004", "_gat_gtag_UA_142224028_3": "C004", "_gid": "C004", "_lfa": "C002", "_zcsr_tmp": "C004", "ajs_anonymous_id": "C004", "amp_ad0beb": "C001", "CONSENT": "C002", "httpReferrer1": "C004", "hubspotutk": "C004", "IDE": "C002", "JSESSIONID": "C004", "s247cname": "C004", "VISITOR_INFO1_LIVE": "C002", "YSC": "C004"}, "pixels": {"//static.ads-twitter.com/uwt.js": "C002", "https://a.quora.com/qevents.js": "C002", "https://connect.facebook.net/en_US/fbevents.js": "C002", "https://snap.licdn.com/li.lms-analytics/insight.min.js": "C002", "edge.fullstory.com/s/fs.js": "C004", "https://cdn.segment.com/analytics.js/v1": "C004", "'squarespace-common'": "C004", "'squarespace-performance'": "C004", "//www.google-analytics.com/analytics.js": "C004", "//static.hotjar.com/c/hotjar-": "C004", "ga('send'": "C004", "function gtag()": "C004"}};
const CUSTOMIZATION = {"banner": {"language": [{"name": "English (US)", "id": "englist"}], "backgroundColor": "#ffffff", "noticeTextColor": "#1f1f1f", "noticeText": "\ud83c\udf6a لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", "noticeFontStyle": "normal", "type": "banner", "position": "bottom", "acceptCTA": {"visibility": true, "text": "پذیرش کوکی ها", "color": "#ffffff", "buttonType": "filled", "buttonColor": "#0a5cff", "fontStyle": "normal"}, "denyCTA": {"visibility": false, "text": "Deny All", "color": "#fff", "buttonType": "filled", "buttonColor": "#1D2FB5", "fontStyle": "normal"}, "manageSettingsCTA": {"visibility": true, "text": "مدیریت کوکی ها", "color": "#0a5cff", "buttonType": "link", "buttonColor": "#ffffff", "fontStyle": "normal"}}, "manageCookieBox": {"type": "sidepanel", "background": "#FFFFFF", "textColor": "#1f1f1f", "mainButtonColor": "#0a5cff", "noticeTextColor": "#1f1f1f", "noticeBoxStyle": "normal", "noticeText": "V7 uses cookies to keep our website safe, to improve your experience and for marketing. You can review and manage your cookie settings below to control your privacy. ", "noticeFonStyle": "normal"}, "metaDetails": {"manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"}, "remove_privado_branding": false};
const CATEGORIZATION = [{"name": "Analytics", "key": "C004", "description": "These cookies help us measure the performance of our website and features. They also help us improve our offerings and better serve our customers.", "state": 0, "cookies": [{"name": "__hstc", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "_ga", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "_gat_gtag_UA_142224028_3", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "_gid", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "_zcsr_tmp", "description": "", "hostname": "www.site24x7.eu", "lifespan": "session", "details": ""}, {"name": "ajs_anonymous_id", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "httpReferrer1", "description": "", "hostname": "www.site24x7.eu", "lifespan": "persistent", "details": ""}, {"name": "hubspotutk", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "JSESSIONID", "description": "", "hostname": "www.site24x7.eu", "lifespan": "session", "details": ""}, {"name": "s247cname", "description": "", "hostname": "www.site24x7.eu", "lifespan": "session", "details": ""}, {"name": "YSC", "description": "", "hostname": ".youtube.com", "lifespan": "session", "details": ""}]}, {"name": "Functional", "key": "C003", "description": "These cookies help us personalize our website based on your usage.", "state": 0, "cookies": [{"name": "__hssc", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "__hssrc", "description": "", "hostname": ".v7labs.com", "lifespan": "session", "details": ""}]}, {"name": "Strictly Essential", "key": "C001", "description": "These cookies are necessary for the website to function and cannot be switched off. These cookies also are necessary for a functionality explicitly requested by you.", "state": 2, "cookies": [{"name": "28fc6058a7", "description": "", "hostname": "www.site24x7.eu", "lifespan": "session", "details": ""}, {"name": "__cf_bm", "description": "", "hostname": ".angel.co", "lifespan": "persistent", "details": ""}, {"name": "amp_ad0beb", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}]}, {"name": "Targeting", "key": "C002", "description": "These cookies help us market to you on different platforms using our advertising partners.", "state": 0, "cookies": [{"name": "_lfa", "description": "", "hostname": ".v7labs.com", "lifespan": "persistent", "details": ""}, {"name": "CONSENT", "description": "", "hostname": ".youtube.com", "lifespan": "persistent", "details": ""}, {"name": "IDE", "description": "", "hostname": ".doubleclick.net", "lifespan": "persistent", "details": ""}, {"name": "VISITOR_INFO1_LIVE", "description": "", "hostname": ".youtube.com", "lifespan": "persistent", "details": ""}]}];

// const API_URL = `https://test.privado.ai`;
// const API_URL = `https://api.privado.ai`;
// const API_URL = `http://localhost:8000`;

const API_URL = 'https://api.cookie.privado.ai/prod';
const CSS_URL = `https://cdn.privado.ai/index.css`;

// const CSS_URL = `http://localhost:8080/assets/base.css`;
let FLOW = injectedOptions.flow || injectedOptions.default_flow;
if(!("metaDetails" in CUSTOMIZATION)) CUSTOMIZATION.metaDetails = { "manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"};
CUSTOMIZATION.metaDetails = Object.assign({ "manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"}, CUSTOMIZATION.metaDetails);

// const CUSTOMIZATION = injectedOptions.customization;
// const CATEGORIZATION = injectedOptions.categorization;
const COOKIELIST = CATEGORIZATION.flatMap(category => category.cookies.map(cookie => ({...cookie, category: category.name })));
const COOKIE_TYPES = CATEGORIZATION.map(category => category.key.toLocaleUpperCase());
window.dataLayer = window.dataLayer || [];

// Initialize with only essential (RUns before GTM)
var COOKIES_ALLOWED = [];
COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
  if(category.state === 2)
    return [...acc, category.key];
  return acc;
}, []);
dataLayer.push({"event": 'setCookieConsent', "CookieConsent": COOKIES_ALLOWED.toString()});

// Initiate CSS load
(function (url) {
  if(document.createStyleSheet) {
    document.createStyleSheet(url);
  }
  else {
    var styles = `@import url('${url}');`;
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
})(CSS_URL);

const uuidV4 = () => { // eslint-disable-line complexity
    // if possible, generate a single random value, 128 bits (16 bytes) in length
    // in an environment where that is not possible, generate and make use of 4 32-bit (4-byte) random values
    // use crypto-grade randomness when available, else Math.random()
    const random = () => {
        const
            fourBytesOn = 0xffffffff, // 4 bytes, all 32 bits on: 4294967295
            c = typeof crypto === "object"
                ? crypto // node or most browsers
                : typeof msCrypto === "object" // stinky non-standard IE
                    ? msCrypto // eslint-disable-line no-undef
                    : null; // what old or bad environment are we running in?
            return c
                ? c.randomBytes
                    ? parseInt(c.randomBytes(4).toString("hex"), 16) / (fourBytesOn + 1) - Number.EPSILON // node
                    : c.getRandomValues(new Uint32Array(1))[0] / (fourBytesOn + 1) - Number.EPSILON // browsers
                : Math.random();
    };

    const
        c = typeof crypto === "object"
            ? crypto // node or most browsers
            : typeof msCrypto === "object" // stinky non-standard IE
                ? msCrypto // eslint-disable-line no-undef
            : null; // what old or bad environment are we running in?
    let
        byteArray = c
            ? c.randomBytes
                ? c.randomBytes(16) // node
                : c.getRandomValues(new Uint8Array(16)) // browsers
            : null,
        uuid = [ ];

    /* eslint-disable no-bitwise */
    if ( ! byteArray) { // no support for generating 16 random bytes in one shot -- this will be slower
        const
            int = [
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0
            ];
        byteArray = [ ];
        for (let i = 0; i < 256; i++) {
            byteArray[i] = int[i < 4 ? 0 : i < 8 ? 1 : i < 12 ? 2 : 3] >> i % 4 * 8 & 0xff;
        }
    }
    byteArray[6] = byteArray[6] & 0x0f | 0x40; // always 4, per RFC, indicating the version
    byteArray[8] = byteArray[8] & 0x3f | 0x80; // constrained to [89ab], per RFC for version 4
    for (let i = 0; i < 16; ++i) {
        uuid[i] = (byteArray[i] < 16 ? "0" : "") + byteArray[i].toString(16);
    }
    uuid =
        uuid[ 0] + uuid[ 1] + uuid[ 2] + uuid[ 3] + "-" +
        uuid[ 4] + uuid[ 5]                       + "-" +
        uuid[ 6] + uuid[ 7]                       + "-" +
        uuid[ 8] + uuid[ 9]                       + "-" +
        uuid[10] + uuid[11] + uuid[12] + uuid[13] + uuid[14] + uuid[15];
    return uuid;
    /* eslint-enable no-bitwise */
}

class CookieConsent {
  constructor(params) {
    this.injectedOptions = params.injectedOptions;
    this.timerId = null;
    this.setPreferenceCookies = this.setPreferenceCookies.bind(this);
    this.acceptAll = this.acceptAll.bind(this);
    this.denyConsent = this.denyConsent.bind(this);
    this.savepreferences = this.savepreferences.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    this.openModal = this.openModal.bind(this);
    this.domLoaded = this.domLoaded.bind(this);
    this.showPrivacyBanner = this.showPrivacyBanner.bind(this);
    this.hideManageModal = this.hideManageModal.bind(this);
    this.removeAllEventListeners = this.removeAllEventListeners.bind(this);
    this.showNoticeBanner = this.showNoticeBanner.bind(this);
    this.consentRevoked = this.consentRevoked.bind(this);
    this.initialiseCookiesAndScriptBlocking = this.initialiseCookiesAndScriptBlocking.bind(this);
    this.outsideClickFinder = this.outsideClickFinder.bind(this);
    this.handleScriptBlocking = this.handleScriptBlocking.bind(this);
    this.handlePixelBlocking = this.handlePixelBlocking.bind(this);
    this.handleFrameBlocking = this.handleFrameBlocking.bind(this);
    this.initializeUUID = this.initializeUUID.bind(this);
    this.injectSettingsModal = this.injectSettingsModal.bind(this);
    this.allFrames = new Map();
    this.allFramesParents = new Map();
    this.initializeUUID();
  }

  outsideClickFinder(event) {
    const privacyBox = document.getElementById("cookie-consent-banner");
    if (privacyBox && !privacyBox.contains(event.target)) {
      document.dispatchEvent(new Event("acceptAllButtonClick"));
    }
  }

  getCookie(name) {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(name));
    if(cookie){
      return cookie.split('=')[1];
    }
    return false;
  }

  getAllCookies() {
    const allCookies = document.cookie.split(";");
    let cookies = {};
    allCookies.forEach((cookie) => {
      const nameAndValue = cookie.split("=");
      Object.assign(cookies, { [nameAndValue[0].trim()]: nameAndValue[1] });
    });
    return cookies;
  }

  deleteCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  deleteAllCookies() {
    const cookies = this.getAllCookies();
    for (let i in cookies) {
      if (
        COOKIES_ALLOWED.indexOf(this.injectedOptions.cookies[i]) < 0 &&
        i !== "preferences" && i !== "last_consent"
      ) {
        this.deleteCookie(i);
      }
    }
  }

  checkForNewCookie() {
    const cookies = this.getAllCookies();
    for (let i in cookies) {
      if (injectedOptions.cookies[cookies[i]]) {
        //Cool Cookie exists
      } else {
        //Code to send cookie name and info to api
      }
    }
  }

  getWebsiteLanguage() {
    const lang = navigator.language;
    return lang;
  }

  removeAllEventListeners() {
    document.removeEventListener("openModal", this.openModal);
    document.removeEventListener("acceptAllButtonClick", this.acceptAll);
    document.removeEventListener("denyButtonClick", this.denyConsent);
    document.removeEventListener("savePreferences", this.savepreferences);
    document.removeEventListener("click", this.outsideClickFinder);
  }

  initializeUUID() {
    try{
      let lastConsentCookie = this.getCookie(`last_consent`);
      if(lastConsentCookie) {
        this.uuid = lastConsentCookie.split(`|`)[0];
      }
      else {
        this.uuid = uuidV4();
      }
    }
    catch(e){}
  }

  setPreferenceCookies(source, source_desc) {
    var theDate = new Date();
    var oneYearLater = new Date(theDate.getTime() + 31536000000);
    var expiryDate = oneYearLater.toGMTString();
    document.cookie = `preferences=${COOKIES_ALLOWED}; expires=${expiryDate}; SameSite=Lax; path=/`;
    document.cookie = `last_consent=${this.uuid}|${theDate.getTime()}; SameSite=Lax; expires=${expiryDate}; path=/`;
    if(navigator.sendBeacon){
      const beaconData = JSON.stringify({
        domain_key: injectedOptions.key,
        consent_id: this.uuid,
        consent: COOKIES_ALLOWED.toString(),
        timestamp: theDate.getTime()/1000,
        source: source,
        source_desc: source_desc,
        banner_type: FLOW
      });
      const status = navigator.sendBeacon(`${API_URL}/v1/consent-update/`, beaconData);
      // const status = navigator.sendBeacon(`${API_URL}/v1/consent/update/`, beaconData);
    }

  }

  consentGranted() {
    dataLayer.push({"event": 'setCookieConsent', "CookieConsent": COOKIES_ALLOWED.toString()});
    var scripts = document.getElementsByTagName("SCRIPT");
    this.handleScriptBlocking(scripts);
    this.handlePixelBlocking();
    this.handleFrameBlocking();
    this.deleteAllCookies();
  }

  consentRevoked() {
    CATEGORIZATION.forEach(category => {
      if(category.state !== 2) {
        const isChecked = document.getElementById(category.key.toLocaleUpperCase()).checked;
        if(isChecked && !COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
          COOKIES_ALLOWED.push(category.key.toLocaleUpperCase());
        else if(!isChecked && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
          COOKIES_ALLOWED = COOKIES_ALLOWED.filter(x => x !== category.key.toLocaleUpperCase())
      }
    });

    const privadoModal = document.getElementById("manage-cookies");
    if(privadoModal)
      privadoModal.style.display = "none";


    this.removeAllEventListeners();

    this.setPreferenceCookies("Consent Revoked", "Consent Revoked");
    dataLayer.push({"event": 'setCookieConsent', "CookieConsent": COOKIES_ALLOWED.toString()});

    var scripts = document.getElementsByTagName("SCRIPT");
    this.handleScriptBlocking(scripts);
    this.handlePixelBlocking();
    this.handleFrameBlocking();
    this.deleteAllCookies();
  }

  handleScriptBlocking(scripts) {
    // 1. Loaded blacklisted scripts
    // 2. Blocked blacklisted scripts - Ignore case
    // 3. Blocked Whitelisted scripts
    // 4. Loaded Whitelisted scripts - Ignore case
    let loadedBlacklistedScripts = [], blockedWhitelistedScripts = [];
    for(let script of scripts) {
      // Script is known
      if(injectedOptions.scripts[script.src]) {
        if((script.type === "application/javascript" || script.type === "" ) && !COOKIES_ALLOWED.includes(injectedOptions.scripts[script.src]))
          loadedBlacklistedScripts.push(script);
        else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(injectedOptions.scripts[script.src]))
          blockedWhitelistedScripts.push(script);
      }
      // Script unknown and category Set
      else if(script.hasAttribute("privado-cookie-category")) {
        const scriptCategory = script.getAttribute("privado-cookie-category");
        if((script.type === "application/javascript" || script.type === "" ) && !COOKIES_ALLOWED.includes(scriptCategory))
          loadedBlacklistedScripts.push(script);
        else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(scriptCategory))
          blockedWhitelistedScripts.push(script);
      }
    };

    loadedBlacklistedScripts.forEach((script) => {
      script.setAttribute("type", "javascript/privado-block");
    });

    blockedWhitelistedScripts.forEach((script) => {
      try{
        let elem = script.cloneNode(true);
        elem.setAttribute("type", "application/javascript");
        script.parentNode.replaceChild(elem, script);
      }
      catch(e){}
    });
  }

  handlePixelBlocking() {
    // 1. Loaded blacklisted pixels
    // 2. Blocked blacklisted pixels - Ignore case
    // 3. Blocked Whitelisted pixels
    // 4. Loaded Whitelisted pixels - Ignore case

    const scripts = document.getElementsByTagName("SCRIPT");
    let loadedBlacklistedPixels = [], blockedWhitelistedPixels = [];
    for(let script of scripts) {
      if(!script.src) {
        for(let [pixel, pixelCategory] of Object.entries(injectedOptions.pixels)){
          if(script.innerText.includes(pixel)){
            // Pixel script identified
            if(script.type !== "javascript/privado-block" && !COOKIES_ALLOWED.includes(pixelCategory))
              loadedBlacklistedPixels.push(script);
            else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(pixelCategory))
              blockedWhitelistedPixels.push(script);
          }
        }
      }
    }
    loadedBlacklistedPixels.forEach((pixel) => {
      pixel.setAttribute("type", "javascript/privado-block");
    });

    blockedWhitelistedPixels.forEach((pixel) => {
      try{
        let elem = pixel.cloneNode(true);
        elem.setAttribute("type", "application/javascript");
        pixel.parentNode.replaceChild(elem, pixel);
      }
      catch(e){}
    });
  }

  handleFrameBlocking() {
    const injectedOptions = this.injectedOptions;
    const frames = Array.from(document.getElementsByTagName("FRAME"))
    .concat(Array.from(document.getElementsByTagName("IFRAME")));

    let loadedBlacklistedFrames = [], blockedWhitelistedFrames = [];

    for(let frame of frames) {
      let frameSrc = frame.src, framePrivadoSrc = frame.getAttribute("data-privado-src");

      // Frame exists but not allowed
      if(injectedOptions.frames[frameSrc] && !COOKIES_ALLOWED.includes(injectedOptions.frames[frameSrc])) {
        loadedBlacklistedFrames.push(frame);
        // Frames blocked but allowed
      } else if(framePrivadoSrc && COOKIES_ALLOWED.includes(injectedOptions.frames[framePrivadoSrc])) {
        blockedWhitelistedFrames.push(frame);
      }
    }

    loadedBlacklistedFrames.forEach(frame => {
      frame.setAttribute(`data-privado-src`, frame.src);
      frame.setAttribute(`data-privado-srcdoc`, frame.srcdoc);
      frame.setAttribute(`data-privado-sandbox`, frame.sandbox);
      frame.setAttribute(`sandbox`, ``);
      frame.setAttribute(`srcdoc`, this.getPrivadoFrameBannerHTML());
      frame.removeAttribute(`src`);
    });

    blockedWhitelistedFrames.forEach(frame => {
      let elem = frame.cloneNode(true);

      let originalSandbox = elem.getAttribute(`data-privado-sandbox`);
      if (originalSandbox) elem.setAttribute("sandbox", originalSandbox);
      else elem.removeAttribute("sandbox");

      let originalSrcdoc = elem.getAttribute(`data-privado-srcdoc`);
      if (originalSrcdoc) elem.setAttribute("srcdoc", originalSrcdoc);
      else elem.removeAttribute("srcdoc");

      elem.setAttribute("src", elem.getAttribute(`data-privado-src`));

      elem.removeAttribute(`data-privado-src`);
      elem.removeAttribute(`data-privado-sandbox`);
      frame.parentNode.replaceChild(elem, frame);
    });

  }

  setPrivacyObserver() {
    const injectedOptions = this.injectedOptions;
    const PrivacyObserver = new MutationObserver((mutations) => {
      // Everytime DOM element changes
      mutations.forEach((mutation) => {
        let addedNodes = mutation.addedNodes; //Last mutated node
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.tagName === "SCRIPT") {
            this.handleNewScriptNode(node);
          }
          else if (node.nodeType === 1 &&
            (node.tagName === "IFRAME" || node.tagName === "FRAME")
          ) {
            this.handleNewFrameNode(node);
          }
        });
      });
    });

    PrivacyObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  handleNewScriptNode(node) {
    const injectedOptions = this.injectedOptions;

    // For known and blocked scripts (auto-blocking)
    if (
      injectedOptions.scripts[node.src] &&
      !COOKIES_ALLOWED.includes(injectedOptions.scripts[node.src])
    ) {
      node.type = "javascript/privado-block";
      // Firefox has this additional event which prevents scripts from beeing executed
      const beforeScriptExecuteListener = function (event) {
        // Prevent only marked scripts from executing
        if (node.getAttribute("type") === "javascript/privado-block")
          event.preventDefault();
        node.removeEventListener(
          "beforescriptexecute",
          beforeScriptExecuteListener
        );
      };
      node.addEventListener(
        "beforescriptexecute",
        beforeScriptExecuteListener
      );
    }

    // For manual blocking
    else if (
      node.type === "javascript/privado-block" &&
      injectedOptions.scripts[node.src] &&
      COOKIES_ALLOWED.includes(injectedOptions.scripts[node.src])
    ) {
      node.type = "application/javascript";
    }

    // For manual blocking with script unknown and category Set
    else if(
      node.type === "javascript/privado-block" &&
      node.hasAttribute("privado-cookie-category") &&
      COOKIES_ALLOWED.includes(node.getAttribute("privado-cookie-category"))
    ) {
      node.type = "application/javascript";
    }

    // For pixels
    else if (!node.src) {
      for(let [pixel, pixelCategory] of Object.entries(injectedOptions.pixels)){
        if(node.innerText.includes(pixel) && !COOKIES_ALLOWED.includes(pixelCategory)){
          // Pixel script identified
          node.type = "javascript/privado-block";
        }
      }
    }

    // For unknown scripts which does not fall in above cases
    else if (!injectedOptions.scripts[node.src]) {
      // Do nothing
    }
  }

  handleNewFrameNode(node) {
    const injectedOptions = this.injectedOptions;
    if(
      injectedOptions.frames[node.src] &&
      !COOKIES_ALLOWED.includes(injectedOptions.frames[node.src])
    ) {
      node.setAttribute(`data-privado-srcdoc`, node.srcdoc);
      node.setAttribute(`srcdoc`, this.getPrivadoFrameBannerHTML());
      node.setAttribute(`data-privado-src`, node.src);
      node.setAttribute(`data-privado-sandbox`, node.sandbox);
      node.setAttribute(`sandbox`, "");
      node.removeAttribute(`src`, "");
    }
  }

  domLoaded() {
    this.injectSettingsModal();

    let cookies = this.getCookie("preferences");
    if (cookies !== false) {
      if(cookies.length)
        COOKIES_ALLOWED = cookies.split(",");
      else COOKIES_ALLOWED = [];
    }
    else if( FLOW === "NOTICE" ){
      this.showNoticeBanner();
      this.setPreferenceCookies("Default", "پذیرش کوکی ها");
    }
    else {
      this.showPrivacyBanner();
    }

    // Unblock any manually blocked script
    // or block any unblocked script if preference is set
    this.consentGranted();
    dataLayer.push({"event": 'setCookieConsent', "CookieConsent": COOKIES_ALLOWED.toString()});

    this.renderCookieTable();
    this.initializeChangeConsentButton();
    window.addEventListener("load", () => {
      this.renderCookieTable();
      this.initializeChangeConsentButton();
    });
  }

  initializeChangeConsentButton() {
    // <button id="privado-changepreferences">
    // <button id="privado-changepreferences" onclick="window.top.document.dispatchEvent(new Event('changeConsent'))">

    const privadoChangepreferences = document.getElementById(`privado-changepreferences`);
    if(privadoChangepreferences) {

      privadoChangepreferences.addEventListener('click', function () {
        document.dispatchEvent(new Event("changeConsent"));
      });
    }
  };

  getPrivadoFrameBannerHTML() {
    return `
      <div>
        This Frame has been blocked as per your cookie consent.
        To unblock, kindly change your cookie preferences.
      </div>
    `;
  }

  showNoticeBanner() {
    const { noticeFontStyle, acceptCTA } = CUSTOMIZATION.banner;
    const buttonClassName = {
      outlined: "banner-outlined-button",
      link: "banner-link-button",
      filled: "banner-filled-button",
    };
    const privadoPrivacyBanner = document.createElement("div");
    privadoPrivacyBanner.id = "cookie-consent-banner";
    privadoPrivacyBanner.classList.add(
      CUSTOMIZATION.banner.type === `banner`? "edit-modal-banner" : "edit-modal-banner-box"
    );
      privadoPrivacyBanner.style.background = CUSTOMIZATION.banner.backgroundColor || "#010d6a";
      privadoPrivacyBanner.innerHTML = `
        <span id="notice-close-icon" class="banner-close-icon" style="color: ${CUSTOMIZATION.banner.noticeTextColor};" >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
          </svg>
        </span>
        <div class=${(CUSTOMIZATION.banner.type === `banner`)? "banner-content-wrapper-banner" : "banner-content-wrapper-box"}>
          <p
            class="privado-para banner-notice-text"
            style="
              font-weight: ${(noticeFontStyle.includes('bold'))? "bold":""};
              text-decoration: ${(noticeFontStyle.includes('underline'))? "underline":""};
              fontStyle: ${(noticeFontStyle.includes('italic'))? "italic":""};
              color: ${CUSTOMIZATION.banner.noticeTextColor};
            "
          >
            ${CUSTOMIZATION.banner.noticeText}
          </p>
          <div class="banner-button-container">
            <button
              id = "accept-button"
              class = ${buttonClassName[acceptCTA.buttonType]}
              style = "
                background-color: ${(acceptCTA.buttonType === "filled")? acceptCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(acceptCTA.buttonType === "outlined")? acceptCTA.buttonColor: "none"};
                color: ${(acceptCTA.color)};
                font-weight: ${(acceptCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(acceptCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(acceptCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${acceptCTA.text}
            </button>
          </div>
        </div>
      `;

    if(document.body) {
      document.body.appendChild(privadoPrivacyBanner);
          switch (CUSTOMIZATION.banner.position) {
            case "top":
              privadoPrivacyBanner.style.top = 0;
              privadoPrivacyBanner.style.removeProperty("bottom");
              break;
            case "mid":
              privadoPrivacyBanner.style.bottom = "";
              privadoPrivacyBanner.style.top = `calc(50% - ${privadoPrivacyBanner.offsetHeight/2}px)`;
              break;
            case "bottom":
              privadoPrivacyBanner.style.bottom = 0;
              privadoPrivacyBanner.style.top = "";
              break;
          }
    }

    const acceptButtonEl = document.getElementById("accept-button");
    if (acceptButtonEl) {
      acceptButtonEl.addEventListener('click', function () {
        document.dispatchEvent(new Event("noticeButtonClicked"));
      })
    }

    const noticeCloseIcon = document.getElementById("notice-close-icon");
    if (noticeCloseIcon) {
      noticeCloseIcon.addEventListener('click', function () {
        document.dispatchEvent(new Event("noticeButtonClicked"));
      })
    }
  }

  hideNoticeBanner() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if(privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    document.removeEventListener("noticeButtonClicked", this.hideNoticeBanner);
  }

  acceptAll() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    COOKIES_ALLOWED = COOKIE_TYPES;
    this.setPreferenceCookies("Cookie Banner", "پذیرش کوکی ها");

    this.consentGranted();
    this.removeAllEventListeners();
    // location.reload();
  }

  injectSettingsModal() {
    const CONFIG = CUSTOMIZATION.manageCookieBox;
    const META_CONFIG = CUSTOMIZATION.metaDetails;
    META_CONFIG.poweredByFooterText = META_CONFIG.poweredByFooterText
    .replace("{privado}", `<a style="text-decoration: none; color: inherit;" href="https://privado.ai/cookie-consent">Privado</a>`);

    // if already present, remove that one
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal) {
      manageCookieModal.parentNode.removeChild(manageCookieModal);
    }

    const privadoManageCookies = document.createElement("div");
    privadoManageCookies.style.display = "none";
    privadoManageCookies.id = "manage-cookies";
    privadoManageCookies.classList.add(
      CONFIG.type === `box`? "manage-cookies-modal" : "manage-cookies-modal-sidepanel"
    );
    privadoManageCookies.innerHTML = `
      <div class="modal-notice-heading">
        <span id="modal-heading-icon" class="modal-heading-icon">
          <svg stroke="currentColor" fill="currentColor" stroke-width="60px" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
            </path>
          </svg>
        </span>
        ${META_CONFIG.manageCookiesTopHeading}
      </div>
      <div class="manage-cookies-modal-wrapper" style="min-height: calc(100% - 78px - 4px - 64px);" >
        <div class="manage-cookies-modal-content" id="manage-cookies-modal-content">
          <p
                class="privado-para modal-notice-text"
                style="
                font-weight: ${(CONFIG.noticeFonStyle.includes('bold'))? "bold":""};
                text-decoration: ${(CONFIG.noticeFonStyle.includes('underline'))? "underline":""};
                font-style: ${(CONFIG.noticeFonStyle.includes('italic'))? "italic":""};
                "
              >
                ${CONFIG.noticeText}
              </p>
              <div id="manage-cookies-cookielist" class="manage-cookies-cookielist">
              </div>

        </div>
        <p id="privado-branding-wrap" class="privado-para privado-power" style="font-size: 14px; text-align: center;" >
          ${META_CONFIG.poweredByFooterText}
        </p>
      </div>
      <div class="manage-cookies-save-container">
        <button class="save-button-cookie-policy" id="save-button">
          ${META_CONFIG.saveButtonText}
        </button>
      </div>
    `;

    if(document.body) {
      document.body.appendChild(privadoManageCookies);
      const variableParent = document.getElementById('manage-cookies');
      for(const [field, value] of Object.entries(CONFIG)){
        switch (field) {
          case "background":
              variableParent.style.setProperty("--primary-background", value);
              break;
          case "textColor":
              variableParent.style.setProperty("--primary-text-color", value);
              break;
          case "mainButtonColor":
              variableParent.style.setProperty("--primary-button-background", value);
              break;
          case "toggleButtonColor":
              variableParent.style.setProperty("--toggle-button-color", value);
              break;
          case "noticeTextColor":
              variableParent.style.setProperty("--modal-notice-text-color", value);
              break;
        }
      }
    }
  }

  openModal(type) {
    // Manage Settings Modal
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    // Mark visible
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal)
      manageCookieModal.style.display = "unset";

    if(FLOW === "IMPLIED_OPT_IN" && this.timerId){
      clearTimeout(this.timerId);
      this.timerId = null;
      document.removeEventListener("click", this.outsideClickFinder);
    }

    // Populate cookie list (checks according to type)
    const cookieListDiv = document.getElementById("manage-cookies-cookielist");
    if(cookieListDiv) {
      cookieListDiv.innerHTML = CATEGORIZATION.map((category, i) => {
        let isChecked = "checking";
        if( type === "changeConsent" && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()) ){
          isChecked = "checked";
        }
        else if( type !== "changeConsent" && (category.state === 1 || category.state === 2 ) ){
          isChecked = "checked";
        }

        return `
          <div>
            <div>
              <div class="category-input-container" style = "display: flex; justify-content: space-between;">
                <p class = "cookie-heading privado-para">
                  ${category.name}
              </p>
              <input
              class="toggle-checkbox"
              type="checkbox"
              id="${category.key.toLocaleUpperCase()}"
              ${isChecked}
              ${(category.state === 2)?"disabled":""}
            />
            <label class="toggle-label" for=${category.key.toLocaleUpperCase()}>Toggle</label>
          </div>
          <p class="privado-para cookie-desc">
            ${category.description}
          </p>
        </div>
        <div onclick="cookieConsent.handleCollapsible(event)" class="cookie-detail-collapsible collapsible-inactive-icon">
          ${CUSTOMIZATION.metaDetails.cookieDetailsSubtext}
        </div>
          <div class="cookie-detail-box">
            ${category.cookies.map((cookie) => {
              return `
                <div class="cookie-detail" >
                  <div class="cookie-name-details">
                    <p class="privado-para cookie-box-name">Cookie Name</p>
                    <p class="privado-para cookie-box-detail">${cookie.name}</p>
                  </div>
                  <div class="cookie-name-details">
                    <p class="privado-para cookie-box-name">Provider</p>
                    <p class="privado-para cookie-box-detail">${cookie.hostname}</p>
                  </div>
                </div>
              `;
            }).join("")}

          </div>
        </div>
        `;
      }).join("");
    }

    const savepreferencesClick = document.getElementById("save-button");
    if(savepreferencesClick) {
      savepreferencesClick.addEventListener('click', function () {
        if (type === "changeConsent") {
          document.dispatchEvent(new Event("revokeConsent"));
        } else document.dispatchEvent(new Event("savePreferences"));
      });
    }

    const backButtonClick = document.getElementById("modal-heading-icon");
    if(backButtonClick) {
      backButtonClick.addEventListener('click', function (e) {
        e.stopPropagation();
        document.dispatchEvent(new Event("hideManageModal"));
      })
    }
  }

  handleCollapsible(event) {
    event.target.nextElementSibling.classList.toggle(`cookie-detail-box-active`);
    event.target.classList.toggle(`collapsible-active-icon`);
    event.target.classList.toggle(`collapsible-inactive-icon`);
  }

  hideManageModal() {
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal)
      manageCookieModal.style.display = "none";

    const preferenceSet = this.getCookie(`preferences`);
    if(preferenceSet === false){
      this.showPrivacyBanner();
    }
  }

  showPrivacyBanner() {
    if (FLOW === "IMPLIED_OPT_IN" && !this.timerId){
      document.addEventListener("click", this.outsideClickFinder);
      this.timerId = setTimeout(() => {
        document.dispatchEvent(new Event("acceptAllButtonClick"));
      }, this.injectedOptions.timeoutSeconds * 1000);
    }

    const { noticeFontStyle, manageSettingsCTA, acceptCTA, denyCTA } = CUSTOMIZATION.banner;
    const buttonClassName = {
      outlined: "banner-outlined-button",
      link: "banner-link-button",
      filled: "banner-filled-button",
    };
    const privadoPrivacyBanner = document.createElement("div");
    privadoPrivacyBanner.id = "cookie-consent-banner";
    privadoPrivacyBanner.classList.add(
      CUSTOMIZATION.banner.type === `banner`? "edit-modal-banner" : "edit-modal-banner-box"
    );
      privadoPrivacyBanner.style.background = CUSTOMIZATION.banner.backgroundColor || "#010d6a";
      privadoPrivacyBanner.innerHTML = `
        <span id="banner-close-icon" class="banner-close-icon" style="color: ${CUSTOMIZATION.banner.noticeTextColor};" >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
          </svg>
        </span>
        <div class=${(CUSTOMIZATION.banner.type === `banner`)? "banner-content-wrapper-banner":"banner-content-wrapper-box"} >
          <p
            class="privado-para banner-notice-text"
            style="
              font-weight: ${(noticeFontStyle.includes('bold'))? "bold":""};
              text-decoration: ${(noticeFontStyle.includes('underline'))? "underline":""};
              fontStyle: ${(noticeFontStyle.includes('italic'))? "italic":""};
              color: ${CUSTOMIZATION.banner.noticeTextColor};
            "
          >
            ${CUSTOMIZATION.banner.noticeText}
          </p>
          <div class="banner-button-container">
            <button
              id = "manage-settings-button"
              class = ${buttonClassName[manageSettingsCTA.buttonType]}
              style = "
                display: ${(manageSettingsCTA.visibility === false)? "none":"unset"};
                background-color: ${(manageSettingsCTA.buttonType === "filled")? manageSettingsCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(manageSettingsCTA.buttonType === "outlined")? manageSettingsCTA.buttonColor: "none"};
                color: ${(manageSettingsCTA.color)};
                font-weight: ${(manageSettingsCTA.fontStyle.includes('bold'))? "bold":""};
                        text-decoration: ${(manageSettingsCTA.fontStyle.includes('underline'))? "underline":""};
                        fontStyle: ${(manageSettingsCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${manageSettingsCTA.text}
            </button>
            <button
              id = "deny-button"
              class = ${buttonClassName[denyCTA.buttonType]}
              style = "
                display: ${(denyCTA.visibility === false)? "none":"unset"};
                background-color: ${(denyCTA.buttonType === "filled")? denyCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(denyCTA.buttonType === "outlined")? denyCTA.buttonColor: "none"};
                color: ${(denyCTA.color)};
                font-weight: ${(denyCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(denyCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(denyCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${denyCTA.text}
            </button>
            <button
              id = "accept-button"
              class = ${buttonClassName[acceptCTA.buttonType]}
              style = "
                display: ${(acceptCTA.visibility === false)? "none":"unset"};
                background-color: ${(acceptCTA.buttonType === "filled")? acceptCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(acceptCTA.buttonType === "outlined")? acceptCTA.buttonColor: "none"};
                color: ${(acceptCTA.color)};
                font-weight: ${(acceptCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(acceptCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(acceptCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${acceptCTA.text}
            </button>
          </div>
        </div>
      `;

    if(document.body) {
      document.body.appendChild(privadoPrivacyBanner);
      switch (CUSTOMIZATION.banner.position) {
        case "top":
          privadoPrivacyBanner.style.top = 0;
          privadoPrivacyBanner.style.removeProperty("bottom");
          break;
        case "mid":
          privadoPrivacyBanner.style.bottom = "";
          privadoPrivacyBanner.style.top = `calc(50% - ${privadoPrivacyBanner.offsetHeight/2}px)`;
          break;
        case "bottom":
          privadoPrivacyBanner.style.bottom = 0;
          privadoPrivacyBanner.style.top = "";
          break;
      }

      const manageSettingButtonClick = document.getElementById("manage-settings-button");
      const acceptAllButtonClick = document.getElementById("accept-button");
      const denyButtonClick = document.getElementById("deny-button");
      const hideBannerClick = document.getElementById("banner-close-icon");

      manageSettingButtonClick.addEventListener('click', function () {
        // privado branding 
        const privadoBrandingElement = document.getElementById("privado-branding-wrap");
        if(privadoBrandingElement && CUSTOMIZATION.remove_privado_branding){
          privadoBrandingElement.style.display = 'none';
        }
        document.dispatchEvent(new Event("openModal"));
      });
      acceptAllButtonClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("acceptAllButtonClick"));
      });

      denyButtonClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("denyButtonClick"));
      });

      hideBannerClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("hidePrivacyBanner"));
      });
    }
  }

  hidePrivacyBanner() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);
  }

  renderCookieTable() {
    // <div id="privado-cookie-table"></div>
    const privadoCookieTable = document.getElementById(`privado-cookie-table`);
    if(privadoCookieTable) {
      privadoCookieTable.innerHTML = `
        <table cell-spacing="0" class="demo-cookie-table demo-card ">
          <thead>
            <tr class="text-uppercase">
              <th class="demo-cookietable-heading-text">Cookie Name</th>
              <th class="demo-cookietable-heading-text">Host Name</th>
              <th class="demo-cookietable-heading-text">Duration</th>
              <th class="demo-cookietable-heading-text">Purpose</th>
            </tr>
          </thead>
          <tbody>
          ${COOKIELIST.map((cookie, i) => {
              return `
              <tr key={i} class="demo-cookietable-content">
                <td class="">${cookie.name}</td>
                <td class="">${cookie.hostname}</td>
                <td style="text-transform: capitalize;">${cookie.lifespan}</td>
                <td style="text-transform: capitalize;">${cookie.category || "Unknown"}</td>
              </tr>
              `}).join("")
          }
          </tbody>
        </table>
      `;
    }
  }

  savepreferences() {
    CATEGORIZATION.forEach(category => {
      if(category.state !== 2) {
        const isChecked = document.getElementById(category.key.toLocaleUpperCase()).checked;
        if (isChecked && !COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
          COOKIES_ALLOWED.push(category.key.toLocaleUpperCase());
        else if(!isChecked && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
          COOKIES_ALLOWED = COOKIES_ALLOWED.filter(x => x !== category.key.toLocaleUpperCase())
      }
    });
    this.setPreferenceCookies("Settings", "Save Preferences");

    const privadoModal = document.getElementById("manage-cookies");
    if(privadoModal)
      privadoModal.style.display = "none";

    this.consentGranted();
    this.removeAllEventListeners();
  }

  denyConsent() {
    COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
      if(category.state === 2)
        return [...acc, category.key];
      return acc;
    }, []);

    this.setPreferenceCookies("Cookie Banner", "Reject All");

    const privadoModal = document.getElementById("cookie-consent-banner");
    if(privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    this.consentGranted();
    this.removeAllEventListeners();
  }

  initialiseCookiesAndScriptBlocking() {
    if(document.readyState !== "loading") {
      this.domLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", this.domLoaded);
    }
    this.getWebsiteLanguage();

    // start listening to event messages dispatched by frames
    window.addEventListener("message", event => {
      try {
        if(event.data && event.data.startsWith("[PRIVADO_EVENT]")) {
          const privadoEvent = event.data.replace("[PRIVADO_EVENT] ", "");
          document.dispatchEvent(new Event(privadoEvent));
          if(event.source) {
            event.source.postMessage(`[PRIVADO_EVENT_ACK] ${privadoEvent}`, event.origin);
          }
        }
      } catch(e){}
    });

    if (FLOW !== "NOTICE") {
      document.addEventListener("openModal", this.openModal);
      document.addEventListener("acceptAllButtonClick", this.acceptAll);
      document.addEventListener("denyButtonClick", this.denyConsent);
      document.addEventListener("savePreferences", this.savepreferences);
      document.addEventListener("changeConsent", () =>
        this.openModal("changeConsent")
      );
      document.addEventListener("revokeConsent", this.consentRevoked);
      document.addEventListener("hidePrivacyBanner", this.hidePrivacyBanner);
      document.addEventListener("hideManageModal", this.hideManageModal);
    }
    else {
      document.addEventListener("noticeButtonClicked", this.hideNoticeBanner);
    }
    // Call privacy observer for notice also
    // since manually blocked scripts needs to be unblocked
    // works when consent is set (preferences exist)
    this.setPrivacyObserver.call(this);
  }
}

const cookieConsent = new CookieConsent({ injectedOptions });
var preferenceSet = document.cookie.split('; ').find(row => row.startsWith('preferences'));
if(!preferenceSet){
  cookieConsent.setPrivacyObserver();

  // Reinitialize COOKIES_ALLOWED
  switch(FLOW) {
    case "OPT_IN":
    case "IMPLIED_OPT_IN":
      COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
        if(category.state === 2)
          return [...acc, category.key];
        return acc;
      }, []);
      break;
    case "OPT_OUT":
    case "NOTICE":
      COOKIES_ALLOWED = COOKIE_TYPES;
      break;
    default:
  }

  cookieConsent.initialiseCookiesAndScriptBlocking();
}
else {
  cookieConsent.initialiseCookiesAndScriptBlocking();
}