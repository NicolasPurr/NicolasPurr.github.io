// /js/common.js
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }
  
  function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });
    setCookie("language", lang, 30); // Save language for 30 days
  }
  