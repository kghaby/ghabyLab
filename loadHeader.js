// loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
  var headerPlaceholder = document.getElementById("header-placeholder");

  
  fetch("/header.html")
    .then((response) => response.text())
    .then((html) => {
      headerPlaceholder.innerHTML = html;
    })
    .catch((err) => {
      console.warn("Something went wrong with loading the header:", err);
    });
});