document.addEventListener("DOMContentLoaded", function() {
    const cartList = document.getElementById("cartList");
    const totalPriceSpan = document.getElementById("totalPrice");
    const orderBtn = document.getElementById("orderBtn");

    displayCartItems();

    orderBtn.addEventListener("click", function() {
        alert("Order placed successfully!");
        clearCart();
        displayCartItems();
    });

    function displayCartItems() {
        cartList.innerHTML = "";
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            const li = document.createElement("li");
            li.classList.add("cart-item");
            li.innerHTML = `
                <img src="${product.imageSrc}" alt="${product.name}" class="cart-item-image">
                <span>${product.name} - ₹${(product.price * product.quantity).toFixed(2)}</span>
                <div class="quantity">
                    <button class="minus-btn" data-index="${i}">-</button>
                    <span>${product.quantity}</span>
                    <button class="plus-btn" data-index="${i}">+</button>
                </div>
                <button class="delete-btn" data-index="${i}">Delete</button>
            `;
            cartList.appendChild(li);
            total += product.price * product.quantity;
        }

        totalPriceSpan.textContent = `₹${total.toFixed(2)}`;

        const minusButtons = document.querySelectorAll(".minus-btn");
        const plusButtons = document.querySelectorAll(".plus-btn");
        const deleteButtons = document.querySelectorAll(".delete-btn");

        minusButtons.forEach(button => {
            button.addEventListener("click", function() {
                const index = parseInt(button.getAttribute("data-index"));
                decreaseQuantity(index);
                displayCartItems();
            });
        });

        plusButtons.forEach(button => {
            button.addEventListener("click", function() {
                const index = parseInt(button.getAttribute("data-index"));
                increaseQuantity(index);
                displayCartItems();
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener("click", function() {
                const index = parseInt(button.getAttribute("data-index"));
                removeFromCart(index);
                displayCartItems();
            });
        });
    }

    function increaseQuantity(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function decreaseQuantity(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    function removeFromCart(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function clearCart() {
        localStorage.removeItem("cart");
    }
});