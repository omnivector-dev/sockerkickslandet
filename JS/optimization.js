// version.js
const SITE_VERSION = "0.1.11"; // Update this version number as needed

// Automatically update every element with the class "version" across the page
document.addEventListener("DOMContentLoaded", () => {
  const versionElements = document.querySelectorAll(".version");
  versionElements.forEach(el => {
    el.textContent = `v${SITE_VERSION}`;
  });
});

// open hours
const openHours = '<strong>Öppettider:</strong> <br>' + "Mondag: Stängt" + '<br>' + "Tisdag - Torsdag: 10:00 - 17:00" + '<br>' + "Fredag - Lördag: 11:00 - 18:00" + '<br>' + "Söndag: Stängt";

// Automatically update every element with the class "open-h" across the page
document.addEventListener("DOMContentLoaded", () => {
  const openHoursElements = document.querySelectorAll(".open-h");
  openHoursElements.forEach(el => {
    el.innerHTML = openHours;
  });
});