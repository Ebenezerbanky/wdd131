// Footer Script
const footerText = document.getElementById("footer-text");

// Get current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Update footer content dynamically
footerText.innerHTML = `&copy; ${currentYear} Temple Album | Last Modified: ${lastModified}`;

