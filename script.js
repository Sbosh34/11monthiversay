document.addEventListener('DOMContentLoaded', function() {
    // Background music for index.html
    const music = document.getElementById('backgroundMusic');
    if (music) {
        music.volume = 0.5;
    }

    // Surprise button for index.html
    const surpriseButton = document.getElementById('surpriseButton');
    if (surpriseButton) {
        surpriseButton.addEventListener('click', function() {
            document.getElementById('hiddenMessage').style.display = 'block';
        });
    }

    // Floating hearts for special-moments.html
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10s
        const heartsContainer = document.querySelector('.hearts');
        if (heartsContainer) {
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 10000); // Remove after 10s
        }
    }

    if (document.querySelector('.hearts')) {
        setInterval(createHeart, 500); // New heart every 500ms
    }
});