
// menu
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searcForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// var icon = document.getElementById("icon")
// icon.onclick = function (){
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//         icon.src ="img/sun.png";
//     }else{
//         icon.src ="img/moon.png";
//     }
// }