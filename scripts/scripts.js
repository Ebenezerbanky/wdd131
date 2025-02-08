// Product array with id and name
const products = [
    { id: 'prod1', name: 'Super Blender 3000' },
    { id: 'prod2', name: 'Smart Coffee Maker' },
    { id: 'prod3', name: 'Robot Vacuum Cleaner' },
    { id: 'prod4', name: 'Air Purifier Pro' },
    { id: 'prod5', name: 'Smart Thermostat' }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  // Use id as value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Update footer information
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});