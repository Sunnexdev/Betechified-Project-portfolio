// NEWLY ADDED CODE IN responsive-nav.html
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// FORM VALIDATION
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const brand = document.getElementById('brand').value.trim();
  const socialMedia = document.getElementById('social-media').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && brand && socialMedia && message) {
    alert('Message sent successfully!');
    form.reset(); // clears form after submit
  } else {
    alert('Please fill in all fields');
  }
});
