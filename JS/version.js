// version.js
const SITE_VERSION = "0.1.8"; // Update this version number as needed

// Automatically update every element with the class "version" across the page
document.addEventListener("DOMContentLoaded", () => {
  const versionElements = document.querySelectorAll(".version");
  versionElements.forEach(el => {
    el.textContent = `v${SITE_VERSION}`;
  });
});