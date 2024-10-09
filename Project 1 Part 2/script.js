document.addEventListener("DOMContentLoaded", function() {
    // Alert on form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        this.reset(); // Reset the form fields
    });

    // Adjust navbar styling based on viewport
    const navbar = document.querySelector('.navbar');
    const originalClass = navbar.className;

    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            navbar.className = originalClass + ' navbar-dark bg-dark'; // Dark mode on mobile
        } else {
            navbar.className = originalClass; // Default navbar for desktop
        }
    });
});
