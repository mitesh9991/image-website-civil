const mobileHam = document.getElementById('mobileHam');
const mobileNav = document.getElementById('mobileNav');

mobileHam.addEventListener('click', mobileNavClick);


function mobileNavClick(){
    console.log("clicked")

    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('flex')


}