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

// build an array of the subLinks
Array.from(subLinks).forEach(link => {
    // listen for a click on subLinks
    link.addEventListener('click', function(event) {
      // target the speficic subLink that was clicked
      this.classList.toggle('is-active');
    });
});
