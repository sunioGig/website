// Select all elements to animate
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // animation classes when the element is in view
            entry.target.classList.add('animate__animated', 'animate__slideInUp');
            entry.target.style.opacity = 1; // Make it visible
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
});
elementsToAnimate.forEach(element => observer.observe(element));
// up is animations 

//<!-- -------JAVASCRIPT FOR TOGGLE------- -->

var navLinks = document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}
function hidemenu(){
    event.preventDefault();
    navLinks.style.right="-300px";
}

document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-links ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Exclude home page and contact section from highlighting
        if (linkHref !== 'index.html' && !linkHref.startsWith('#')) {
            // Check if the current URL matches the link (with or without .html)
            if (currentUrl.includes(linkHref) ||
                currentUrl.includes(linkHref.replace('.html', '')) ||
                currentUrl.includes(linkHref.replace('.html', '/'))) {
                link.classList.add('active');
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const countryCode = '+91';
    const phoneNumber = '9828462347';
    const message1 = "Namaste! I'd like to learn more about your ashram and yoga courses. Could you share the details?";
    const message2 = "Namaste, I'm interested in learning more about your yoga retreats. Could you please share the details and guide me on how to enroll?";
  
    document.querySelectorAll('.whatsapp-link').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message1)}`;
        window.open(url, '_blank');
      });
    });
  
    document.getElementById('KnowMoreLink').addEventListener('click', function(event) {
      event.preventDefault();
      const url = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message2)}`;
      window.open(url, '_blank');
    });
});
// about page 
// JavaScript for parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.about-intro');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
// test slider 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.nav-buttons.next');
    const prevButton = document.querySelector('.nav-buttons.prev');
    let currentIndex = 0;
    let isTransitioning = false;
    let autoAdvanceTimeout;

    function updateSlidePosition(duration = 600) {
        isTransitioning = true;
        track.style.transition = `transform ${duration}ms ease-in-out`;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        setTimeout(() => {
            isTransitioning = false;
        }, duration);
    }

    function moveToNextSlide() {
        if (isTransitioning) return;
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        if (isTransitioning) return;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    nextButton.addEventListener('click', () => {
        moveToNextSlide();
        resetAutoAdvance();
    });

    prevButton.addEventListener('click', () => {
        moveToPrevSlide();
        resetAutoAdvance();
    });

    function autoAdvance() {
        moveToNextSlide();
        scheduleNextAutoAdvance();
    }

    function scheduleNextAutoAdvance() {
        clearTimeout(autoAdvanceTimeout);
        autoAdvanceTimeout = setTimeout(autoAdvance, 10000); // Wait for 10 seconds before next transition
    }

    function resetAutoAdvance() {
        clearTimeout(autoAdvanceTimeout);
        scheduleNextAutoAdvance();
    }

    // Start auto-advance
    scheduleNextAutoAdvance();

    // Optional: Pause auto-advance on hover
    track.addEventListener('mouseenter', () => {
        clearTimeout(autoAdvanceTimeout);
    });

    track.addEventListener('mouseleave', () => {
        scheduleNextAutoAdvance();
    });
});