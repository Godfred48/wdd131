const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click',()=>{scripts/temples.js
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


//getting accurate year
const currentyear=document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML=today.getFullYear();

//code for last modified
const lastModified= document.querySelector("#lastModified");
lastModified.innerHTML=`Last Modification ${document.lastModified}`;