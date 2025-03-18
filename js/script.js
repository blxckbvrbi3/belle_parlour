// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// script.js
function showGallery() {
    console.log('Button clicked!'); // Debugging
    const gallery = document.getElementById('gallery');
    if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'block'; // Show the gallery
    } else {
        gallery.style.display = 'none'; // Hide the gallery
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".btn-whatsapp");
    whatsappBtn.addEventListener("click", function () {
        alert("Redirecting to WhatsApp for booking...");
    });
});

