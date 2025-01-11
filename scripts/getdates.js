// Get the current date
const dateElement = document.getElementById('date');
const today = new Date();

// Format the date as "Month Day, Year" (e.g., January 11, 2025)
const formattedDate = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Display the formatted date in the specified element
if (dateElement) {
  dateElement.textContent = formattedDate;
}
