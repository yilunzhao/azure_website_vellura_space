// ================================
// Navbar Scroll Effect
// ================================

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================
// Mobile Navigation Toggle
// ================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ================================
// Smooth Scrolling for Anchor Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Intersection Observer for Animations
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and benefit cards
document.querySelectorAll('.feature-card, .benefit-card').forEach(card => {
    observer.observe(card);
});

// ================================
// Counter Animation
// ================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
    }, 16);
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';

            document.querySelectorAll('.stat-number').forEach(stat => {
                const target = parseInt(stat.dataset.count);
                animateCounter(stat, target);
            });

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (heroSection) {
    statsObserver.observe(heroSection);
}

// ================================
// Parallax Effect
// ================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ================================
// Form Submission
// ================================

const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(consultationForm);
        const email = consultationForm.querySelector('input[type="email"]').value;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Thank you! We\'ll contact you soon to discuss your design needs.', 'success');

        // Reset form
        consultationForm.reset();
    });
}

// ================================
// Notification System
// ================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(style);

// ================================
// Active Link Highlighting
// ================================

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const section = document.querySelector(href);
        if (section) {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.style.color = 'var(--text-secondary)');
                link.style.color = 'var(--primary)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ================================
// Prevent layout shift on scroll
// ================================

const html = document.documentElement;
const scrollbarWidth = window.innerWidth - html.clientWidth;
if (scrollbarWidth > 0) {
    document.body.style.paddingRight = scrollbarWidth + 'px';
}

// ================================
// Initialize
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Ensure animations are ready
    console.log('Vellura Space website loaded successfully');
});
