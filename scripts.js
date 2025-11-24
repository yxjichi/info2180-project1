window.onload = function() {
    const form = document.querySelector(".newsletter form");
    const emailinp = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailinp.value;

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

        emailInput.value = "";
    });
};