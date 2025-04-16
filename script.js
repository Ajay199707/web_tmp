const menuToggle  =document.getElementById('navToggle')
const navMenu =document.getElementById('navMenu')

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('glow');
    navMenu.classList.toggle('show');
});

