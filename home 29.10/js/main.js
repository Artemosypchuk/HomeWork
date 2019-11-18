var save = document.querySelector('.save');
var clear = document.querySelector('.clear');
var tips = document.querySelector('.tips');
var tipsArea = document.querySelector('.tipsArea');
var x = document.querySelector('.X');
var input = document.querySelector('input');
var list = document.querySelector('#list');
var ul = document.querySelector('ul');
var li = document.querySelector('li')
var span = document.querySelector('span');
var pensil = document.querySelector('.fa-pencil-alt');
var text = document.querySelector('.text')
var num = 0;
var line = false;

    input.addEventListener('keypress', function (KeyPress) {
        if (KeyPress.which === 13) {
            num++;
            var li = document.createElement('li');
            var span = document.createElement('span');
            var icon = document.createElement('i');
            var inputText = this.value;
            this.value = ' ';
            icon.classList.add('fas', 'fa-trash-alt');
            span.append(icon);
            ul.appendChild(li).append(span, num, ' ', inputText);
            span.addEventListener('click', function () {
                this.parentElement.remove();
            })
            li.addEventListener('click', function () {
                if (line == false) {
                    this.style.textDecoration = 'line-through rgba(255, 0, 0, 0.24)';
                    this.style.color = 'grey';
                    line = true;
                } else if (line == true) {
                    this.style.textDecoration = 'unset';
                    this.style.color = 'green';
                    line = false;
                }

            })
        }
})
document.addEventListener('DOMContentLoaded', function () {

var listText = JSON.parse(localStorage.getItem('ListText'));
if(listText!=null){ ul.innerHTML = listText}
const spanall=document.querySelectorAll('span');
const liAll=document.querySelectorAll('li');
for(let i=0; i<spanall.length; i++){
    spanall[i].addEventListener('click', function () {
    this.parentElement.remove();
})
}
for(let i=0; i<spanall.length; i++){
    liAll[i].addEventListener('click', function () {
            if (line == false) {
                            this.style.color = 'grey';
                            this.style.textDecoration = 'line-through rgba(255, 0, 0, 0.24)';
                line = true;
            } else if (line == true) {
                            this.style.color = 'green';
                            this.style.textDecoration = 'unset';
                line = false;
            }
        })
}
})

// for (var i = 0; i < spans.lenth; i++) {
//     spans[i].addEventListener('click', function () {
//         this.parentElement.remove();
//     })
// }
save.addEventListener('click', function () {
    localStorage.setItem('ListText', JSON.stringify(ul.innerHTML))

})
clear.addEventListener('click', function () {
    ul.innerHTML = " ";
    localStorage.removeItem('ListText', ul.innerHTML)
})
pensil.addEventListener('click', function () {
    if (line == false) {
        input.style.top = '-50px'
        line = true;
    } else if (line == true) {
        input.style.top = '3px';
        line = false
    }
})
tips.addEventListener('click', function () {
    tipsArea.style.top = '0px'
})
x.addEventListener('click', function () {
    tipsArea.style.top = '-2000px'
})