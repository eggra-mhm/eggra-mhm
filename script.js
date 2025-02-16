document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    var email = document.getElementById("emailInput").value;
    var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNGkSoizkDwihya2IYqv59yeFdieD8dNbzipHEDp7jpHBOzQ/formResponse";
    var entryId = "entry.344889121"; // Replace with your real entry ID

    var formData = new FormData();
    formData.append(entryId, email);

    fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Prevents redirect
    }).then(() => {
        document.getElementById("successMessage").style.display = "block"; // Show confirmation message
        document.getElementById("emailInput").value = ""; // Clear the input
    }).catch(error => console.error("Error:", error));
});
