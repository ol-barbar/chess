const jsIsOff = document.querySelector(".party__list--nojs");
const jsIsOn = document.querySelector(".party__list--js");

const partyList = document.querySelector(".party__list");
const partyItemFirst = document.querySelector(".party__item");
const partyItem = document.querySelectorAll(".party__item");
const prevParty = document.querySelector(".party__slider-button--prev");
const nextParty = document.querySelector(".party__slider-button--next");

jsIsOff.classList.toggle("party__list--js");

var positionParty = window.getComputedStyle(partyItemFirst).left;
var partyLength = partyItem.length;

var widthSlider = partyList.offsetWidth;
widthSlider = widthSlider + 30;

positionParty = parseFloat(positionParty);

var showNextParty = function (evt) {
    positionParty = positionParty - widthSlider;
    for (let i=0; i<=partyLength-1; i++) {
        partyItem[i].style.left = positionParty + "px";
    }
}

var showPrevParty = function (evt) {
    positionParty = positionParty + widthSlider;
    for (let i=0; i<=partyLength-1; i++) {
        partyItem[i].style.left = positionParty + "px";
    }
}

nextParty.addEventListener("click", showNextParty);
prevParty.addEventListener("click", showPrevParty);
