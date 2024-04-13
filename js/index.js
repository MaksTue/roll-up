var overlay = document.getElementById("overlay");
var popupWindow = document.getElementById("popup-window-basket");
var popupLink = document.getElementById("popup-link-basket");
var popupLinkMobile = document.getElementById("popup-link-basket-mobile");
var closeButton = document.getElementById("close-button");

popupLink.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
  overlay.style.display = "block";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

popupLinkMobile.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
  overlay.style.display = "block";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

closeButton.addEventListener("click", function () {
  popupWindow.style.display = "none";
  overlay.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  var mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  var navbar = document.querySelector(".mobile-list-header");

  mobileNavToggle.addEventListener("click", function () {
    this.classList.toggle("visible");

    navbar.classList.toggle("visible");
  });
});
