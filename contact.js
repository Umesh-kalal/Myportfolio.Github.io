var form = document.getElementById("sheet-db");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheet-db")),
    })
    .then((response) => {
        if (response.ok) {
            // If the response is successful, redirect to message.html
            window.location.href = 'message.html'; // Use window.location.href for redirection
            
        } else {
            // Handle errors if the request fails
            alert("Error submitting the form. Please try again.");
        }
    })
    .catch((error) => {
        // Handle network or other errors
        alert("An error occurred: " + error.message);
    });
});

// Validation Function
function validate() {
    var fnamep = /^[A-Za-z]+$/;
    var lnamep = /^[A-Za-z]+$/;
    var php = /^[6-9]{1}[0-9]{9}$/;

    var fnamev = document.getElementById("fname").value;
    var lnamev = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phv = document.getElementById("phnum").value;
    var msgv = document.getElementById("message").value;

    // Validate First Name
    if (fnamev == "") {
        document.getElementById("msg").innerHTML = "Enter the First name.";
        return false;
    }
    if (!fnamev.match(fnamep)) {
        document.getElementById("msg").innerHTML = "Enter a valid First name.";
        return false;
    } else {
        document.getElementById("msg").innerHTML = ""; // Clear error message
    }

    // Validate Last Name
    if (lnamev == "") {
        document.getElementById("msg1").innerHTML = "Enter the Last name.";
        return false;
    }
    if (!lnamev.match(lnamep)) {
        document.getElementById("msg1").innerHTML = "Enter a valid Last name.";
        return false;
    } else {
        document.getElementById("msg1").innerHTML = ""; // Clear error message
    }

    // Validate Email
    if (email == "") {
        document.getElementById("msg2").innerHTML = "Enter the Email.";
        return false;
    } else {
        document.getElementById("msg2").innerHTML = ""; // Clear error message
    }

    // Validate Phone Number
    if (phv == "") {
        document.getElementById("msg3").innerHTML = "Enter the Phone Number.";
        return false;
    }
    if (!phv.match(php)) {
        document.getElementById("msg3").innerHTML = "Enter a valid Phone Number.";
        return false;
    } else {
        document.getElementById("msg3").innerHTML = ""; // Clear error message
    }

    // Validate Message
    if (msgv == "") {
        document.getElementById("msg4").innerHTML = "Enter your Message.";
        return false;
    } else {
        document.getElementById("msg4").innerHTML = ""; // Clear error message
    }

    return true; // Validation passed
}