


let divHead = document.getElementById('head');

function changeElColors() {
    let letters = 'ABCDEF0123456789';
    let charColor = '#';
    for(let i = 0; i < 6; i++) {
        charColor += letters[Math.floor(Math.random() * 16)]
    }
    return divHead.style.color = charColor;
}


window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        changeElColors();
    }, 2000);
});// Funziona perfettamente