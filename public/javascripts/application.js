/* global $ */

// const e = require("express");

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

//Set aria attributes when JS is available
menuButton.setAttribute('aria-expanded', 'false')
mobileSubNav.setAttribute('aria-hidden', 'true')


menuButton.addEventListener('click', function() {
  //Menu open
  if (menuButton.classList.contains('is-active')) {
    menuButton.classList.add('is-active');
    mobileSubNav.classList.add('app-mobile-nav--active');
    console.log('open')
    menuButton.setAttribute('aria-expanded', 'false')
    mobileSubNav.setAttribute('aria-hidden', 'true')
  } else { //menu closed//
    menuButton.classList.remove('is-active');
    mobileSubNav.classList.remove('app-mobile-nav--active');
    console.log('closed')
    menuButton.setAttribute('aria-expanded', 'true')
    mobileSubNav.setAttribute('aria-hidden', 'false')
  }
});

// // Sub navigation

// // Loop through and find all the sub headings
const subLinks = document.querySelectorAll('.app-mobile-nav-subnav-toggler');
const subNavActive = ('app-mobile-nav__subnav--active')

// build an array of the subLinks
Array.from(subLinks).forEach(link => {

  // listen for a click on subLinks
  link.addEventListener('click', function(e) {
    //rules for aria attributes when submenu is closed
    e.preventDefault();
    if (this.nextElementSibling.classList.contains(subNavActive)) {
      this.nextElementSibling.classList.remove(subNavActive)
      this.setAttribute('aria-expanded', 'false')
      this.nextElementSibling.setAttribute('aria-hidden', 'true')
    //rules for aria attributes when submenu is open
    } else {
      this.nextElementSibling.classList.add(subNavActive)
      this.setAttribute('aria-expanded', 'true')
      this.nextElementSibling.setAttribute('aria-hidden', 'false')
    }
  });
});


// Open/close eyfs nav-bar--mobile
const stickyMenu = document.querySelector('.js-app-mobile-nav-toggler');
const mobileStickySubNav = document.querySelector('.app-subnav--mobile');

stickyMenu.onclick = () => {
  stickyMenu.classList.toggle('is-active');
  mobileStickySubNav.classList.toggle('app-mobile-nav--active');
}


// Loops through dom and finds all elements with nhsuk-card--clickable class
document.querySelectorAll('.nhsuk-card--clickable').forEach((panel) => {
  // Check if panel has a link within it
  if (panel.querySelector('a') !== null) {
    // Clicks the link within the heading to navigate to desired page
    panel.addEventListener('click', () => {
      panel.querySelector('a').click();
    });
  }
});

// Loops through dom and finds all elements with nhsuk-card--clickable class
document.querySelectorAll('.eyfs-card--clickable').forEach((panel) => {
  // Check if panel has a link within it
  if (panel.querySelector('a') !== null) {
    // Clicks the link within the heading to navigate to desired page
    panel.addEventListener('click', () => {
      panel.querySelector('a').click();
    });
  }
});



// Redundant script

// // // Open/close sub nav mobile
// const subNavOne = document.querySelector('.topic-one');
// const subNavItemOne = document.querySelector('.app-mobile-nav__subnav--topic-one');

// subNavOne.onclick = () => {
//   subNavOne.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemOne.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavTwo = document.querySelector('.topic-two');
// const subNavItemTwo = document.querySelector('.app-mobile-nav__subnav--topic-two');

// subNavTwo.onclick = () => {
//   subNavTwo.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemTwo.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavThree = document.querySelector('.topic-three');
// const subNavItemThree = document.querySelector('.app-mobile-nav__subnav--topic-three');

// subNavThree.onclick = () => {
//   subNavThree.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemThree.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavFour = document.querySelector('.topic-four');
// const subNavItemFour = document.querySelector('.app-mobile-nav__subnav--topic-four');

// subNavFour.onclick = () => {
//   subNavFour.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemFour.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavFive = document.querySelector('.topic-five');
// const subNavItemFive = document.querySelector('.app-mobile-nav__subnav--topic-five');

// subNavFive.onclick = () => {
//   subNavFive.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemFive.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavSix = document.querySelector('.topic-six');
// const subNavItemSix = document.querySelector('.app-mobile-nav__subnav--topic-six');

// subNavSix.onclick = () => {
//   subNavSix.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemSix.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavSeven = document.querySelector('.topic-seven');
// const subNavItemSeven = document.querySelector('.app-mobile-nav__subnav--topic-seven');

// subNavSeven.onclick = () => {
//   subNavSeven.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemSeven.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }

// // // Open/close sub nav mobile
// const subNavEight = document.querySelector('.topic-eight');
// const subNavItemEight = document.querySelector('.app-mobile-nav__subnav--topic-eight');

// subNavEight.onclick = () => {
//   subNavEight.classList.toggle('app-mobile-nav__subnav-toggler--active');
//   subNavItemEight.classList.toggle('app-mobile-nav__subnav--active');

//   // TODO: Close all the subLinks sections when we close the mobile nav
// }
