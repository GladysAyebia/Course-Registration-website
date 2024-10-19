// Toggle menu for small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/// Toggle the registration form visibility
// Web Development Registration Form Toggle
document.getElementById("registerBtnWebDev").addEventListener("click", function() {
    const registrationForm = document.getElementById("registrationFormWebDev");
    toggleFormVisibility(registrationForm);
});

// Data Science Registration Form Toggle
document.getElementById("registerBtnDataSci").addEventListener("click", function() {
    const registrationForm = document.getElementById("registrationFormDataSci");
    toggleFormVisibility(registrationForm);
});

// Cyber Security Registration Form Toggle
document.getElementById("registerBtnCyberSec").addEventListener("click", function() {
    const registrationForm = document.getElementById("registrationFormCyberSec");
    toggleFormVisibility(registrationForm);
});

// Function to toggle the visibility of a form
function toggleFormVisibility(form) {
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

