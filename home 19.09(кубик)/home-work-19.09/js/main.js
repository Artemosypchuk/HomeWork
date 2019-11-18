var img=[];
img[0]="<img src='img/1.png'></img>"
img[1]="<img src='img/2.png'></img>"
img[2]="<img src='img/3.png'></img>"
img[3]="<img src='img/4.png'></img>"
img[4]="<img src='img/5.png'></img>"
img[5]="<img src='img/6.png'></img>"

var result=[];
var i=0;

function myFunction(){
    if( i>=0){i++}
    var rand=img[(Math.floor(Math.random() * img.length))]
document.getElementById('block').innerHTML= rand;
result.push(rand);
document.getElementById('block2').innerHTML="<p>Ти кинув:</p>"+i+ result.join("  ");
}
