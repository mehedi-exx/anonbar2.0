const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const yearEl = document.getElementById('year');

// Year set
yearEl.textContent = new Date().getFullYear();

// Load theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  iconMoon.style.display = 'none';
  iconSun.style.display = 'block';
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  iconMoon.style.display = isLight ? 'none' : 'block';
  iconSun.style.display = isLight ? 'block' : 'none';
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close menu on link click
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('open'));
});
