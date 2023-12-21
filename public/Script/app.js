// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // Load the header HTML content and then set up navigation
  loadHTML('header.html', document.getElementById('header-placeholder'), function() {
    setupNavigation();
  });

  // Load the footer HTML content
  loadHTML('footer.html', document.getElementById('footer-placeholder'));
});

// Load HTML content from a URL and insert it into an element
function loadHTML(url, element, callback) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      element.innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(`Failed to load ${url}: ${err}`));
}

function setupNavigation() {
  // To toggle the menu icon's checkbox
  function toggleMenuIcon() {
    var menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
      menuIcon.checked = !menuIcon.checked;
    }
  }

  // Set event listeners for navigation links
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      toggleMenuIcon();
    });
  });
}

// Monitor scroll events to toggle the visibility of the scroll-to-top button
window.addEventListener("scroll", function() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (window.scrollY > 300) { // Show the button when scrolled 300 pixels or more
    scrollButton.classList.remove("hidden");
  } else {
    scrollButton.classList.add("hidden"); // Hide the button when scrolled less than 300 pixels
  }
});

// Handle click event for the scroll-to-top button
document.getElementById("scroll-to-top").addEventListener("click", function(event) {
  event.preventDefault(); // Disable the default behavior of page links
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll smoothly to the top of the page
});
