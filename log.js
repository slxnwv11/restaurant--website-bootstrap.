document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    const showThreshold = 150;
    const toggleBtn = () => {
        if (window.scrollY > showThreshold) {
            backToTopBtn.classList.remove('d-none');
            backToTopBtn.classList.add('d-block');
        } else {
            backToTopBtn.classList.remove('d-block');
            backToTopBtn.classList.add('d-none');
        }
    };

    toggleBtn();
    window.addEventListener('scroll', toggleBtn, { passive: true });

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        backToTopBtn.blur();
    });

    backToTopBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            backToTopBtn.click();
        }
    });
});