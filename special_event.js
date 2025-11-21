//book table
const today = new Date().toISOString().split("T")[0];
document.getElementById("date_input").setAttribute("min", today);

let date=document.getElementById("date_input");
let time=document.getElementById("time_input");
let button=document.getElementById("Event_book_button");
let eventName=document.getElementById("event_selection");
let event_selected="";
eventName.addEventListener("change",()=>{
    // event_selected=eventName.value;
    event_selected=eventName.value;
});
console.log(event_selected);

function toChangeButton(){
    if(time.value !=="" && date.value !=="" && event_selected!=="")
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
    button.textContent="Event Booked"
    confirm("Celebration of "+event_selected+" booked")
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