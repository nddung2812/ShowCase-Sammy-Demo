let leftBlind = document.getElementById('blind-left')
let rightBlind = document.getElementById('blind-right')
let sammyTextCtn = document.querySelector('.sammy-shout-wordings-ctn')
let bubbles = document.querySelectorAll('.bubbles span')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    leftBlind.style.left = value * -1.5 +'px';
    rightBlind.style.right = value * -1.5 +'px';
    sammyTextCtn.style.top = value * -0.8 + 500+ 'px';
    Array.from(bubbles).map((bubble, index) => {
        bubble.style.top = value * -0.8 + 'px';
    })
})