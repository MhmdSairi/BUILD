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

searchButton.addEventListener("click", toggleSearchBar);
searchBackButton.addEventListener("click", () => searchButton.click());

/* =========================
   FITUR NOTIFIKASI ADMIN
========================= */

const notificationBtn =
document.getElementById("notification-button");

const notificationPopup =
document.getElementById("notification-popup");

const notificationText =
document.getElementById("notification-text");

const notifBadge =
document.getElementById("notif-badge");

if (notificationBtn) {

  notificationBtn.addEventListener("click", () => {

    const msg =
      localStorage.getItem("adminNotification") ||
      "Belum ada notifikasi";

    if (notificationText) {
      notificationText.innerHTML = msg;
    }

    if (notificationPopup) {
      notificationPopup.style.display = "flex";
    }

    if (notifBadge) {
      notifBadge.style.display = "none";
    }
  });

}

function closeNotification() {
  if (notificationPopup) {
    notificationPopup.style.display = "none";
  }
}

function sendNotification() {

  const messageInput =
    document.getElementById("admin-message");

  if (!messageInput) {
    alert("Textarea admin-message tidak ditemukan");
    return;
  }

  const msg = messageInput.value;

  if (!msg.trim()) {
    alert("Isi notifikasi terlebih dahulu");
    return;
  }

  localStorage.setItem(
    "adminNotification",
    msg
  );

  if (notifBadge) {
    notifBadge.style.display = "flex";
  }

  alert("Notifikasi berhasil dikirim");
}