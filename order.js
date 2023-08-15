document.getElementById("signupButton").style.display = "none";
document.getElementById("loginButton").style.display = "none";
document.getElementById("logOut").style.display = 'inline-block';
document.getElementById('cart').style.display = 'inline-block';

document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addToCartBtn");

    addToCartBtn.addEventListener("click", function () {
      const product = {
        name: "Arsalan Chicken Biryani",
        price: 199.00,
        imageSrc: "food picture/briani4.avif",
        quantity: 1 // Set the initial quantity to 1
      };

      addToCart(product);
      alert("Product added to cart!");
  });

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; // Increment quantity if product already in cart
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  document.querySelector('#logOut').addEventListener('click', function (event) {
    // Hide the logOut button and cart icon
    document.getElementById('logOut').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('loginButton').style.display = 'inline-block';
    document.getElementById('signupButton').style.display = 'inline-block';
    setTimeout(function () {
      alert("Logout Successful");
    }, 700)
  });
  });

  document.getElementById("orderItem").addEventListener('click', function () {
    alert("Your Order placed successfully!");
  })
