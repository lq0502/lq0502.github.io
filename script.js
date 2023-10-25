document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');
    const audioElements = {};

    keys.forEach(key => {
        key.addEventListener('click', () => playSound(key));
        key.addEventListener('touchstart', () => playSound(key));
    });

    const blackKeyMapping = {
        '2': 'Cc4',
        '3': 'Dd4',
        '5': 'Ff4',
        '6': 'Gg4',
        '7': 'Aa4'
    };

    const whiteKeyMapping = {
        'Q': 'C4',
        'W': 'D4',
        'E': 'E4',
        'R': 'F4',
        'T': 'G4',
        'Y': 'A4',
        'U': 'B4',
        'I': 'C5'
    };

    function preloadAudio(note) {
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.load();
        audioElements[note] = audio;
    }

    // 预加载所有音频
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'Cc4', 'Dd4', 'Ff4', 'Gg4', 'Aa4'];
    notes.forEach(note => preloadAudio(note));

    function playSound(target) {
        const note = target.id;
        const audio = audioElements[note];
        audio.currentTime = 0;
        audio.play();
    }

    window.addEventListener('keydown', (event) => {
        const key = event.code;
        switch (key) {
            case 'KeyQ':
            case 'Keyq':
                // 播放 C4 音符
                playSound(document.getElementById('C4'));
                break;
            case 'Digit2':
                // 播放 C4 音符
                playSound(document.getElementById('Cc4'));
                break;
            case 'KeyW':
            case 'Keyw':
                // 播放 C4 音符
                playSound(document.getElementById('D4'));
                break;
            case 'Digit3':
                // 播放 C4 音符
                playSound(document.getElementById('Dd4'));
                break;
            case 'KeyE':
            case 'Keye':
                // 播放 C4 音符
                playSound(document.getElementById('E4'));
                break;
            case 'KeyR':
            case 'Keyr':
                // 播放 C4 音符
                playSound(document.getElementById('F4'));
                break;
            case 'Digit5':
                // 播放 C4 音符
                playSound(document.getElementById('Ff4'));
                break;
            case 'KeyT':
            case 'Keyt':
                // 播放 C4 音符
                playSound(document.getElementById('G4'));
                break;
            case 'Digit6':
                // 播放 C4 音符
                playSound(document.getElementById('Gg4'));
                break;
            case 'KeyY':
            case 'Keyy':
                // 播放 C4 音符
                playSound(document.getElementById('A4'));
                break;
            case 'Digit7':
                // 播放 C4 音符
                playSound(document.getElementById('Aa4'));
                break;
            case 'KeyU':
            case 'Keyu':
                // 播放 C4 音符
                playSound(document.getElementById('B4'));
                break;
            case 'KeyI':
            case 'Keyi':
                // 播放 C4 音符
                playSound(document.getElementById('C5'));
                break;// 处理其他键位...
        }
    });
});
