const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.accordion__content');
        const isActive = accordion.classList.contains('active');
        accordions.forEach(acc => {
            const accContent = acc.querySelector('.accordion__content');
            if (acc !== accordion) {
                acc.classList.remove('active');
                accContent.style.maxHeight = null;
                accContent.style.opacity = '0';
            }
        });
        if (!isActive) {
            accordion.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            requestAnimationFrame(() => {
                content.style.opacity = '1';
            });
        } else {
            content.style.maxHeight = null;
            content.style.opacity = '0';
        }
    });
});