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
    let programItem = document.querySelector(".program-selection-form__item");
    programItem.classList.add("program-selection-form__item--error");
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
    let programItem = document.querySelector(".program-selection-form__item");
    programItem.classList.add("program-selection-form__item--error");
  }
});

phoneInput.addEventListener('blur', function() {
    let programItem = document.querySelector(".program-selection-form__item--phone");
  programItem.classList.remove("program-selection-form__item--phone--focus");
});

// Ошибка поля ввода имени

const nameField = document.getElementById("name");

nameField.addEventListener("input", function () {
  const invalidName = document.querySelector(".input--name:invalid");

  if (invalidName) {
    if (!nameField.classList.contains("error")) {
      nameField.classList.add("error");
    }
  } else {
    if (nameField.classList.contains("error")) {
      nameField.classList.remove("error");
    }
  }
});

// Ошибка поля ввода веса

const weightField = document.getElementById("weight");

weightField.addEventListener("input", function () {
  const invalidWeight = document.querySelector(".input--weight:invalid");

  if (invalidWeight) {
    if (!weightField.classList.contains("error")) {
      weightField.classList.add("error");
    }
  } else {
    if (weightField.classList.contains("error")) {
      weightField.classList.remove("error");
    }
  }
});

// Ошибка поля ввода email

const emailField = document.getElementById("email");
const emailError = document.querySelector('.program-selection-form__item--email');

emailField.addEventListener("input", function () {
  const invalidEmail = document.querySelector(".input--email:invalid");

  if (invalidEmail) {
    if (!emailField.classList.contains("error")) {
      emailField.classList.add("error");
      emailError.classList.add("program-selection-form__item--error");
    }
  } else {
    if (emailField.classList.contains("error")) {
      emailField.classList.remove("error");
      emailError.classList.remove("program-selection-form__item--error");
    }
  }
});

// Ошибка поля ввода phone

const phoneField = document.getElementById("phone");
const phoneError = document.querySelector('.program-selection-form__item--phone');

phoneField.addEventListener("input", function () {

  const invalidPhone = document.querySelector(".input--phone:invalid");
  if (invalidPhone) {
    if (!phoneField.classList.contains("error")) {
      phoneField.classList.add("error");
      phoneError.classList.add("program-selection-form__item--error");
    }
  } else {
    if (phoneField.classList.contains("error")) {
      phoneField.classList.remove("error");
      phoneError.classList.remove("program-selection-form__item--error");
    }
  }
});
