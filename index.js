document.getElementById('logOut').style.display = 'none';
document.getElementById("cart").style.display = "none";
// hide the log out button

//sign up button.
document.getElementById("signupButton").addEventListener("click", function() {
    window.open('singup.html', '_blank');
});

//login button
document.getElementById("loginButton").addEventListener("click", function() {
    window.open("signin.html","_blank");
});

//this functino tell the page that submit button is clicked
window.addEventListener("message", function(event) {
    if (event.data === "submitClicked") {
        // When the message "submitClicked" is received, hide the signup button
        document.getElementById("signupButton").style.display = "none";
        this.document.getElementById("loginButton").style.display="none";
        this.document.getElementById("logOut").style.display = 'inline-block';
        this.document.getElementById('cart').style.display = 'inline-block';
        this.document.getElementById("bar").style.width = '53vw';
    }
});

// code for the log out button
document.querySelector('#logOut').addEventListener('click', function (event) {

    // Hide the sign-up button
    document.getElementById('logOut').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('loginButton').style.display = 'inline-block';
    document.getElementById('signupButton').style.display = 'inline-block';
    setTimeout(function(){
        alert("Logout Sucessful");
    },700)
});

//this is the js for cards and button on the cards.because when the button is click the 
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function() {
        console.log("work");
        // window.location.href = "order.html";
        window.open("order.html","_blank");
    });
});


