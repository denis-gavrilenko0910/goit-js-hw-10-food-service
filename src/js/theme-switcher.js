const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;
const bodyRef = document.querySelector('body');
const checkBoxRef = document.getElementById('theme-switch-toggle');
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme) {
  bodyRef.classList.add(currentTheme);
  checkBoxRef.checked = currentTheme === DARK;
} else {
  bodyRef.classList.add(LIGHT);
}
function themeSwitcher() {
  bodyRef.classList.toggle(LIGHT);
  bodyRef.classList.toggle(DARK);
  bodyRef.classList.contains(LIGHT)
    ? localStorage.setItem('currentTheme', LIGHT)
    : localStorage.setItem('currentTheme', DARK);
}
checkBoxRef.addEventListener('change', themeSwitcher);
