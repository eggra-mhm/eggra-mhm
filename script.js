document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("emailForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            console.log("Form submitted!"); // This will confirm it works
        });
    } else {
        console.log("Form not found! Check your form ID.");
    }
});
