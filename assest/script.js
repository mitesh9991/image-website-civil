const mobileHam = document.getElementById("mobileHam");
const mobileNav = document.getElementById("mobileNav");
const mobileNavOpen = document.getElementById("mobileOpen");
const mobileNavHamClose = document.getElementById("mobileNavHamClose");
const main = document.getElementById("main");

const mobileNavLinks = document.querySelectorAll("#mobileNav a");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNav();
  });
});

mobileHam.addEventListener("click", mobileNavClick);

function mobileNavClick(event) {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");

  mobileNavOpen.classList.toggle("hidden");
  mobileNavHamClose.classList.toggle("hidden");

  event.stopPropagation(); // Prevent this click from propagating to the document
}

document.addEventListener("click", (event) => {
  const clickedInsideMobileNav = mobileNav.contains(event.target);
  if (!clickedInsideMobileNav) {
    closeMobileNav();
  }
});

// Close mobile navigation
function closeMobileNav() {
  mobileNav.classList.remove("flex");
  mobileNav.classList.add("hidden");
  mobileNavOpen.classList.remove("hidden");
  mobileNavHamClose.classList.add("hidden");
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute("id");
    const navLink = mobileNav.querySelector(`a[href*="${sectionId}"]`);

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active");
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      navLink.classList.remove("active");
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
