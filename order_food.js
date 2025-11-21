let parentDiv=document.getElementById("food_items");
let food_data="";
async function toloadmenu() {
    let responce= await fetch("food_items.json");
    food_data=await responce.json();
    console.log(food_data);
    loadMenuSections();
}
toloadmenu();
let startersDiv=document.getElementById("starters");
let mainCource=document.getElementById("main_course");
let dessertsDiv=document.getElementById("desserts");

function toCreateDiv(item){
    return`
    <div class="dish">
        <img src="${item.image}" alt="${item.name}" class="food_image">
        <h3>${item.name}</h3>
        <span class="price">₹${item.price}</span>
        <p>${item.description}</p>
    </div>
    `;
}
function loadMenuSections() {

    // Starters
    food_data.starters.forEach(item => {
        startersDiv.innerHTML += toCreateDiv(item);
    });

    // Main Course
    food_data.main_course.forEach(item => {
        mainCource.innerHTML += toCreateDiv(item);
    });

    // Desserts
    food_data.desserts.forEach(item => {
        dessertsDiv.innerHTML += toCreateDiv(item);
    });
}
let menuButton=document.getElementById("menu_button");
let menuButtonOptions=document.getElementById("menu_button_options");
menuButton.addEventListener("click",()=>{
   if(menuButtonOptions.style.display=="none")
    {
        menuButtonOptions.style.display="flex";
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-caret-down");
    }
    else
        {
            menuButtonOptions.style.display="none";
            menuButton.classList.remove("fa-caret-down");
            menuButton.classList.add("fa-bars");
    }
});

