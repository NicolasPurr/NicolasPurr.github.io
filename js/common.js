// /js/common.js
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value}; path=/; SameSite=Lax;`;
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
  console.log("Switching language to:", lang); // Debugging log
  document.querySelectorAll("[data-lang]").forEach(el => {
      const translatedText = el.getAttribute(`data-${lang}`);
      if (translatedText) {
          el.innerHTML = translatedText;
      } else {
          console.warn(`Missing translation for`, el); // Debugging
      }
  });
  setCookie("language", lang, 30);
}

function applySavedLanguage() {
  const savedLang = getCookie("language") || "en";
  switchLanguage(savedLang);
}
