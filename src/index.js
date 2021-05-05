import './styles.css';

import './js/theme-switcher';

import template from './templates/main.hbs';

import menu from './data/menu.json';

window.onload = () => {
  const menuUlRef = document.getElementById('menu');
  menuUlRef.insertAdjacentHTML('afterbegin', template(menu));
};
