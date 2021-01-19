/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// import MobileNav from '/mobile-navigation.js'

// // Initialise mobile navigation
// new MobileNav().init()

// Open/close mobile nav
const menuButton = document.querySelector('.js-app-mobile-nav-toggler');
const mobileSubNav = document.querySelector('.app-subnav--mobile');

menuButton.onclick = () => {
  menuButton.classList.toggle('is-active');
  mobileSubNav.classList.toggle('app-mobile-nav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavOne = document.querySelector('.topic-one');
const subNavItemOne = document.querySelector('.app-mobile-nav__subnav--topic-one');

subNavOne.onclick = () => {
  subNavOne.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemOne.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavTwo = document.querySelector('.topic-two');
const subNavItemTwo = document.querySelector('.app-mobile-nav__subnav--topic-two');

subNavTwo.onclick = () => {
  subNavTwo.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemTwo.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavThree = document.querySelector('.topic-three');
const subNavItemThree = document.querySelector('.app-mobile-nav__subnav--topic-three');

subNavThree.onclick = () => {
  subNavThree.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemThree.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavFour = document.querySelector('.topic-four');
const subNavItemFour = document.querySelector('.app-mobile-nav__subnav--topic-four');

subNavFour.onclick = () => {
  subNavFour.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemFour.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavFive = document.querySelector('.topic-five');
const subNavItemFive = document.querySelector('.app-mobile-nav__subnav--topic-five');

subNavFive.onclick = () => {
  subNavFive.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemFive.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavSix = document.querySelector('.topic-six');
const subNavItemSix = document.querySelector('.app-mobile-nav__subnav--topic-six');

subNavSix.onclick = () => {
  subNavSix.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemSix.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Open/close sub nav mobile
const subNavSeven = document.querySelector('.topic-seven');
const subNavItemSeven = document.querySelector('.app-mobile-nav__subnav--topic-seven');

subNavSeven.onclick = () => {
  subNavSeven.classList.toggle('app-mobile-nav__subnav-toggler--active');
  subNavItemSeven.classList.toggle('app-mobile-nav__subnav--active');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// // Sub navigation

// // Loop through and find all the sub headings
// const subLinks = document.querySelectorAll('.app-mobile-nav__list .app-mobile-nav-subnav-toggler');

// // build an array of the subLinks
// Array.from(subLinks).forEach(link => {
//   // listen for a click on subLinks
//   link.addEventListener('click', function(event) {
//     // target the speficic subLink that was clicked
//     this.classList.toggle('app-mobile-nav__subnav--active');
//   });
// });
