const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun  = document.getElementById('iconSun');
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const yearEl = document.getElementById('year');

// Year
yearEl.textContent = new Date().getFullYear();

// Initial theme (localStorage + prefers-color-scheme)
const saved = localStorage.getItem('theme');
const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
if (saved === 'light' || (!saved && prefersLight)) {
  root.classList.add('light');
  iconMoon.style.display = 'none';
  iconSun.style.display = 'block';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  const nowLight = !root.classList.contains('light') && true || false;
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  iconMoon.style.display = isLight ? 'none' : 'block';
  iconSun.style.display  = isLight ? 'block' : 'none';
});

// Mobile menu: stacked under header (no absolute overlap)
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close menu on link click (mobile)
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('open'));
});
