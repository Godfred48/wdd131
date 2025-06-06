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

//





//getting accurate year
const currentyear=document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML=today.getFullYear();

//code for last modified
const lastModified= document.querySelector("#lastModified");
lastModified.innerHTML=`Last Modification ${document.lastModified}`;

//temples Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 24",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
      },
      {
        templeName: "Melbourne Australia",
        location: "Melbourne, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg"
      },
  ];


  function displayTemple(templeArray){
  const container= document.getElementById("cardContainer");
  templeArray.forEach(temples=>{
    const templeName= temples.templeName;
    const location= temples.location;
    const dedicated=temples.dedicated;
    const area= temples.area;
    const img= temples.imageUrl;
    

    const card = document.createElement("div");
    card.classList.add("album");

    card.innerHTML= `
        <section class="cap">
        <h2>${templeName}</h2>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Dedicated:</strong> ${dedicated}</p>
        <p><strong>Area:</strong> ${area.toLocaleString()} sq ft</p>
        </section>
        <aside class="pic">
         <img src="${img}" alt="${templeName}" loading="lazy" />
        </aside>
            
        `

        container.appendChild(card);
  }

  )};


  function filteredTemple(type) {
    let filtered = [];
  
    if (type === "home") {
      filtered = temples;
    } else if (type === "old") {
      filtered = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
      });
    } else if (type === "new") {
      filtered = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
      });
    } else if (type === "small") {
      filtered = temples.filter(temple => temple.area < 10000);
    } else if (type === "large") {
      filtered = temples.filter(temple => temple.area  > 90000);
    }
  
    // Clear old content before appending new
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";
  
    displayTemple(filtered);
  }
  
    document.addEventListener("DOMContentLoaded", () => {
      displayTemple(temples);
    });
 