// Simple slideshow: switches to next image every 5 seconds
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const intervalMs = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start slideshow if there are slides on the page
if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, intervalMs);
}