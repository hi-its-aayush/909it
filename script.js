document.addEventListener('DOMContentLoaded', () => {
    
    // --- Tabs Logic ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all
            tabLinks.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked
            link.classList.add('active');
            const target = link.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // --- Slide-out Panel Logic ---
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-contact');
    const panel = document.getElementById('contact-panel');
    const overlay = document.getElementById('overlay');

    function openPanel() {
        panel.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closePanel() {
        panel.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);
});
