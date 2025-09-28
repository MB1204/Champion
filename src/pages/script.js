document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter-headline');
    if (typewriterElement) {
        const words = ["METAL ROOFING", "SEAMLESS GUTTERS", "COPPER SYSTEMS"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const typeSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Animated Stats Counter
    const stats = document.querySelectorAll('[data-count]');
    if (stats.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.getAttribute('data-count');
                    let current = 0;
                    const increment = target / 100;

                    const updateCount = () => {
                        if (current < target) {
                            current += increment;
                            el.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            el.innerText = target;
                        }
                    };
                    updateCount();
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => {
            observer.observe(stat);
        });
    }

    // Load Quote Form via Fetch
    const quoteFormContainer = document.getElementById('quote-form-container');
    if (quoteFormContainer) {
        fetch('quote-form.html')
            .then(response => response.text())
            .then(data => {
                quoteFormContainer.innerHTML = data;
                // Re-run form submission logic if needed, but Formspree handles it.
                const form = quoteFormContainer.querySelector('form');
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const formData = new FormData(form);
                    fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    }).then(response => {
                        if (response.ok) {
                            quoteFormContainer.innerHTML = `<div class="form-success-message bg-neutral-900 p-8 rounded-lg text-center"><h3 class="font-montserrat font-black text-2xl text-white">Thanks for your submission!</h3><p class="text-gray-300">Our team will get back to you shortly.</p></div>`;
                        } else {
                            alert('Oops! There was a problem submitting your form.');
                        }
                    });
                });
            });
    }
});