document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll
    const highlightCards = gsap.utils.toArray('.highlight-card');
    highlightCards.forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate community stats
    const statCards = gsap.utils.toArray('.stat-card');
    statCards.forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate event spotlight
    const eventSpotlight = document.querySelector('.event-spotlight');
    if (eventSpotlight) {
        gsap.from(eventSpotlight, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: eventSpotlight,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    }

    // Animate content cards
    const contentCards = gsap.utils.toArray('.content-card');
    contentCards.forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate benefit cards
    const benefitCards = gsap.utils.toArray('.benefit-card');
    benefitCards.forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate section headings
    const sectionHeadings = gsap.utils.toArray('h2');
    sectionHeadings.forEach(heading => {
        gsap.from(heading, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: heading,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        
        gsap.to(stat, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: stat,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            onUpdate: function() {
                stat.innerHTML = Math.floor(this.targets()[0].innerHTML) + '+';
            }
        });
    });

    // Parallax effect for hero section background
    gsap.to('.hero-section', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Rotate Swift logo on scroll
    gsap.to('.swift-logo', {
        rotation: 360,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Create a GSAP timeline for the animations
    const tl = gsap.timeline();

    // Hello handwriting animation
    tl.to(".hello-path", {
        duration: 2.5,
        strokeDashoffset: 0,
        ease: "power1.inOut"
    })

    // Pause for a moment after the Hello animation
    .to({}, {duration: 0.5})

    // Swift logo animation - flying from top-left
    .to(".swift-logo-container", {
        duration: 1.2,
        top: "50%",
        left: "50%",
        x: -120,
        y: 0,
        opacity: 1,
        rotation: 360,
        scale: 1,
        ease: "back.out(1.7)"
    })

    // Community text animation
    .to(".community-text", {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out"
    }, "-=0.3")

    // Fade out the animation container after a delay
    .to(".animation-container", {
        duration: 1,
        opacity: 0,
        delay: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            // Hide the animation container and show the main content
            document.querySelector('.animation-container').style.display = 'none';
            
            // Animate the main content sections
            animateMainContent();
        }
    });

    // Function to animate the main content sections
    function animateMainContent() {
        const mainContentTl = gsap.timeline();
        
        // Animate hero section
        mainContentTl.from(".hero-section h1", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        })
        .from(".hero-section p", {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from(".cta-button", {
            duration: 0.6,
            y: 20,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.5");
        
        // Animate feature cards when they come into view
        gsap.from(".feature-card", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".features-section",
                start: "top 80%"
            }
        });
        
        // Animate news cards when they come into view
        gsap.from(".news-card", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".latest-news",
                start: "top 80%"
            }
        });
    }

    // Skip animation if user has already seen it (using localStorage)
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
        // Skip the animation and show the main content directly
        tl.progress(1);
        document.querySelector('.animation-container').style.display = 'none';
        animateMainContent();
    } else {
        // Set the flag in localStorage
        localStorage.setItem('hasSeenAnimation', 'true');
        
        // Allow users to skip the animation by clicking
        document.querySelector('.animation-container').addEventListener('click', () => {
            tl.progress(1);
            document.querySelector('.animation-container').style.display = 'none';
            animateMainContent();
        });
    }
});