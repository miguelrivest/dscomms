let header = document.querySelector("#hero-header");
let words = header.querySelectorAll("span");
let highlights = header.querySelectorAll(".highlight");

if (!Cookies.get('seenAnimation')) {
    window.onload = fadeInHeader;
} else {
    words.forEach((word, index) => {
        word.style.opacity = 1;
    });
    highlights.forEach(word => {
        word.classList.add("text-shadow");
    });
}


function fadeInHeader() {
    Cookies.set('seenAnimation', 'true', { expires: 1 });
    setTimeout(() => {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = 1;
            }, (200 * index));
        });
    }, 500);
    setTimeout(() => {
        highlights.forEach(word => {
            word.classList.add("text-shadow");
        });
    }, 2000);
}