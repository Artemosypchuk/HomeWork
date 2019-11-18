var start = document.querySelector('.start');
var span = document.querySelector('span');
var div1 = document.querySelector('.div1')
var div2 = document.querySelector('.div2')
var div3 = document.querySelector('.div3')
var body = document.querySelector('body')
var input = document.querySelector('input')
var result = document.querySelector('.result')
var score = document.querySelector('.score')
var repit = document.querySelector('.repit')
score.value = 0;

start.addEventListener('click', function () {
    div1.style.backgroundColor = 'pink';
    body.style.backgroundColor = 'pink';
    start.style.display = 'none';
    input.style.display = 'none';
    div3.style.width = '10px';
    div3.style.height = '10px';
    div3.style.backgroundColor = 'red';
    var sI = setInterval('scrollTimer()', 1000);
    setInterval(function scrollTimer() {
        span.innerHTML = input.value + " " + 'сек';
        if (input.value > 5) {
            span.style.color = 'black'
            scroll(input.value);
        } else if (input.value > 0) {
            span.style.color = 'red'
            scroll(input.value);
        } else if (input.value == 0) {
            result.style.display = 'block'
            score.innerHTML = score.value;
            div3.style.display = 'none';
            repit.style.display = 'block';
        }
    }, 1000);
    clearInterval(sI);

    function scroll(x) {
        input.value = x - 1;
        var ran = Math.floor(Math.random() * 290)
        var ran2 = Math.floor(Math.random() * 290)
        div3.style.top = ran + 'px';
        div3.style.left = ran2 + 'px';
    }
    event.stopPropagation();
}, false)
div3.addEventListener('click', function () {
    score.value = score.value + 1;
    event.stopPropagation();
}, false)
repit.addEventListener('click', function () {
    start.style.display = 'block';
    body.style.backgroundColor = 'tomato';
    div1.style.backgroundColor = 'white';
    input.style.display = 'block';
    div3.style.display = 'block';
    div3.style.width = '100px';
    div3.style.height = '100px';
    div3.style.backgroundColor = 'pink';
    this.style.display = 'none';
    event.stopPropagation();

}, false)