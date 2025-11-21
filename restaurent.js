//seatch box
let foodData=""
async function tofetchTheData(){
    let responce=await fetch("food_items.json");
    foodData=await responce.json();
    console.log(foodData);
}
tofetchTheData();
let serchResult=document.getElementById("search_result");
let searchBox=document.getElementById("search_box");
searchBox.addEventListener("input",()=>{
    let text=searchBox.value.toLowerCase();
    let allItems = [
        ...foodData.starters,
        ...foodData.main_course,
        ...foodData.desserts
    ];
    let result=allItems.filter(items=>(
        items.name.toLowerCase().includes(text) 
    ));
    console.log(result);
    function htmlContent(item){
        return`
        <div class="resultDiv">
            <h1>${item[0].name}</h1>
            <img src="${item[0].image}" class=searchImage>
        </div>
        `
    };
    serchResult.style.display="block";
    serchResult.innerHTML =htmlContent(result);
    if(searchBox.value =="")
        serchResult.style.display="None";
});
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