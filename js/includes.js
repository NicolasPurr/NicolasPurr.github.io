// /js/include.js
function loadPartial(elementId, file, callback) {
  fetch(file)
      .then(response => response.text())
      .then(html => {
          document.getElementById(elementId).innerHTML = html;
          if (callback) callback(); // Ensure the callback runs after loading
      })
      .catch(err => console.error('Error loading partial:', err));
}

document.addEventListener("DOMContentLoaded", function () {
  loadPartial('header', 'partials/header.html', function () {
      applyDynamicHeaderStyle(); 
      applySavedLanguage(); // Ensure language is applied after loading
  });
  loadPartial('footer', 'partials/footer.html', function () {
      applySavedLanguage(); // Apply language after the footer loads too
  });
});

function setHeaderStyle(bgColor, textColor, btnBgColor) {
  const header = document.getElementById("main-header");
  const subtitle = document.getElementById("subtitle");
  const buttons = document.querySelectorAll(".lang-btn");

  if (!header || !subtitle) return; // Prevent errors if elements are not yet loaded

  // Set header background color
  header.classList.add(bgColor);

  // Set subtitle text color
  subtitle.classList.add(textColor);

  // Set button background color
  buttons.forEach(btn => {
      btn.classList.add(btnBgColor, "text-white");
  });
}

function applyDynamicHeaderStyle() {
  const filename = window.location.pathname.split('/').pop(); // Get the current file name
  const match = filename.match(/^(\d{2})/); // Match first two digits

  if (match) {
      const number = parseInt(match[1], 10); // Convert to integer
      if (number % 2 === 0) {
          // Even-numbered file
          setHeaderStyle("bg-gray-600", "text-amber-500", "bg-gray-600");
      } else {
          // Odd-numbered file
          setHeaderStyle("bg-amber-600", "text-gray-900", "bg-gray-800");
      }
  } else {
      // Default style if filename doesn't match expected pattern
      setHeaderStyle("bg-gray-600", "text-amber-500", "bg-gray-600");
  }
}
