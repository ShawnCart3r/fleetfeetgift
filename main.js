let currentIndex = 0;
const contentBoxes = document.querySelectorAll('.content-box');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showContent(index) {
    clearInterval(autoSlideInterval); // Pause auto-slide on dot click
    
    contentBoxes.forEach((box, i) => {
        box.style.display = i === index - 1 ? 'flex' : 'none';
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index - 1].classList.add('active');

    currentIndex = index - 1; // Update current index
    autoSlide(); // Restart auto-slide
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % contentBoxes.length;
        showContent(currentIndex + 1);
    }, 9000); // Slides change every 9 seconds
}

window.onload = autoSlide;
