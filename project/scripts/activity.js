const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click',()=>{
    //toggle the button switching icon
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('show');
});

//getting accurate year
const currentyear=document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML=today.getFullYear();

//code for last modified
const lastModified= document.querySelector("#lastModified");
lastModified.innerHTML=`Last Modification ${document.lastModified}`;

//temples Array
const activity = [
    {
      activityName: "Class Hours",
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwWtQx6n_7zXboKFSZorQCyJsOp8LitJSHg&s"
    },
    {
      activityName: "Class Hours",
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BmcoOob8tbaHjKK9YoLY--mjivZ0fkbxxEpHMrKQxyy14XVqQ4PJx6-C9Js7qVbcWC0&usqp=CAU"
    },
    {
      activityName: "Class Hours",
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu40AHaEIu4RxONNZFKDO1Vv0FzlXwwxB07oXhZPnBiXcp7CVMoAL0aw2P8V_toC1Nzk4&usqp=CAU"
    },
    {
      activityName: "Coding Contest",
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UhdqcRu2t0j06v56sW2fCOKbVF1bpqDbfFaolPDde60E4UireS3uQ3h9Tq7W3Z9ewwg&usqp=CAU"
    },
    {
      activityName: "Coding Contest",
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FPdcdV1QF2-A2xOzxC7I2Dy8638qp3yWfUmDDMYxy3eIO_UmKYgCE1PgMPw1rBHG3A8&usqp=CAU"
    },
    {
      activityName: "Coding Contest",
      imageUrl:
      "https://academy.cis.fiu.edu/wp-content/uploads/sites/17/2024/03/IMG_2391_CR2-1024x683.jpg"
    },
    {
      activityName: "Robotics Practicals",
      imageUrl:
      "https://static01.nyt.com/images/2019/06/07/learning/07sp-robotics1/merlin_154645734_25b925cc-c556-40b5-8934-2d257f9a1a3b-superJumbo.jpg"
    },
    // Add more temple objects here...
    {
      activityName: "Robotics Practicals",
        imageUrl:
        "https://images.squarespace-cdn.com/content/v1/63d40fe2cbd65e16cb8098b6/2f171766-7129-4ecb-97f7-f76ba2f39fd2/teen-doing-experiments-robotics-laboratory-boy-vr-headset-controlling-robot.jpg"
      },
      {
        activityName: "Robotics Practicals",
        imageUrl:
        "https://media.npr.org/assets/img/2023/10/04/mleong_scioly_20230831_slide-9e843d008b04d98e953ae08664a41e26fa8369a0.jpg"
      },
      {
        activityName: "Awards",
        imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5oz4ZYE0HkbrWF1imvIN2EbqdiTht0BO0g&s"
      },
  ];

  function displayActivity(activityArray){
  const container= document.getElementById("cardContainer");
  activityArray.forEach(items=>{
    const activity= items.activityName;
    const img= items.imageUrl;
    const card = document.createElement("div");
    card.classList.add("album");

    card.innerHTML= `
        <section class="cap">
        <h2>${activity}</h2>
        </section>
        <aside class="pic">
         <img src="${img}" alt="${activity}" loading="lazy" />
        </aside>`
        container.appendChild(card);
  })};

  function filteredActivity(type) {
    let filtered = [];
  
    switch (type) {
      case "class":
        filtered = activity.filter(a => a.activityName === "Class Hours");
        break;
      case "contests":
        filtered = activity.filter(a => a.activityName === "Coding Contest");
        break;
      case "robotics":
        filtered = activity.filter(a => a.activityName === "Robotics Practicals");
        break;
      case "awards":
        filtered = activity.filter(a => a.activityName === "Awards");
        break;
      case "all":
      default:
        filtered = activity;
    }

    const container = document.getElementById("cardContainer");
    container.innerHTML = "";
  
    displayActivity(filtered);
  }
  
  
    document.addEventListener("DOMContentLoaded", () => {
      displayActivity(activity);
    });
 