document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const row = wrapper.querySelector('.image-row');
        const leftBtn = wrapper.querySelector('.scroll-btn.left');
        const rightBtn = wrapper.querySelector('.scroll-btn.right');

        // --- 1. HIDE ARROWS IF CONTENT DOESN'T OVERFLOW ---
        function checkOverflow() {
            // Check if the total width of products exceeds the visible container width
            const hasOverflow = row.scrollWidth > row.clientWidth;
            
            if (!hasOverflow) {
                if (leftBtn) leftBtn.style.display = 'none';
                if (rightBtn) rightBtn.style.display = 'none';
            } else {
                if (leftBtn) leftBtn.style.display = 'block';
                if (rightBtn) rightBtn.style.display = 'block';
            }
        }

        // Run check on load
        checkOverflow();

        // Re-check if the user resizes their browser window
        window.addEventListener('resize', checkOverflow);

        // --- 2. ARROW CLICK SCROLLING ---
        if (leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                row.scrollBy({ left: -300, behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', () => {
                row.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }

        // --- MOUSE DRAG TO SCROLL ---
        let isDown = false;
        let startX;
        let scrollLeft;

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            row.classList.add('is-dragging'); // Disable smooth scroll while dragging
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
            row.classList.remove('is-dragging');
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
            row.classList.remove('is-dragging');
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 1.5; // Smooth 1:1 feel
            row.scrollLeft = scrollLeft - walk;
        });
    });
});