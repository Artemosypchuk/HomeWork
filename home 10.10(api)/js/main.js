var data;
var img = [];
img[0] = 'https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpeg?region=8%2C0%2C1543%2C868&width=768';
img[1] = 'https://kremlinstore.ru/wa-data/public/shop/img/r2d2-robot-star-wars-droid-interactive-wifi-rc[1].jpg'
img[2] = 'https://images.halloweencostumes.com/products/10008/2-1-99300/authentic-darth-vader-costume-alt14.jpg'
var info = document.querySelectorAll('li');

function showRequest(x) {
    var luk = new XMLHttpRequest();
    var base = [];
    base[0] = 'https://swapi.co/api/people/13/';
    base[1] = 'https://swapi.co/api/people/3/';
    base[2] = 'https://swapi.co/api/people/4/';
    luk.open('Get', base[x], true);
    luk.send();
    luk.onreadystatechange = function () {
        if (luk.readyState != 4)
            return;
        data = JSON.parse(luk.responseText);
        show(data);
    }
}

function show(data) {
    var img_block = document.querySelector('.img_block');
    var person = document.querySelector('.person');
    var ul = document.querySelector('ul')
    for (key in data) {
        person.innerHTML = (data['name']);
        if (data['name'] == 'Chewbacca') {
            img_block.innerHTML = ' <img src="' + img[0] + '" alt="">';
            person.style.color = (data['eye_color']);
            info[0].innerHTML = "Зріст:" + " " + data['height'] + "см.";
            info[1].innerHTML = "Вага:" + " " + data['mass'] + "кг.";
            info[2].innerHTML = "Дата народження:" + " " + data['birth_year'] + ".";
            ul.style.borderColor = (data['eye_color']);
            ul.style.color = (data['eye_color']);
            //(key + '='+data[key]+'<br>');
        } else if (data['name'] == 'R2-D2') {
            img_block.innerHTML = ' <img src="' + img[1] + '" alt="">';
            person.style.color = 'lightblue';
            person.style.color = (data['eye_color']);
            ul.style.color = (data['eye_color']);
            ul.style.borderColor = (data['eye_color']);
            info[0].innerHTML = "Зріст:" + " " + data['height'] + "см.";
            info[1].innerHTML = "Вага:" + " " + data['mass'] + "кг.";
            info[2].innerHTML = "Дата народження:" + " " + data['birth_year'] + ".";
        } else if (data['name'] == 'Darth Vader') {
            img_block.innerHTML = ' <img src="' + img[2] + '" alt="">';
            person.style.color = 'red';
            person.style.color = (data['eye_color']);
            info[0].innerHTML = "Зріст:" + " " + data['height'] + "см.";
            info[1].innerHTML = "Вага:" + " " + data['mass'] + "кг.";
            info[2].innerHTML = "Дата народження:" + " " + data['birth_year'] + ".";
            ul.style.color = (data['eye_color']);
            ul.style.borderColor = (data['eye_color']);
            console.log(key + '==' + data[key]);
        }
    }
}