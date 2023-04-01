function showMenu() {
    let nav = document.getElementById('navbar');
    nav.classList.toggle("show-menu");
}

function closeMenu() {
    let nav = document.getElementById('navbar');
    nav.classList.remove("show-menu");
}

function theme() {

    let body = document.getElementById('body');
    let theme_drop = document.getElementById('theme_drop');

    body.classList.toggle("dark-mode");

    if (theme_drop.classList == "cercle dark"
    ) {
        theme_drop.classList.remove("dark");
        theme_drop.classList.add("light");
    }
    else {
        theme_drop.classList.remove("light");
        theme_drop.classList.add("dark");
    }
}

function mouseo(e) {
    let el = document.getElementById(e);
    let cursor = document.getElementById("cursor");

    cursor.style.left = parseInt(el.getBoundingClientRect().x) + "px";

    //cursor.style.transform = "translateX(" + parseInt(el.getBoundingClientRect().x - cursor.getBoundingClientRect().x * 1) + "px)";


    //alert(el.getBoundingClientRect().x);
}
