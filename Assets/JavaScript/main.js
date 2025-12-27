// ========================================
// PyData Indore - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll handler for navigation
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile nav if open
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.visual-card, .event-card, .topic-card, .tier-card, .content-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Event filter functionality (for events page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card-full');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            eventCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'grid';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formMessage = document.getElementById('formMessage');
        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const submitIcon = document.getElementById('submitIcon');
        const emailInput = document.getElementById('email');
        const replyToInput = document.getElementById('replyTo');
        
        // Update reply-to field when email changes
        if (emailInput && replyToInput) {
            emailInput.addEventListener('input', () => {
                replyToInput.value = emailInput.value;
            });
        }
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Remove previous messages
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
            
            // Clear previous error styles
            contactForm.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
                input.style.borderColor = '';
                input.classList.remove('error');
            });
            
            // Basic validation
            const formData = new FormData(contactForm);
            let isValid = true;
            const firstInvalid = [];
            
            contactForm.querySelectorAll('[required]').forEach(input => {
                const value = input.value.trim();
                if (!value) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    input.classList.add('error');
                    if (firstInvalid.length === 0) {
                        firstInvalid.push(input);
                    }
                } else {
                    input.style.borderColor = '';
                    input.classList.remove('error');
                }
            });
            
            // Email validation
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                isValid = false;
                emailInput.style.borderColor = '#ef4444';
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!isValid) {
                showMessage('Please fill in all required fields.', 'error');
                if (firstInvalid[0]) {
                    firstInvalid[0].focus();
                }
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            submitIcon.style.display = 'none';
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showMessage('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    // Clear all validation errors after successful submission
                    contactForm.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
                        input.style.borderColor = '';
                        input.classList.remove('error');
                    });
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        showMessage('There was an error submitting the form. Please try again or email us directly at pydataindore@gmail.com', 'error');
                    } else {
                        throw new Error('Form submission failed');
                    }
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showMessage('Unable to send message. Please email us directly at pydataindore@gmail.com or try again later.', 'error');
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitText.textContent = 'Send Message';
                submitIcon.style.display = 'block';
            }
        });
        
        function showMessage(text, type) {
            formMessage.textContent = text;
            formMessage.className = `form-message form-message-${type}`;
            formMessage.style.display = 'flex';
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }
    }
    
    // Add staggered animation delays to grid items
    document.querySelectorAll('.topics-grid .topic-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
    });
    
    document.querySelectorAll('.events-grid .event-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 10;
                shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
    
    // Counter animation for stats
    const animateCounter = (el, target) => {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + '+';
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };
    
    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.dataset.animated) {
                    const text = statNumber.textContent;
                    const num = parseInt(text);
                    if (!isNaN(num)) {
                        statNumber.dataset.animated = 'true';
                        animateCounter(statNumber, num);
                    }
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
});
