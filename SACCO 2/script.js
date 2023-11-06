const animatedText = document.querySelector('.home h1');
const text = "Welcome to Your Sacco";
let index = 0;

function animateText() {
    if (index < text.length) {
        animatedText.textContent += text.charAt(index);
        index++;
        setTimeout(animateText, 100);
    }
}

animateText();
