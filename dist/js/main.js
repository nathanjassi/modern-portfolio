// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const colorizeText = document.querySelectorAll('.colorize-text');
const colorBtn = document.querySelector('.color-btn');

// Set the initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
setTextColor(colorizeText);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}

// set the color of each letter
// sets upto 5 colors
function setTextColor(text) {
  for (let i = 0; i < text.length; i++) {
    const string = text[i].innerText;
    text[i].innerHTML = '';
    let colorNumber = -1;
    for (let x = 0; x < string.length; x++) {
      const span = document.createElement('span');
      text[i].appendChild(span);
      span.innerText = string[x];
      colorNumber = colorNumber + 1 < 5 ? colorNumber + 1 : 0;
      span.classList.add(`color-${colorNumber + 1}`);
    }
  }
}
