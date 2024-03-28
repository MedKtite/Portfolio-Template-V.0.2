const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// Show Menu
    // validate if  constant exists
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}

// Menu hidden 
    // Validate if constant exists 
if(navClose) {
  navClose.addEventListener('click', () => {
    navClose.classList.remove("show-menu")
  })
}

// Remove menu mobile
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  // when we click on each nav linnk, we remove the show mennu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
