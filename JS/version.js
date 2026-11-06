// version.js
const SITE_VERSION = "0.1.5";

// Automatically update every element with the class "version" across the page
document.addEventListener("DOMContentLoaded", () => {
  const versionElements = document.querySelectorAll(".version");
  versionElements.forEach(el => {
    el.textContent = `v${SITE_VERSION}`;
  });
});