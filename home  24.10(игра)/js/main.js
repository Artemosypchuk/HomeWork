// var start = document.querySelector('.start');
// var span = document.querySelector('span');
// var div1 = document.querySelector('.div1')
// var div2 = document.querySelector('.div2')
// var div3 = document.querySelector('.div3')
// var body = document.querySelector('body')
// var input = document.querySelector('input')
// var result = document.querySelector('.result')
// var score = document.querySelector('.score')
// var repit = document.querySelector('.repit')
// score.value = 0;

// start.addEventListener('click', function () {
//     div1.style.backgroundColor = 'pink';
//     body.style.backgroundColor = 'pink';
//     start.style.display = 'none';
//     input.style.display = 'none';
//     div3.style.width = '10px';
//     div3.style.height = '10px';
//     div3.style.backgroundColor = 'red';
//     var sI = setInterval('scrollTimer()', 1000);
//     setInterval(function scrollTimer() {
//         span.innerHTML = input.value + " " + 'сек';
//         if (input.value > 5) {
//             span.style.color = 'black'
//             scroll(input.value);
//         } else if (input.value > 0) {
//             span.style.color = 'red'
//             scroll(input.value);
//         } else if (input.value == 0) {
//             result.style.display = 'block'
//             score.innerHTML = score.value;
//             div3.style.display = 'none';
//             repit.style.display = 'block';

//         }
//     }, 1000);
//     clearInterval(sI);
//     function scroll(x) {
//         input.value = x - 1;
//         var ran = Math.floor(Math.random() * 290)
//         var ran2 = Math.floor(Math.random() * 290)
//         div3.style.top = ran + 'px';
//         div3.style.left = ran2 + 'px';
//     }
//     event.stopPropagation();
// }, false)
// div3.addEventListener('click', function () {
//     score.value = score.value + 1;
//     event.stopPropagation();
// }, false)
// repit.addEventListener('click', function () {
//     start.style.display = 'block';
//     body.style.backgroundColor = 'tomato';
//     div1.style.backgroundColor = 'white';
//     input.style.display = 'block';
//     div3.style.display = 'block';
//     div3.style.width = '100px';
//     div3.style.height = '100px';
//     div3.style.backgroundColor = 'pink';
//     this.style.display = 'none';
//     event.stopPropagation();

// }, false)
// function renderBox() {
//     var box = document.createElement('div');
//     box.style.width = box.style.height = '25px';
//     box.style.backgroundColor = 'black';
//     game.insertAdjacentElement('afterbegin',box);
// }
//-------------------другий варіант гри------------------------------------------------
//----------оголошуємо змінні
var button = document.querySelector('.start');
var game = document.querySelector('.div2');
var div3 = document.querySelector('.div3')
var time = document.querySelector('span');
var input = document.querySelector('input')
var score = 0;
var repit = document.querySelector('.repit');
var result = document.querySelector('.result')
var li = document.querySelector('.score');

button.addEventListener('click', startGame)
repit.addEventListener('click', reset);

function startGame() { // запускаємо нашу гру
    score = 0;
    input.style.display = 'none';
    time.textContent = input.value;
    button.style.display = 'none';
    game.style.backgroundColor = 'white';
    div3.style.display = 'none';
    var interval = setInterval(function () { // формуємо інтервал
        var timeScore = parseFloat(time.textContent);
        if (timeScore <= 0) {
            endGame();
            clearInterval(interval);
        } else {
            time.textContent = (timeScore - 0.1).toFixed(1);
            if (timeScore <= 5) {
                time.style.color = 'red';
            } else {
                time.style.color = 'black'
            }
        }
    }, 100)
    renderBox();
}

function renderBox() { //формуємо наш бокс
    game.innerHTML = '';
    var boxSize = getRandom(25, 150)
    var box = document.createElement('div');
    var gameSize = game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;
    var newColor = [makeColor(), makeColor(), makeColor(), makeColor(), makeColor()];
    box.style.width = box.style.height = boxSize + 'px';
    box.style.background = '-webkit-linear-gradient(top, ' + newColor[0] + ' 0%, ' + newColor[1] + ' 50%, ' + newColor[2] + ' 51%, ' + newColor[3] + ' 71%, ' + newColor[4] + ' 100%)';
    box.style.boxShadow = newColor[0]+'  5px 5px 10px 5px';
    box.style.position = 'absolute';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.left = '50px';
    box.style.cursor = 'pointer';
    game.insertAdjacentElement('afterbegin', box);
    box.addEventListener('click', clickBox);
}

function clickBox() {// збільшуємо результат
    score++;
    renderBox();
}

function getRandom(min, max) {// створюємо рандомне число
    return Math.floor(Math.random() * (max - min) + min)
}

function endGame() { // по закінченню гри виводимо результат
    game.innerHTML = '';
    repit.style.display = 'block'
    input.style.display = 'block';
    result.style.display = 'block';
    li.innerHTML = score + ' ' + 'нажатий' + ' ' + 'за' + ' ' + input.value + ' ' + 'сек.';
}

function reset() { // відновлюємо наше стартове вікно
    repit.style.display = 'none'
    input.style.display = 'block';
    result.style.display = 'none';
    button.style.display = 'block';
    div3.style.display = 'block'
}

function makeColor() {// створюємо рандомний колір
    var arr = [];
    for (i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 255);
        arr.push(num);
    }
    var newRgba = 'rgba(' + arr[0] + ',' + arr[1] + ',' + arr[2] + '1)';
    return newRgba;
}
