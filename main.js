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

    // GitHub Release Auto-Download
    const updateDownloadLink = async () => {
        const downloadBtn = document.querySelector('.download-btn');
        const downloadMeta = document.querySelector('.download-meta');
        
        if (!downloadBtn) return;

        try {
            const response = await fetch('https://api.github.com/repos/STMZ-AI/STMZ-App/releases/latest');
            const data = await response.json();
            
            // Find the Windows installer (.exe)
            const asset = data.assets.find(a => a.name.endsWith('.exe'));
            
            if (asset) {
                downloadBtn.href = asset.browser_download_url;
                if (downloadMeta) {
                    downloadMeta.textContent = `Version ${data.tag_name} | Licensed under MIT`;
                }
            }
        } catch (error) {
            console.error('Failed to fetch latest release:', error);
            // Fallback to the releases page if API fails
            downloadBtn.href = 'https://github.com/STMZ-AI/STMZ-App/releases';
        }
    };

    updateDownloadLink();
});
