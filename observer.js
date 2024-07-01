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
const showBtn = document.getElementById('showBtn');
const resizableDiv = document.getElementById('menu');

const minWindowSize = 768;

var count = 0;

function checkWindowSize() {
    if (window.innerWidth > minWindowSize) {
        resizableDiv.style.display = 'none';
    }
}

window.onload = checkWindowSize;

window.addEventListener('resize', () => {
    checkWindowSize();
});

showBtn.addEventListener('click', () => {
    count++;
    if (count == 2) { resizableDiv.style.display = 'none'; count = 0; }
    else { resizableDiv.style.display = 'block'; }

});

document.getElementById('game').addEventListener('mousemove', function(e) {
    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;
    var x = (e.pageX - w) / 10;
    var y = (e.pageY - h) / 10;
    document.getElementById('object').style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
  });