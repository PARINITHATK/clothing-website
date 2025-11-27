// Add-to-Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        alert(`${product} added to cart at $${price}`);
        // GA4 Event: add_to_cart
        if (window.gtag) {
            gtag('event', 'add_to_cart', {
                'items': [{ 'name': product, 'price': price }]
            });
        }
    });
});

// Contact & Checkout Form
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Form submitted successfully!');
        // GA4 Event: form_submit
        if (window.gtag) {
            gtag('event', 'form_submit', {
                'form_name': form.id
            });
        }
    });
});

