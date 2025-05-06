
// cart.js

function addToCart(productId, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ productId, name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let cartContainer = document.getElementById("cart-items");
    let total = 0;
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `<li>${item.name} x ${item.quantity} - $${item.price * item.quantity}</li>`;
    });

    document.getElementById("total-price").innerText = "Total: $" + total.toFixed(2);
}

function clearCart() {
    localStorage.removeItem("cart");
    alert("Checkout complete!");
    renderCart();
}
