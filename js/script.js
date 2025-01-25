const menu = document.getElementById("menu")
const action = document.getElementById("actions")

menu.addEventListener("click", ()=>{
    handleMenu();

})

function handleMenu(){
    //alert("بسم الله")
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}