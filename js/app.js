let total = 0;
clearCart();

function add() {
    let product = document.getElementById('product').value;
    let productName = product.split('-')[0];
    let productValue = product.split('$')[1];
    let quantity = document.getElementById('quantity').value;

    let price = quantity * productValue;
    let cart = document.getElementById('product-list');

    if (quantity > 0) {
        cart.innerHTML = cart.innerHTML + `<section class="cart__products__product">
        <span class="blue-text">${quantity}x</span> ${productName} <span class="blue-text">$${price}</span>
        </section>`;
    }

    total = total + price;
    let totalField = document.getElementById('total-value');
    totalField.textContent = `$ ${total}`;

    document.getElementById('quantity').value = 0;
}

function clearCart() {
    total = 0;
    document.getElementById('product-list').innerHTML = '';
    document.getElementById('total-value').textContent = '$ 0';
}