// Counter Animation
export function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 400;

    function animateCounter() {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
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

    if (counterSection) {
        counterObserver.observe(counterSection);
    }
}

// Service Cards Animation
export function initServiceCards() {
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
}

// Process Steps Animation
export function initProcessSteps() {
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
}

// Technology Section Animations
export function initTechAnimations() {
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
} 