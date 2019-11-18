var save = document.querySelector('.save');
var clear = document.querySelector('.clear');
var tips = document.querySelector('.tips');
var input = document.querySelector('input');
var text = document.querySelector('.text');
var list=document.querySelector('#list');
var li = [];
var ico = document.querySelector('fa-trash-alt')
var num = 0;
var line = false;

function addText(){
    // text.insertAdjacentHTML("afterbegin",'' )
    
    num ++;
    var lists=document.createElement('li');
    lists.textContent=+ico+num + ' ' + input.value;
    // var spans=document.createElement('span')
    list.insertAdjacentElement('beforeend',lists);
   input.value = null;
   this.addEventListener('mouseover',show)
   li.push(lists.textContent)
}
function clearText(){
    list.innerHTML = "";
    num = 0;
}
function through() {
    
    if(line == false){
    this.style.textDecoration = 'line-through';
    line = true;
} 
else if(line == true){
    this.style.textDecoration = 'none';
    line = false;
}
}
function show() {
    ico.style.diplay = 'block';
}

list.addEventListener('click',through)
clear.addEventListener('click',clearText)
save.addEventListener('click',addText);
