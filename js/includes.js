// /js/includes.js
function loadPartial(elementId, file) {
    fetch(file)
      .then(response => response.text())
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
      })
      .catch(err => console.error('Error loading partial:', err));
  }
  
document.addEventListener("DOMContentLoaded", function() {
    // Use a custom attribute on <body> to decide which header to load
    const headerFile = document.body.getAttribute('data-header') || 'partials/header.html';
    loadPartial('header', headerFile);
    loadPartial('footer', 'partials/footer.html');
    includeHTML(function() {
      setHeaderStyle("bg-gray-600", "text-amber-500", "bg-gray-600");
    });
  });

function setHeaderStyle(bgColor, textColor, btnBgColor) {
    const header = document.getElementById("main-header");
    const subtitle = document.getElementById("subtitle");
    const buttons = document.querySelectorAll(".lang-btn");

    // Set header background color
    header.classList.add(bgColor);

    // Set subtitle text color
    subtitle.classList.add(textColor);

    // Set button background color
    buttons.forEach(btn => {
        btn.classList.add(btnBgColor, "text-white");
    });
}