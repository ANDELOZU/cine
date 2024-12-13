
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const carouselSlide = document.querySelector('.carousel-slide');
    const slideWidth = slides[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}


setInterval(() => moveSlide(1), 5000);

