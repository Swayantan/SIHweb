const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    slideImage();
};

const goNext = () => {
    counter++;
    slideImage();
};

const slideImage = () => {
    if (counter < 0) {
        counter = slides.length - 1;
    } else if (counter >= slides.length) {
        counter = 0;
    }

    sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
};

// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function updateSlider() {
//     const slideWidth = slides[0].clientWidth;
//     slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// function nextSlide() {
//     if (currentIndex < slides.length - 1) {
//         currentIndex++;
//         updateSlider();
//     }
// }

// function prevSlide() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateSlider();
//     }
// }

// const prevButton = document.querySelector('.prev-btn');
// const nextButton = document.querySelector('.next-btn');

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// window.addEventListener('resize', updateSlider);
// updateSlider();
