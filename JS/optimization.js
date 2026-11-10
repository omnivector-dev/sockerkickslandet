// version & powered by
const SITE_VERSION = '<strong>v0.2.2</strong>'; // Update this version number as needed

// Automatically update every element with the class "version" across the page
document.addEventListener("DOMContentLoaded", () => {
  const versionElements = document.querySelectorAll(".version");
  versionElements.forEach(el => {
    el.innerHTML = SITE_VERSION;
  });
});

// powered by
const POWERED_BY = "Powered by OMNIVECTOR";

// Automatically update every element with the class "powered" across the page
document.addEventListener("DOMContentLoaded", () => {
  const poweredElements = document.querySelectorAll(".powered");
  poweredElements.forEach(el => {
    el.textContent = POWERED_BY;
  });
});

// open hours
const openHours = '<strong>Öppettider:</strong> <br>' + "Mondag: Stängt" + '<br>' + "Tisdag - Torsdag: 11:00 - 17:00" + '<br>' + "Fredag - Lördag: 11:00 - 18:00" + '<br>' + "Söndag: Stängt";

// Automatically update every element with the class "open-h" across the page
document.addEventListener("DOMContentLoaded", () => {
  const openHoursElements = document.querySelectorAll(".open-h");
  openHoursElements.forEach(el => {
    el.innerHTML = openHours;
  });
});