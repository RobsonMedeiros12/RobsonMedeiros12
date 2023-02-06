document.getElementById("back-to-top").addEventListener("click", function(){
    window.scrollTo(0, 0);
});

//carrosel//

const carousel = document.querySelector(".carousel");
const slidesContainer = carousel.querySelector(".slides");
const slides = Array.from(slidesContainer.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slideWidth = slides[0].getBoundingClientRect().width;



const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

let currentSlideIndex = 0;

const moveToSlide = (index) => {
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlideIndex = index;
};

prevButton.addEventListener("click", () => {
  moveToSlide((currentSlideIndex - 1 + slides.length) % slides.length);
});

nextButton.addEventListener("click", () => {
  moveToSlide((currentSlideIndex + 1) % slides.length);
});

var slideIndex = 0;
showSlides();


