// loadHeader.js

function getRepositoryName() {
  var url = window.location.href;
  var repoName = url.split('/')[3];
  return repoName;
}

function setDataPathAttributes() {
  var headerLinks = document.querySelectorAll("nav a");
  headerLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    link.setAttribute("data-path", href);
  });
}

function updateHeaderLinks() {
  var pathPrefix = window.location.pathname.endsWith("/") && window.location.pathname !== "/" ? "../" : "";
  var repoName = getRepositoryName();
  var headerLinks = document.querySelectorAll("[data-path]");

  headerLinks.forEach(function (link) {
    var relativePath = link.getAttribute("data-path");
    link.href = "/" + repoName + "/" + pathPrefix  + relativePath;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var headerPlaceholder = document.getElementById("header-placeholder");

  var repoName = getRepositoryName();
  var headerPath = "/" + repoName + "/" +"header.html";

  console.log("Fetching header from:", headerPath); // Add this line

  fetch(headerPath)
    .then((response) => response.text())
    .then((html) => {
      headerPlaceholder.innerHTML = html;
      setDataPathAttributes();
      updateHeaderLinks();
    })
    .catch((err) => {
      console.warn("Something went wrong with loading the header:", err);
      headerPlaceholder.innerHTML = '<div class="error-message">Error loading header: ' + err + '</div>';
    });
});