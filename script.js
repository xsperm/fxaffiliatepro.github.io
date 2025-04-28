
// script.js

// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Basic Form Validation and Submission Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission (no backend yet)
  alert('Thank you for contacting us! We will get back to you shortly.');
  form.reset();
});
