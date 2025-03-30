// /js/includes.js
function loadPartial(elementId, file, callback) {
  fetch(file)
      .then(response => response.text())
      .then(html => {
          document.getElementById(elementId).innerHTML = html;
          if (callback) callback(); // Call the callback function after loading
      })
      .catch(err => console.error('Error loading partial:', err));
}

document.addEventListener("DOMContentLoaded", function() {
  loadPartial('header', 'partials/header.html', function() {
      setHeaderStyle("bg-gray-600", "text-amber-500", "bg-gray-600");
  });
  loadPartial('footer', 'partials/footer.html');
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