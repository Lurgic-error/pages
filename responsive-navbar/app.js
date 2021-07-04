const navbar = document.getElementById('navbar')
const menuBTN = document.getElementById('menu-btn')

menuBTN.addEventListener('click', ()=>{
    console.log('kimepop')
    console.log('navbar.classList', navbar.classList)
    navbar.classList.toggle('active')
    console.log('navbar.classList', navbar.classList)
})