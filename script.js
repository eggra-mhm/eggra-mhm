document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("emailForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents the form from opening a new tab

            var emailInput = document.getElementById("emailInput").value;
            var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNGkSoizkDwihya2IYqv59yeFdieD8dNbzipHEDp7jpHBOzQ/formResponse";
            var formData = new FormData();
            formData.append("entry.344889121", emailInput);

            // Send data without opening a new tab
            fetch(formUrl, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            }).then(() => {
                document.getElementById("message").innerText = "You're signed up!";
                form.reset(); // Clears the input field
            }).catch((error) => {
                document.getElementById("message").innerText = "Error, try again.";
            });
        });
    }
});
