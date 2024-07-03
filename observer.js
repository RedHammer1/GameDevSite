
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



const minWindowSize = 768;
var count = 0;

const resizableDiv = document.getElementById('menu');

function checkWindowSize() {
    if (window.innerWidth > minWindowSize) {
        resizableDiv.style.display = 'none';
        count = 0;
    }

}

window.onload = checkWindowSize;
const showBtn = document.getElementById('showBtn');

window.addEventListener('resize', () => {
    checkWindowSize();
});

showBtn.addEventListener('click', () => {
    
    count++;
    if (count == 2) { resizableDiv.style.display = 'none'; count = 0 }
    else { resizableDiv.style.display = 'block';  }
    

});














