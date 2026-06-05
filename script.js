const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");
const searchButton = document.querySelector("#search-button");
const searchBackButton = document.querySelector("#search-back-button");

// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

function closeWelcomeAlert() {
    document.getElementById("welcomeAlert").style.display = "none";
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}

// Toggle search bar on click on mobile
const toggleSearchBar = () => {
  document.body.classList.toggle("show-mobile-search");
};

// Blok klik kanan
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Blok drag gambar
document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

// Blok copy
document.addEventListener("copy", function(e) {
    e.preventDefault();
});

// Blok cut
document.addEventListener("cut", function(e) {
    e.preventDefault();
});

// Blok select text
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

function countClick() {
    let clicks = localStorage.getItem('indosat_clicks') || 0;
    clicks++;
    localStorage.setItem('indosat_clicks', clicks);
}

function loadClicks() {
    let clicks = localStorage.getItem('indosat_clicks') || 0;
    document.getElementById('liveCount').textContent = clicks;
}

loadClicks();

// Blok beberapa shortcut umum
document.addEventListener("keydown", function(e) {

    // Ctrl+C
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    // Ctrl+S
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }

    // Ctrl+A
    if (e.ctrlKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
    }

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }
});

searchButton.addEventListener("click", toggleSearchBar);
searchBackButton.addEventListener("click", () => searchButton.click());


// ====================
// IKLAN EXPANDABLE
// ====================
function toggleAds() {
  const content = document.getElementById("adsContent");
  const arrow = document.getElementById("adsArrow");

  if (content) {
    content.classList.toggle("show");
  }

  if (arrow) {
    arrow.classList.toggle("rotate");
  }
}