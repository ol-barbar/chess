const jsOff = document.querySelector(".project-plan__list--nojs");
const jsOn = document.querySelector(".project-plan__list--js");
const projectList = document.querySelector(".project-plan__list");
const projectSliderFirst = document.querySelector(".project-item");
const projectSlider = document.querySelectorAll(".project-item");
const prevSlider = document.querySelector(".project__slider-button--prev");
const nextSlider = document.querySelector(".project__slider-button--next");
const itemSlider = document.querySelectorAll(".project__slider-dot-item");

jsOff.classList.toggle("project-plan__list--js");
prevSlider.disabled = true;

var positionSlider = window.getComputedStyle(projectSliderFirst).left;
var itemLength = projectSlider.length;
var dotLength = itemSlider.length;

var n = 0;
itemSlider[n].classList.add("project__slider-dot-item--active");

var widthElem = projectList.offsetWidth;
widthElem = widthElem - 10;

var showNextSlide = function (evt) {
    positionSlider = parseFloat(positionSlider);
    if (positionSlider <= 0) {
        positionSlider = positionSlider - widthElem;
        for (let i=0; i<=itemLength-1; i++) {
            projectSlider[i].style.left = positionSlider + "px";
        }
        itemSlider[n].classList.remove("project__slider-dot-item--active");
        n = n+1;
        itemSlider[n].classList.add("project__slider-dot-item--active");
        prevSlider.disabled = false;
        nextSlider.disabled = false;
    }
    if (positionSlider==-330) {
        nextSlider.disabled = true;
    }
}

var showPrevSlide = function (evt) {
    positionSlider = parseFloat(positionSlider);
    if (positionSlider < 0) {
        positionSlider = positionSlider + widthElem;
        for (let i=0; i<=itemLength-1; i++) {
            projectSlider[i].style.left = positionSlider + "px";
        }
        itemSlider[n].classList.remove("project__slider-dot-item--active");
        n = n-1;
        itemSlider[n].classList.add("project__slider-dot-item--active");
        prevSlider.disabled = false;
        nextSlider.disabled = false;
    }
    if (positionSlider==0) {
        prevSlider.disabled = true;
    }
}    

prevSlider.addEventListener("click", showPrevSlide);
nextSlider.addEventListener("click", showNextSlide);
