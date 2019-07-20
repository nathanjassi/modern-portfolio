// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const colorizerText = document.querySelectorAll('.colorizer-text');

const lockTextColor = document.querySelector('.fa-lightbulb');
// Set initial state of text color
let colorText = false;

// Set the initial state of menu
let showMenu = false;

lockTextColor.addEventListener('click', toggleTextColor);
// menuBtn.addEventListener('click', toggleMenu);
setTextColor(colorizerText);

function toggleTextColor() {
  const colorizerColor1 = document.querySelectorAll('.color-1');
  const colorizerColor2 = document.querySelectorAll('.color-2');
  const colorizerColor3 = document.querySelectorAll('.color-3');
  const colorizerColor4 = document.querySelectorAll('.color-4');
  const colorizerColor5 = document.querySelectorAll('.color-5');
  if (!colorText) {
    console.log(colorizerColor1.length);
    for (i = 0; i < colorizerColor1.length; i++) {
      colorizerColor1[i].style.color = '#d1495b';
    }
    for (i = 0; i < colorizerColor2.length; i++) {
      colorizerColor2[i].style.color = '#facc6b';
    }
    for (i = 0; i < colorizerColor3.length; i++) {
      colorizerColor3[i].style.color = '#084c61';
    }
    for (i = 0; i < colorizerColor4.length; i++) {
      colorizerColor4[i].style.color = '#1b998b';
    }
    for (i = 0; i < colorizerColor5.length; i++) {
      colorizerColor5[i].style.color = '#00798c';
    }
    lockTextColor.classList.toggle('fas');
    colorText = true;
  } else {
    for (i = 0; i < colorizerColor1.length; i++) {
      colorizerColor1[i].removeAttribute('style');
    }
    for (i = 0; i < colorizerColor2.length; i++) {
      colorizerColor2[i].removeAttribute('style');
    }
    for (i = 0; i < colorizerColor3.length; i++) {
      colorizerColor3[i].removeAttribute('style');
    }
    for (i = 0; i < colorizerColor4.length; i++) {
      colorizerColor4[i].removeAttribute('style');
    }
    for (i = 0; i < colorizerColor5.length; i++) {
      colorizerColor5[i].removeAttribute('style');
    }
    lockTextColor.classList.toggle('fas');
    colorText = false;
  }
}

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItems.forEach((item) => item.classList.add('show'));

//     // Set menu state
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItems.forEach((item) => item.classList.remove('show'));

//     // Set menu state
//     showMenu = false;
//   }
// }

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
