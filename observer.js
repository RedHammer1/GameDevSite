
const isMobile = /iPhone|iPad|iPod|Android|Windows Phone|BlackBerry|Mobile/i.test(navigator.userAgent);


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                entry.target.classList.remove('not-in-view')
            } else {
                entry.target.classList.remove('in-view')
                entry.target.classList.add('not-in-view')
            }
        })
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    },
)

const tags = document.querySelectorAll('.view')

tags.forEach((tag) => {
    observer.observe(tag)
})

const resizableDiv = document.getElementById('menu');

const minWindowSize = 768;

var count = 0;

function checkWindowSize() {
    if (window.innerWidth > minWindowSize) {
        resizableDiv.style.display = 'none';
    }
}

window.onload = checkWindowSize;

const showBtn = document.getElementById('showBtn');
window.addEventListener('resize', () => {
    checkWindowSize();
});

showBtn.addEventListener('click', () => {
    count++;
    if (count == 2) { resizableDiv.style.display = 'none'; count = 0; }
    else { resizableDiv.style.display = 'block'; }

});

var info = document.getElementById("info");
var textBlock = document.getElementById("text-block");
// При наведении курсора на текст 
info.addEventListener("mouseover", function (event) {
    textBlock.style.display = "block";
});
// При уходе курсора с текст 
info.addEventListener("mouseout", function (event) {
    textBlock.style.display = "none";
});
// При перемещении курсора над текст 
info.addEventListener("mousemove", function (event) {
    var offsetX = 10;
    var offsetY = -5;
    // Вычисляем позицию блока с текстом относительно курсора 
    var left = event.pageX + offsetX;
    var top = event.pageY - textBlock.offsetHeight + offsetY;
    // Устанавливаем позицию блока с текстом 
    textBlock.style.left = left + "px";
    textBlock.style.top = top + "px";
}); 