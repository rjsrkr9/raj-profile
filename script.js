// Initialize EmailJS
(function () {
    emailjs.init("joJ-NFRy9owGqdn29"); // Replace with your actual Public Key
})();

// Handle form submit
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "CONTACT_TO_RAJ_SARKAR",   // Service ID
            "template_ignhh3r",  // Template ID
            this
        ).then(
            function () {
                alert("✅ Message sent successfully!");
                form.reset();
            },
            function (error) {
                alert("❌ Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
    });
});
