// Import modules
import { initMobileMenu, initSmoothScroll, initNavBlur } from './modules/navigation.js';
import { initContactForm } from './modules/forms.js';
import { initReviewsSlider } from './modules/reviews.js';
import { 
    initCounterAnimation, 
    initServiceCards, 
    initProcessSteps, 
    initTechAnimations 
} from './modules/animations.js';

// Initialize navigation
initMobileMenu();
initSmoothScroll();
initNavBlur();

// Initialize forms
initContactForm();

// Initialize reviews slider
initReviewsSlider();

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    initCounterAnimation();
    initServiceCards();
    initProcessSteps();
    initTechAnimations();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('successModal');
const closeSuccessModal = successModal.querySelector('.close-modal');
const okButton = successModal.querySelector('.ok-button');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-btn');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show success modal
            successModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message. Please try again.');
        console.error('Form submission error:', error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Close success modal when clicking close button or OK button
function closeModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

closeSuccessModal.addEventListener('click', closeModal);
okButton.addEventListener('click', closeModal);

// Close success modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});

// Animate Service Cards on Scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Counter animation
function animateCounter() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 400;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                // Add a slight random delay for more natural counting
                setTimeout(updateCount, 30 + Math.random() * 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Intersection Observer for counter animation
const counterSection = document.querySelector('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterObserver.observe(counterSection);

// Process Steps Animation
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'all 0.5s ease-out';
    processObserver.observe(step);
});

// Quote Modal Functionality
const modal = document.getElementById('quoteModal');
const quoteBtn = document.getElementById('quoteBtn');
const closeBtn = document.querySelector('.close-modal');
const refreshBtn = document.querySelector('.refresh-quote');
const quoteText = document.getElementById('quoteText');

// Array of inspirational tech quotes
const quotes = [
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Technology is best when it brings people together. - Matt Mullenweg",
    "The advance of technology is based on making it fit in so that you don't really even notice it. - Larry Page",
    "The technology you use impresses no one. The experience you create with it is everything. - Sean Gerety",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. - Tim Berners-Lee",
    "It's not a faith in technology. It's faith in people. - Steve Jobs",
    "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",
    "The great thing about technology is that it empowers people to do what they want to do. - Steve Ballmer"
];

// Function to get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Show modal and generate quote
quoteBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    quoteText.textContent = getRandomQuote();
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Generate new quote when clicking refresh button
refreshBtn.addEventListener('click', () => {
    quoteText.textContent = getRandomQuote();
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#60a5fa'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#60a5fa',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Enhanced Service Cards Animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Reviews Slider
const reviewsContainer = document.querySelector('.reviews-container');
const reviewCards = document.querySelectorAll('.review-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let slidesPerView = 3; // Default for desktop

// Function to update slidesPerView based on screen width
function updateSlidesPerView() {
    if (window.innerWidth <= 768) {
        slidesPerView = 1; // Mobile
    } else if (window.innerWidth <= 1024) {
        slidesPerView = 2; // Tablet
    } else {
        slidesPerView = 3; // Desktop
    }
    updateSlider(); // Update slider after changing slidesPerView
}

// Function to update the slider
function updateSlider() {
    const totalSlides = reviewCards.length;
    const maxSlides = totalSlides - slidesPerView;
    
    // Update transform
    const slideWidth = reviewCards[0].offsetWidth + 32; // Including gap (2rem = 32px)
    reviewsContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= maxSlides;
    
    // Update active state of cards
    reviewCards.forEach((card, index) => {
        if (index >= currentSlide && index < currentSlide + slidesPerView) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    const totalSlides = reviewCards.length;
    if (currentSlide < totalSlides - slidesPerView) {
        currentSlide++;
        updateSlider();
    }
});

// Listen for window resize
window.addEventListener('resize', () => {
    updateSlidesPerView();
});

// Initialize slider
updateSlidesPerView();

// Technology Section Animations
const techCategories = document.querySelectorAll('.tech-category');
const techObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate tech items with delay
            const items = entry.target.querySelectorAll('.tech-item');
            items.forEach((item, i) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, i * 100);
            });
        }
    });
}, { threshold: 0.2 });

techCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(20px)';
    category.style.transition = 'all 0.5s ease-out';
    
    const items = category.querySelectorAll('.tech-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
    });
    
    techObserver.observe(category);
});

// Add hover effect to tech items
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const icon = item.querySelector('i');
        const xOffset = (x - rect.width / 2) / 10;
        const yOffset = (y - rect.height / 2) / 10;
        
        icon.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.1)`;
    });
    
    item.addEventListener('mouseleave', (e) => {
        const icon = item.querySelector('i');
        icon.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Add blur effect to nav links based on scroll position
function handleNavBlur() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1); // Remove #
            if (href === current) {
                link.style.filter = 'none';
                link.style.opacity = '1';
            } else {
                link.style.filter = 'blur(1px)';
                link.style.opacity = '0.7';
            }
        });
    });
}

// Initialize nav blur effect
handleNavBlur(); 