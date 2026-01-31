// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordion functionality
    initFAQAccordion();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Add scroll event listener for header shadow
    window.addEventListener('scroll', handleHeaderShadow);
});

// Initialize FAQ accordion
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            this.classList.toggle('active');
            
            // Get the answer element
            const answer = this.nextElementSibling;
            
            // Toggle answer visibility
            if (this.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
            
            // Close other FAQ items (optional - remove if you want multiple open)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.style.maxHeight = '0';
                }
            });
        });
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, /* Adjusted for larger header */
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle header shadow on scroll
function handleHeaderShadow() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
}

// Scroll to purchase section
function scrollToPurchase() {
    const purchaseSection = document.getElementById('purchase');
    if (purchaseSection) {
        window.scrollTo({
            top: purchaseSection.offsetTop - 100, /* Adjusted for larger header */
            behavior: 'smooth'
        });
    }
}

// Scroll to features section
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        window.scrollTo({
            top: featuresSection.offsetTop - 100, /* Adjusted for larger header */
            behavior: 'smooth'
        });
    }
}

// Show purchase modal
function purchaseProduct() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close modal when clicking outside of it
document.addEventListener('click', function(e) {
    const modal = document.getElementById('purchaseModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});