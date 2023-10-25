document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', () => playSound(key));
        key.addEventListener('touchstart', () => playSound(key));
    });

    function playSound(target) {
        const note = target.id;
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.currentTime = 0;
        audio.play();
    }

    window.addEventListener('keydown', (event) => {
        const key = document.querySelector(`[data-key="${event.key}"]`);
        if (key) {
            playSound(key);
        }
    });
});
