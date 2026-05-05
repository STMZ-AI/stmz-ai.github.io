document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const tl = gsap.timeline();

    tl.to('.reveal-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        startAt: { y: 40 }
    });

    // Feature Cards Scroll Animation
    gsap.to('.feature-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        startAt: { y: 30 },
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
        }
    });

    // Section Titles Animation
    gsap.to('.section-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        startAt: { y: 20 },
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 90%',
        }
    });

    // Download Card Animation
    gsap.to('.download-card', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        startAt: { y: 50 },
        scrollTrigger: {
            trigger: '.download-section',
            start: 'top 80%',
        }
    });

    // Navbar Visibility ScrollTrigger
    ScrollTrigger.create({
        trigger: '.features',
        start: 'top 100px',
        onEnter: () => document.querySelector('.navbar').classList.add('visible'),
        onLeaveBack: () => document.querySelector('.navbar').classList.remove('visible'),
    });

    // Download Button Interaction
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real scenario, this would trigger the actual download
            alert('The STMZ AI Installer will start downloading shortly.');
        });
    }
});
