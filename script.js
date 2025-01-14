// Simple JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
        e.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Toggle the hamburger menu on small screens
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
