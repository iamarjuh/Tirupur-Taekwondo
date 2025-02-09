let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const dots = document.querySelectorAll('.dot');

// Function to change the image in the carousel
function changeImage() {
    // Hide the current image and text
    items[currentIndex].style.opacity = 0;
    dots[currentIndex].classList.remove('active');

    // Move to the next image (loop back to the first image)
    currentIndex = (currentIndex + 1) % totalItems;
    console.log(currentIndex);
    // Show the next image and text
    document.querySelector('.image-carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    items[currentIndex].style.opacity = 1;
    dots[currentIndex].classList.add('active');
}

// Start the image change every 5 seconds
setInterval(changeImage, 5000);

// Initialize the first image and dot as visible
items[currentIndex].style.opacity = 1;
dots[currentIndex].classList.add('active');

// Add click event for each dot to manually change images
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));

        // Hide the current image and text
        items[currentIndex].style.opacity = 0;
        dots[currentIndex].classList.remove('active');

        // Show the selected image and text
        currentIndex = index;
        document.querySelector('.image-carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
        items[currentIndex].style.opacity = 1;
        dots[currentIndex].classList.add('active');
    });
});
