//book table
const today = new Date().toISOString().split("T")[0];
document.getElementById("date_input").setAttribute("min", today);

let date=document.getElementById("date_input");
let time=document.getElementById("time_input");
let button=document.getElementById("book_table_button");

function toChangeButton(){
    if(date.value !=="" && time.value !=="")
    {
        button.disabled=false;
        button.style.backgroundColor="royalBlue";
    }
    else
        button.disabled=true;
};

date.addEventListener("change",toChangeButton);
time.addEventListener("change",toChangeButton);
button.addEventListener("click",()=>{
    button.style.backgroundColor="green";
    button.textContent="Booking confirmed";
    confirm("Table booked successfull")
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