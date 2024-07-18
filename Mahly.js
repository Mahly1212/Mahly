// Mahly.js
document.addEventListener('DOMContentLoaded', function () {
    var phoneInputField = document.querySelector("#phone");
    var phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["us", "gb", "in"],
        initialCountry: "auto",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // GSAP animation code
    gsap.fromTo(".form-container", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1, ease: "power1.out"});
});

function toggleForms(form) {
    document.getElementById('login-form').classList.toggle('hidden', form !== 'login');
    document.getElementById('register-form').classList.toggle('hidden', form !== 'register');
}

function toggleForgotPassword(show) {
    document.getElementById('forgot-password-page').classList.toggle('hidden', !show);
    document.getElementById('login-form').classList.toggle('hidden', show);
}
