let mobileBtn = document.getElementById("bmenu");
let mobileMenu = document.getElementById("mmenu");
let menuPng = document.getElementById("menupng");
let menuSelection = document.querySelectorAll('#mmenu a')
let isOpen = false;


function main() {
    window.addEventListener("click", function (e) {
        if (mobileMenu.contains(e.target)) {
            // Clicked in box
        }
        else if (mobileBtn.contains(e.target)) {
            // Clicked on button
            MenuInteract();
        }
        else {
            menuPng.src = "./images/menuburger.png";
            closeMenu();
            isOpen = false;
        }
    });

    for (let i = 0; i < menuSelection.length; i++) {
        menuSelection[i].addEventListener("click", function () {
            menuPng.src = "./images/menuburger.png";
            closeMenu();
            isOpen = false;
        });
    }
}

function MenuInteract() {
    if (isOpen) {
        menuPng.src = "./images/menuburger.png";
        closeMenu();
        isOpen = false;
    }
    else {
        menuPng.src = "./images/menucross.png";
        openMenu();
        isOpen = true;
    }

}

function openMenu() {
    mobileMenu.style.left = "0%";
    mobileMenu.style.transitionDuration = "0.4s";
}

function closeMenu() {
    mobileMenu.style.left = "-100%";
    mobileMenu.style.transitionDuration = "0.4s";
}

window.onload = function () {
    mobileMenu.style.left = "-100%";
    this.main();
}