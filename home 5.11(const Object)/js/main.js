// var app = document.querySelector('.app')
// var dropdown_label = document.querySelector('.dropdown_label')
// var dropdown_menu = document.querySelector('.dropdown_menu')
// var li = document.querySelectorAll('li')
// var show = false;

// dropdown_label.addEventListener('click', hide)
// dropdown_menu.addEventListener('click', hide)

// function hide() {
//     if (show == false) {
//         dropdown_menu.style.display = 'block';
//         show = true;
//     } else {
//         dropdown_menu.style.display = 'none';
//         show = false;
//     }
// }
// for (var i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', function () {
//         var liText = this.innerText;
//         dropdown_label.innerText = liText;
//     })
// }
//----------------------------------------------------------------------------------------------------------


class Dropdown{
    constructor(selector,options){
        this.el=document.querySelector(selector);
        this.items=options.items;
        this.el.querySelector('.dropdown_label').textContent=this.items[0].label;
        this.el.addEventListener('click',event=>{
            if(event.target.classList.contains('dropdown_label')){
                if(this.el.classList.contains('open')){
                    this.hide();
                }
                else{
                    this.show();
                }
            }
            else if(event.target.tagName.toLowerCase()==='li'){
                this.select(event.target.dataset.id);
            }
        })
        const itemsHTML=this.items.map(i=>{
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join('<hr>')
        this.el.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin',itemsHTML)
    }
    select(id){
        const item=this.items.find(i=>i.id===id);
        this.el.querySelector('.dropdown_label').textContent=item.label;
        this.hide();
    }
    show(){
        this.el.classList.add('open');
    }
    hide(){
        this.el.classList.remove('open')
    }
}

const dropdown = new Dropdown('#dropdown',{
    items:[
        {label:'Київ', id:'kv'},
        {label:'Тернопіль', id:'tp'},
        {label:'Рівне', id:'rv'},
        {label:'Донецьк', id:'dn'},
    ]
})













//------------------------------------------------------------------------------------------------------------
// class RootElement {
//     constructor(tagName = 'div') {
//         this.el = document.createElement(tagName);
//     }
//     show() {
//         this.el.style.opacity = '1'
//     }
//     hide() {
//         this.el.style.opacity = '0'
//     }
//     addEl() {
//         document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.el)
//     }
//     shadow() {
//         this.el.style.boxShadow = '5px 5px 10px black'
//     }

// }

// class Box extends RootElement {
//     constructor(color, size, tagName) {
//         super(tagName);
//         this.color = color;
//         this.size = size;
//     }
//     create() {
//         this.el.style.backgroundColor = this.color;
//         this.el.style.width = this.el.style.height = `${this.size}px`;
//         this.addEl();
//         this.shadow();
//         return this;
//     }


// }
// class Ball extends RootElement {
//     constructor(color, size, tagName, borderRadius) {
//         super(tagName);
//         this.color = color;
//         this.size = size;
//         this.borderRadius = borderRadius;
//     }
//     create() {
//         this.el.style.backgroundColor = this.color;
//         this.el.style.width = this.el.style.height = `${this.size}px`;
//         this.el.style.borderRadius = `${this.borderRadius}%`;
//         this.addEl();
//         this.shadow();

//         return this;
//     }


// }
// const redBox = new Box('red', 200, 'div').create();
// const blueBox = new Box('blue', 150, 'div').create();
// const ball = new Ball('pink', 150, 'div', 50).create();

// ball.el.addEventListener('mouseenter', function () {
//     ball.hide()
// })
// ball.el.addEventListener('mouseleave', function () {
//     ball.show()
// })








