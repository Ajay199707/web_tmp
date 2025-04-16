const menuToggle  =document.getElementById('navToggle')
const navMenu =document.getElementById('navMenu')

menuToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});
