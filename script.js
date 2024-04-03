// Declare a global variable to keep track of the current slide index
var slideIndex = 1;

document.addEventListener('DOMContentLoaded', function () {

    // Assign click events for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Open the lightbox modal on image click and display the correct image
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openModal();
            currentSlide(index + 1);
        });
    });

    // Add click events for next/previous controls
    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    // Add click event for close button
    document.querySelector('.close').addEventListener('click', function() {
        closeModal();
    });

    // Clicking outside the modal content closes the modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('lightboxModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});

// Function to open the modal/lightbox
function openModal() {
    document.getElementById('lightboxModal').style.display = 'block';
}

// Function to close the modal/lightbox
function closeModal() {
    document.getElementById('lightboxModal').style.display = 'none';
}

// Function to change slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to control current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
