const carrusel = document.querySelector(".carrusel");
const backgruondImage = document.querySelector("");

const leftArrow = document.querySelector("left-arrow");
const rightArrow = document.querySelector("right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelector(".corrusel_imágen");

const totalImages = Object.keys(images).length;

// const imageWidth = images [1].getBoundingClientRect().x;
const imageWidth = 520;

var swiper = new swiper(". mySwiper", {

    slidesPerview: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidePerview:4
        }
    }
})
