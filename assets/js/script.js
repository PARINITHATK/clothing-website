// Add-to-Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');

        alert(`${product} added to cart`);

        if (window.gtag) {
            gtag('event', 'add_to_cart', {
                items: [{ name: product, price: price }]
            });
        }
    });
});

// ⭐ VIEW CART Event
const viewCartBtn = document.getElementById('viewCartBtn');
if (viewCartBtn) {
    viewCartBtn.addEventListener('click', () => {
        alert("Viewing cart...");

        gtag('event', 'view_cart', {
            items: []
        });
    });
}

// ⭐ PURCHASE Event
const purchaseBtn = document.getElementById('purchaseBtn');
if (purchaseBtn) {
    purchaseBtn.addEventListener('click', () => {
        alert("Purchase completed!");

        gtag('event', 'purchase', {
            transaction_id: Date.now(),
            value: 100,
            currency: "USD",
            items: []
        });
    });
}

// Forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Form submitted!');

        if (window.gtag) {
            gtag('event', 'form_submit', {
                form_name: form.id
            });
        }
    });
});
