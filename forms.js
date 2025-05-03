// Form Submission Handler
export function initContactForm() {
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

    // Close success modal functions
    function closeModal() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    closeSuccessModal.addEventListener('click', closeModal);
    okButton.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal();
        }
    });
} 