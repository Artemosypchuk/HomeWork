// var img=[];
// img[0]="<img src='img/1.png'>"
// img[1]="<img src='img/2.png'>"
// img[2]="<img src='img/3.png'>"
// img[3]="<img src='img/4.png'>"
// img[4]="<img src='img/5.png'>"
// img[5]="<img src='img/6.png'>"

// var result=[];


// function myFunction(a,b){
//     a=5;
//     b=10;
//     var sum= a*b;

//    document.write(sum+'<br>')
// }
// myFunction(5,8);
// myFunction(33,8);
// myFunction(23,8);
// myFunction(4,80);
// myFunction(4,12);


// var p=document.qwerySelector('.class');
// var h1=document.qwerySelector('h1');
// var n=document.qwerySelectorAll('p')

// function editColor(a,color){
//     a.style.color=color;
// }

//    var  p=document.querySelector('#text');
//    function showFormat(view) {
//        p.className=view + ' '+'col-12';
//    }
var clickImg = document.querySelectorAll('.img_block img');
var mainImg = document.querySelector('#mainImg');
var mainSrc = [];
var z = 0;
var index = 0;
var p=document.querySelector('.text');
var line=document.querySelector('.img_line');
for (var i = 0; i < clickImg.length; i++) {
    mainSrc[i] = clickImg[i].getAttribute('src');

}

function myFunction(index) {
    for (var n = 0; n < clickImg.length; n++) {
        clickImg[n].style.opacity = "0.5";
    }
    mainImg.setAttribute('src', mainSrc[index]);
    for (var n = 0; n < clickImg.length; n++) {
        var m = clickImg[n].getAttribute('src');
        var b = mainImg.getAttribute('src');
        if (m == b) {
            clickImg[n].style.opacity = "1";
        }
        p.innerHTML= index+1+'/'+clickImg.length;
    }
    z = index;
    
    
}
function leftClick() {
    getPrev()
    z--;
    if (z < 0) {
        z = clickImg.length - 1;
    }
    for (var n = 0; n < clickImg.length; n++) {
        clickImg[n].style.opacity = "0.5";
    }
    mainImg.setAttribute('src', mainSrc[z]);
    for (var n = 0; n < clickImg.length; n++) {
        var m = clickImg[n].getAttribute('src');
        var b = mainImg.getAttribute('src');
        if (m == b) {
            clickImg[n].style.opacity = "1";
        }
    }
    p.innerHTML= z+1+'/'+clickImg.length;
}

function rightClick() {
    getNext();
    if (z == clickImg.length) {
        z = 0;
    }
    for (var n = 0; n < clickImg.length; n++) {
        clickImg[n].style.opacity = "0.5";
    }
    mainImg.setAttribute('src', mainSrc[z]);
    z++;
    for (var n = 0; n < clickImg.length; n++) {
        var m = clickImg[n].getAttribute('src');
        var b = mainImg.getAttribute('src');
        if (m == b) {
            clickImg[n].style.opacity = "1";
        }
        

    }
    p.innerHTML= z+'/'+clickImg.length;
}
var b=0;
function getNext() {
    b-=78.75;
    line.style.left=b+'px';
    if(b<=-1201.25){
        b=78.75;
    }
}
function getPrev() {
    b+=78.75;
    line.style.left=b+'px';
    
    if(b>=0){
        b=-1360;
    }
}
setInterval('rightClick()',2000)