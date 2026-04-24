const menutoggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menutoggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// NEWLY ADDED CODE IN responsive-nav.html
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
