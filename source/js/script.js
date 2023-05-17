// Бургер меню

let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let navList = document.querySelector('.nav-list');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navList.classList.toggle('nav-list--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navList.classList.toggle('nav-list--opened');
  }
});

// Карта

window.addEventListener('load', function() {
  let map = document.querySelector('.map');
  let screenWidth = window.innerWidth;
  let mapHeight = screenWidth < '768px' ? '400px' : '362px';
  map.innerHTML = '<iframe src="'+map.getAttribute('data-src')+'" width="100%" height="'+mapHeight+'" frameborder="0"></iframe>';
});

// Фокус поля формы с почтой

let emailInput = document.querySelector(".input--email");

emailInput.addEventListener('focus', function() {
    let programItem = document.querySelector(".program-selection-form__item--email");
  programItem.classList.add("program-selection-form__item--email--focus");

  if (emailInput.classList.contains('error')) {
    let programItem = document.querySelector(".program-selection-form__item--email");
    programItem.classList.add("program-selection-form__item--email--error");
  }
});

emailInput.addEventListener('blur', function() {
    let programItem = document.querySelector(".program-selection-form__item--email");
  programItem.classList.remove("program-selection-form__item--email--focus");
});

// Фокус поля формы с телефоном

let phoneInput = document.querySelector(".input--phone");

phoneInput.addEventListener('focus', function() {
    let programItem = document.querySelector(".program-selection-form__item--phone");
  programItem.classList.add("program-selection-form__item--phone--focus");

  if (phoneInput.classList.contains('error')) {
    let programItem = document.querySelector(".program-selection-form__item--phone");
    programItem.classList.add("program-selection-form__item--phone--error");
  }
});

phoneInput.addEventListener('blur', function() {
    let programItem = document.querySelector(".program-selection-form__item--phone");
  programItem.classList.remove("program-selection-form__item--phone--focus");
});
