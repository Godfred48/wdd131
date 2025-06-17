const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click',()=>{
    //toggle the button switching icon
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('show');

    // Toggle visibility of the nav menu
//   if (navMenu.style.display === 'none' || navMenu.style.display === '') {
//     navMenu.style.display = 'block';
//   } else {
//     navMenu.style.display = 'none';
//   }

});
