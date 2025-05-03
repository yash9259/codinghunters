// Reviews Slider Functionality
export function initReviewsSlider() {
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
} 