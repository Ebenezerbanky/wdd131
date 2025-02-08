document.addEventListener('DOMContentLoaded', () => {
    // Get current count from localStorage or start at 0
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || 0);
    
    // Increment count
    reviewCount++;
    
    // Save back to localStorage
    localStorage.setItem('reviewCount', reviewCount);
    
    // Update display
    document.getElementById('reviewCount').textContent = reviewCount;

    // Update footer information
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});