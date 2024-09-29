document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.classList.add('mobile-menu-button');
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    `;

    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('nav .space-x-4');

    nav.insertBefore(menuButton, navLinks);

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show-mobile-menu');
    });

    // Responsive menu adjustments
    function adjustMenu() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            navLinks.classList.add('mobile-menu');
        } else {
            menuButton.style.display = 'none';
            navLinks.classList.remove('mobile-menu', 'show-mobile-menu');
        }
    }

    window.addEventListener('resize', adjustMenu);
    adjustMenu();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('show-mobile-menu')) {
                navLinks.classList.remove('show-mobile-menu');
            }
        });
    });

    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation to the hero section
    const heroSection = document.querySelector('section.bg-teal-500');
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'translateY(20px)';
    heroSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu highlight
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Apply for Loan button
    const applyBtn = document.querySelector('.apply-btn');
    applyBtn.addEventListener('click', function() {
        alert('Application form will open here');
        // In a real application, this would open a modal or redirect to an application page
    });

    // Learn More button
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    learnMoreBtn.addEventListener('click', function() {
        // Smooth scroll to testimonial section
        const testimonialSection = document.querySelector('.testimonial');
        testimonialSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Testimonial carousel
    const testimonials = [
        {
            quote: "I had 15+ folks reach out to me on EasyLo. I was completely blown away by how easy it's been to reach these prospective buyers. We weren't necessarily looking to sell but EasyLo has been A+. From start to finish, we were acquired within 30-days at full asking price.",
            author: "Ash Wednesday",
            role: "Designer at zeeshan"
        },
        {
            quote: "Savingpro made the loan process incredibly simple. Their user-friendly platform and quick response times exceeded my expectations.",
            author: "Zeeshan",
            role: "Small Business Owner"
        }
    ];

    let currentTestimonial = 0;
    const testimonialQuote = document.querySelector('.testimonial blockquote');
    const testimonialAuthor = document.querySelector('.testimonial-author h3');
    const testimonialRole = document.querySelector('.testimonial-author p');
    const testimonialNavDots = document.querySelectorAll('.testimonial-nav span');

    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        testimonialQuote.textContent = testimonial.quote;
        testimonialAuthor.textContent = testimonial.author;
        testimonialRole.textContent = testimonial.role;

        testimonialNavDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonial);
        });
    }

    testimonialNavDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentTestimonial = index;
            updateTestimonial();
        });
    });

    // Auto-rotate testimonials every 10 seconds
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 10000);

    // Initialize testimonial
    updateTestimonial();
});