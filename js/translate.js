// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }
  
  // Function to get a cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  }
  
  // Apply the selected language from the cookie
  function applyLanguageFromCookie(lang) {
    const iframe = document.querySelector('iframe.goog-te-menu-frame');
    if (iframe) {
      const select = iframe.contentWindow.document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    }
  }
  
  // Initialize Google Translate and check for language persistence
  function googleTranslateInit() {
    if (!window.google?.translate?.TranslateElement) {
      setTimeout(googleTranslateInit, 100);
    } else {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        defaultLanguage: 'en',
        autoDisplay: false,
      }, 'google_element');
  
      // Apply the saved language from the cookie
      const savedLang = getCookie('googtrans');
      if (savedLang) {
        applyLanguageFromCookie(savedLang);
      }
    }
  }
  
  // Load the Google Translate script
  function loadGoogleTranslateScript() {
    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.id = "google_translate_script";
      script.onerror = () => console.error('Error loading Google Translate script');
      document.body.appendChild(script);
    }
  }
  
  // Event listener to apply language and update cookie when language changes
  document.addEventListener("DOMContentLoaded", () => {
    loadGoogleTranslateScript();
  
    // Check for iframe loading and listen for language changes
    document.addEventListener('click', () => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
        const select = iframe.contentWindow.document.querySelector('.goog-te-combo');
        select.addEventListener('change', () => {
          const selectedLang = select.value;
          setCookie('googtrans', selectedLang, 365);  // Store selected language in cookie for 1 year
        });
      }
    });
  });