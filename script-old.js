// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const modal = document.getElementById('coming-soon-modal');
const newsletterForm = document.getElementById('newsletter-form');
const notifyForm = document.querySelector('.notify-form');

// Navigation functionality
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    closeMobileMenu();
}

// Active navigation highlighting
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        }
    });
}

// Back to top button functionality
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// FAQ Accordion functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = element.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-question').forEach(question => {
        question.classList.remove('active');
        question.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current FAQ item
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}

// Modal functionality
function openComingSoon() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeComingSoon() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
function closeModalOnOutsideClick(e) {
    if (e.target === modal) {
        closeComingSoon();
    }
}

// Form submission handlers
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Show loading state
    const submitBtn = e.target.querySelector('button');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> Subscribing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you for subscribing! You\'ll receive updates about E-Gnite.', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleNotifySubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Show loading state
    const submitBtn = e.target.querySelector('button');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('You\'ll be notified when registration opens!', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeComingSoon();
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add notification content styles
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        font-size: 1rem;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Scoreboard update simulation
function updateScoreboard() {
    const lastUpdated = document.getElementById('last-updated');
    const scores = document.querySelectorAll('.score');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Simulate score updates
    scores.forEach((score, index) => {
        const currentScore = parseInt(score.textContent);
        const newScore = Math.max(0, currentScore + Math.floor(Math.random() * 10) - 5);
        score.textContent = newScore;
        
        // Update progress bar
        const progressBar = progressBars[index];
        const percentage = Math.min(100, (newScore / 100) * 100);
        progressBar.style.width = percentage + '%';
    });
    
    // Update timestamp
    const now = new Date();
    lastUpdated.textContent = now.toLocaleTimeString();
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.speaker-card, .timeline-item, .highlight-card, .partner-card, .sponsor-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Search functionality
function setupSearch() {
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Search functionality coming soon!', 'info');
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Close modal events
    modal.addEventListener('click', closeModalOnOutsideClick);
    
    // Form submissions
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    if (notifyForm) {
        notifyForm.addEventListener('submit', handleNotifySubmit);
    }
    
    // Scroll events
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        toggleBackToTop();
    });
    
    // Setup animations
    setupAnimations();
    
    // Setup search
    setupSearch();
    
    // Initialize scoreboard updates (every 30 seconds)
    setInterval(updateScoreboard, 30000);
    
    // Initial scoreboard update
    updateScoreboard();
    
    // Add some interactive features
    addInteractiveFeatures();
});

// Additional interactive features
function addInteractiveFeatures() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Hover effects for cards
    const cards = document.querySelectorAll('.speaker-card, .highlight-card, .partner-card, .sponsor-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
   
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLink();
    toggleBackToTop();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeComingSoon();
    }
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}


// ---------------------------------

// ...existing code...
// Team Card Fantasy Zoom
document.addEventListener('DOMContentLoaded', function () {
    const teamCards = document.querySelectorAll('.team-card');
    const overlay = document.getElementById('teamOverlay');
    let activeCard = null;

    teamCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (activeCard) return;
            card.classList.add('active');
            overlay.classList.add('active');
            activeCard = card;
            document.body.style.overflow = 'hidden';
        });
    });

    overlay.addEventListener('click', function () {
        if (activeCard) {
            activeCard.classList.remove('active');
            overlay.classList.remove('active');
            activeCard = null;
            document.body.style.overflow = '';
        }
    });

    // Optional: ESC key closes the zoom
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && activeCard) {
            activeCard.classList.remove('active');
            overlay.classList.remove('active');
            activeCard = null;
            document.body.style.overflow = '';
        }
    });
});
// ...existing code...


logPerformance();

// Export functions for global access
window.openComingSoon = openComingSoon;
window.closeComingSoon = closeComingSoon;
window.toggleFAQ = toggleFAQ; 
