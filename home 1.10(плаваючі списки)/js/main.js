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
// var clickImg = document.querySelectorAll('.img_block img');
// var mainImg = document.querySelector('#mainImg');
// var mainSrc = [];
// var z = 0;
// var index = 0;
// var p=document.querySelector('.text');
// var line=document.querySelector('.img_line');
// for (var i = 0; i < clickImg.length; i++) {
//     mainSrc[i] = clickImg[i].getAttribute('src');

// }

// function myFunction(index) {
//     for (var n = 0; n < clickImg.length; n++) {
//         clickImg[n].style.opacity = "0.5";
//     }
//     mainImg.setAttribute('src', mainSrc[index]);
//     for (var n = 0; n < clickImg.length; n++) {
//         var m = clickImg[n].getAttribute('src');
//         var b = mainImg.getAttribute('src');
//         if (m == b) {
//             clickImg[n].style.opacity = "1";
//         }
//         p.innerHTML= index+1+'/'+clickImg.length;
//     }
//     z = index;


// }
// function leftClick() {
//     getPrev()
//     z--;
//     if (z < 0) {
//         z = clickImg.length - 1;
//     }
//     for (var n = 0; n < clickImg.length; n++) {
//         clickImg[n].style.opacity = "0.5";
//     }
//     mainImg.setAttribute('src', mainSrc[z]);
//     for (var n = 0; n < clickImg.length; n++) {
//         var m = clickImg[n].getAttribute('src');
//         var b = mainImg.getAttribute('src');
//         if (m == b) {
//             clickImg[n].style.opacity = "1";
//         }
//     }
//     p.innerHTML= z+1+'/'+clickImg.length;
// }

// function rightClick() {
//     getNext();
//     if (z == clickImg.length) {
//         z = 0;
//     }
//     for (var n = 0; n < clickImg.length; n++) {
//         clickImg[n].style.opacity = "0.5";
//     }
//     mainImg.setAttribute('src', mainSrc[z]);
//     z++;
//     for (var n = 0; n < clickImg.length; n++) {
//         var m = clickImg[n].getAttribute('src');
//         var b = mainImg.getAttribute('src');
//         if (m == b) {
//             clickImg[n].style.opacity = "1";
//         }


//     }
//     p.innerHTML= z+'/'+clickImg.length;
// }
// var b=0;
// function getNext() {
//     b-=78.75;
//     line.style.left=b+'px';
//     if(b<=-1201.25){
//         b=78.75;
//     }
// }
// function getPrev() {
//     b+=78.75;
//     line.style.left=b+'px';

//     if(b>=0){
//         b=-1360;
//     }
// }
//----------------------------------------------------------------------------------



// //var n = true;
// var text = document.querySelector('.text');
// var textInner = document.querySelector('input');
// var button = document.querySelector('button');
// var p = document.querySelectorAll('p');
// /*
// text.addEventListener('click', function () {
//     if (n == true) {
//         text.textContent = 'click';
//         n = false;
//         document.body.style.backgroundColor = "pink";
//     }
//     else {
//         text.textContent = 'Hello';
//         n = true;
//         document.body.style.backgroundColor = "lightblue";
//     }
// })*/
// button.addEventListener('click', function () {
//     text.textContent = textInner.value;
// })
// for (var n = 0; n < p.length; n++) {
//     p[n].addEventListener('click', function () {
//         this.style.color = 'green';
//     })
// }
var mainUl = document.querySelectorAll('ul');
var mainLi = document.querySelectorAll('li');
var block_2 = document.querySelector('.block_2');
var block_3 = document.querySelector('.block_3');
var block_1 = document.querySelector('.block_1');


var body = document.querySelector('body');
var menu = document.querySelector('.menu');
var n=false;

for (i = 0; i < mainUl.length; i++) {
    mainUl[i].addEventListener('click', function () {
    if (n == false) {
        this.style.height="275px";
        this.style.color="rgba(160, 160, 245, 0.623)";
        this.style.backgroundColor="rgb(102, 31, 31)";
           n=true;
           }

    else{
            this.style.height="48px";
           this.style.color="azure";
            this.style.backgroundColor="brown"
            n=false;
}
})
}
for (i = 0; i < mainLi.length; i++) {
    mainLi[i].addEventListener('mouseenter', function () {
           this.style.backgroundColor="rgb(250, 168, 168)";
           this.style.color="rgba(160, 0, 245, 1)";
           this.style.marginLeft="50px";
           
 })
    mainLi[i].addEventListener('mouseleave', function () {
        this.style.backgroundColor="rgb(255, 119, 119)";
        this.style.color="azure";
        this.style.marginLeft="0px";

 }
    )
    mainLi[6].addEventListener('click',function () {
        
            
        block_1.style.bottom="50px";
        menu.style.opacity="0.2";
        body.style.backgroundColor="rgba(0, 0, 0, 0.8)";
    
})
    block_1.addEventListener('click', function(){
    
    block_1.style.bottom="2000px";
    
    
    body.style.backgroundColor="pink";
    menu.style.opacity="1";
})
    mainLi[7].addEventListener('click',function () {
        
            
            block_2.style.bottom="50px";
            menu.style.opacity="0.2";
            body.style.backgroundColor="rgba(0, 0, 0, 0.8)";
        
    })
    block_2.addEventListener('click', function(){
        
        block_2.style.bottom="2000px";
        
        
        body.style.backgroundColor="pink";
        menu.style.opacity="1";
    })
    mainLi[8].addEventListener('click',function () {
        
        block_3.style.bottom="50px";
        menu.style.opacity="0.2";
        body.style.backgroundColor="rgba(0, 0, 0, 0.8)";
    
})
block_3.addEventListener('click', function(){
    block_3.style.bottom="2000px";
    
    body.style.backgroundColor="pink";
    menu.style.opacity="1";
})
}










