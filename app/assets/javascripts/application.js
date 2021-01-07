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
  mobileSubNav.classList.toggle('is-open');

  // TODO: Close all the subLinks sections when we close the mobile nav
}

// Sub navigation

// Loop through and find all the sub headings
const subLinks = document.querySelectorAll('.app-subnav--mobile .app-subnav__link');

subLinks.onclick = () => {
  subLinks.classList.toggle('is-active');
}

const subLinks2 = document.querySelector('.app-subnav--mobile .app-subnav__link--section-2');

subLinks2.onclick = () => {
  subLinks2.classList.toggle('is-active');
}
