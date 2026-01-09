document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader Logic ---
    const preloader = document.getElementById('preloader');

    // Simulate minimum brand intro time (2.5s) or wait for load
    setTimeout(() => {
        preloader.style.transition = 'opacity 0.8s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 2500);


    // --- 3D Tilt Effect (Hero Card) ---
    const heroSection = document.querySelector('.hero');
    const heroCard = document.getElementById('heroCard');

    if (heroSection && heroCard) {
        heroSection.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = heroSection;
            const { clientX: x, clientY: y } = e;

            // Calculate rotation based on cursor position relative to center
            // Range: -15deg to 15deg
            const xRotation = ((y / height) - 0.5) * -20;
            const yRotation = ((x / width) - 0.5) * 20;

            // Apply transform
            heroCard.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }


    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to save performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobilePreview');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            // Note: In a real production app, we'd toggle a class (e.g., .active) 
            // matches CSS logic: .nav-menu.active 
            navMenu.classList.toggle('active');
        });
    }

    // --- Contact Form Handling ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Sent Successfully! 🎉';
            btn.style.background = '#10B981'; // Green
            btn.style.color = 'white';

            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

});
