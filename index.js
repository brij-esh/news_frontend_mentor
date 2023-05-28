
const menu_button = document.getElementById('menu_button');
const menu = document.getElementById("menu");
function showMenu(){
    menu.style.right = "0";
}
menu_button.addEventListener("click", showMenu);


const menu_close_button = document.getElementById("menu_close_button");
function hideMenu(){
    menu.style.right = "-16rem";
}
menu_close_button.addEventListener("click", hideMenu); 