/*
const title = document.querySelector("#title");
function handleClick(click){
    title.style.color = "red";
}

title.addEventListener("click", handleClick);
*/
/*
if("10" === 10){
    console.log("hi");
} else if("10" === "10"){
    console.log("lalala");
} else{
    console.log("ho");
}
*/
/*
const age = prompt("How old are you?");

if(age >= 18 && age <= 21){
    console.log("you can drink");
} else if(age > 21){
    console.log("go ahead");
}
else{
    console.log("too young");
}
 */
/*
const title = document.querySelector("#title");
const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
 /*   
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
}
*/
function init(){
    title.addEventListener("click", handleClick);
}
init(); 