let burgerButton = document.getElementById("burgerButton");
let closeButton = document.getElementById("closeButton");
let mobileMenu = document.getElementById("mobileMenu");

burgerButton.addEventListener( "click" , function(event) {
    event.preventDefault();
    mobileMenu.classList.add("active")
});

closeButton.addEventListener( "click" , function(event) {
    event.preventDefault();
    mobileMenu.classList.remove("active")
});

let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let listItems = document.querySelectorAll(".heading");

function scrolling() {
    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active-head");
        } else {
            listItem.classList.remove("active-head");
        }
    }
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
