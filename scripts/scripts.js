const products = [
    { id: 'prod1', name: 'Super Blender 3000' },
    { id: 'prod2', name: 'Smart Coffee Maker' },
    { id: 'prod3', name: 'Robot Vacuum Cleaner' },
    { id: 'prod4', name: 'Air Purifier Pro' },
    { id: 'prod5', name: 'Smart Thermostat' }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');

    if (!productSelect) {
        console.error("Dropdown element not found!");
        return;
    }

    console.log("JavaScript Loaded Successfully"); // Debugging line
    console.log(products); // Check if the array is loaded

    // Populate product select options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Retrieve last selected product from localStorage
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
        productSelect.value = savedProduct;
    }

    // Save selection to localStorage when changed
    productSelect.addEventListener('change', () => {
        localStorage.setItem('selectedProduct', productSelect.value);
    });

    // Update footer information
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
