var overlay = document.getElementById("overlay");
var popupWindow = document.getElementById("popup-window-basket");
var popupLink = document.getElementById("popup-link-basket");
var closeButton = document.getElementById("close-button");

popupLink.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
  overlay.style.display = "block";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

closeButton.addEventListener("click", function () {
  popupWindow.style.display = "none";
  overlay.style.display = "none";
});
