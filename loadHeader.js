// loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
  var headerPlaceholder = document.getElementById("header-placeholder");

  // Determine the relative path to header.html based on the current page's location
  var pathPrefix = window.location.pathname.includes("/") && window.location.pathname !== "/" ? "../" : "";

  fetch(pathPrefix + "header.html")
    .then((response) => response.text())
    .then((html) => {
      headerPlaceholder.innerHTML = html;
    })
    .catch((err) => {
      console.warn("Something went wrong with loading the header:", err);
    });
});