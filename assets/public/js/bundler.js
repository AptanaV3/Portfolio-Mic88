// --- Affichage du menu ----------------------------------------------
function showMenu() {
    let nav = document.getElementById('navbar');
    nav.classList.toggle("show-menu");
}

function closeMenu() {
    let nav = document.getElementById('navbar');
    nav.classList.remove("show-menu");
}


// --- Changement de theme ----------------------------------------------
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

// --- deplacement de la bulle du footer ----------------------------------------------
function mouseo(e) {
    let el = document.getElementById(e);
    let cursor = document.getElementById("cursor");

    cursor.style.left = parseInt(el.getBoundingClientRect().x) + "px";

    //cursor.style.transform = "translateX(" + parseInt(el.getBoundingClientRect().x - cursor.getBoundingClientRect().x * 1) + "px)";


    //alert(el.getBoundingClientRect().x);
}

// --- Help function ----------------------------------------------

function elVisibility(classes) {
    let elements = document.getElementsByClassName(classes);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
    }
}



function activeLink(id) {
    document.getElementById(id).classList.add("active");
    if (id === "all") {
        document.getElementById("lg").classList.remove("active");
        document.getElementById("framework").classList.remove("active");
        document.getElementById("tools").classList.remove("active");
    }
    else if (id === "lg") {
        document.getElementById("all").classList.remove("active");
        document.getElementById("framework").classList.remove("active");
        document.getElementById("tools").classList.remove("active");
    }
    else if (id === "framework") {
        document.getElementById("all").classList.remove("active");
        document.getElementById("lg").classList.remove("active");
        document.getElementById("tools").classList.remove("active");
    }
    else if (id === "tools") {
        document.getElementById("all").classList.remove("active");
        document.getElementById("lg").classList.remove("active");
        document.getElementById("framework").classList.remove("active");
    }
}

function showAll() {
    let elements = document.getElementsByClassName('skill');
    activeLink("all");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
    }
}

function elhiden(classes) {
    let elements = document.getElementsByClassName(classes);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}


function showSP(classes) {
    elVisibility(classes);

    if (classes === 'lg') {
        activeLink("lg");
        elhiden("framework");
        elhiden("tools");
    }
    else if (classes === 'framework') {
        activeLink("framework");
        elhiden("lg");
        elhiden("tools");
    }
    else {
        activeLink("tools");
        elhiden("framework");
        elhiden("lg");
    }

}
