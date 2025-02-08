document.addEventListener('DOMContentLoaded', () => {
    // Get current count from localStorage or start at 0
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    
    // Increment the count
    reviewCount++;
    
    // Update localStorage
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Update the display
    document.getElementById('reviewCount').textContent = reviewCount;
});