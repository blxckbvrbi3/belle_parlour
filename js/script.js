// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Hide and show gallery
function showGallery() {
    console.log('Button clicked!'); // Debugging
    const gallery = document.getElementById('gallery');
    
    if (!gallery) {
        console.error("Gallery element not found!");
        return;
    }

    const currentDisplay = window.getComputedStyle(gallery).display;
    
    if (currentDisplay === 'none') {
        gallery.style.display = 'block'; // Show the gallery
    } else {
        gallery.style.display = 'none'; // Hide the gallery
    }
}


//Whatsapp Button
document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".btn-whatsapp");
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function () {
            alert("Redirecting to WhatsApp for booking...");
        });
    } else {
        console.warn("WhatsApp button not found!");
    }
});

