document.getElementById("submit").addEventListener("click", function() {
    // Set the item in localStorage to hide the signup button
    localStorage.setItem("hidesignupButton", "true");

    // Send a message to the parent window (index.html) indicating the submit button has been clicked
        window.opener.postMessage("submitClicked", "*");
        window.close();    
});



