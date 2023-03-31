function showMenu() {
    let nav = document.getElementById('navbar');
    nav.classList.toggle("show-menu");
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