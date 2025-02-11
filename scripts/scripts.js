document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');

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
