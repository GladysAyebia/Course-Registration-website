document.getElementById("registerBtn").addEventListener("click", function() {
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm.style.display === "none" || registrationForm.style.display === "") {
        registrationForm.style.display = "block";
    } else {
        registrationForm.style.display = "none";
    }
});
