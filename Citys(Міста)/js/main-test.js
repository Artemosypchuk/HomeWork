
// var score = 0;
// var ask = +prompt("Пропонуємо пройти цей тест"+" 1-так, 2-ні.");
// if (ask == 1) {var name = prompt("Введіть ваше ім’я", "Моє ім’я");
//                 var qwestion1 = +prompt ("Профессор лёг спать в 8 часов, а встал в 9 часов.Сколько часов проспал профессор?")
//              if  (qwestion1 == 1){++ score};
//              var qwestion2 = +prompt ("На двух руках 10 пальцев. Сколько пальцев на 10?")
//              if  (qwestion2 == 50){++ score};
//              var qwestion3 = +prompt ("Сколько цифр в дюжине?")
//              if  (qwestion3 == 2){++ score};
//              var qwestion4 = +prompt ("Сколько нужно сделать запилов, чтобы распилить  бревно на 12 частей?")
//              if  (qwestion4 == 11){++ score};
//              var qwestion5 = +prompt ("Врач сделал три укола в интервале 30 минут. Сколько времени он затратил?")
//              if  (qwestion5 == 30){++ score};
//              var qwestion6 = +prompt ("Сколько цифр 9 в интервале 1 100?")
//              if  (qwestion6 == 1){++ score};
//              var qwestion7 = +prompt ("У пастуха было 30 овец. Все кроме одной разбежались. Сколько овец осталось?")
//              if  (qwestion7 == 1){++ score};
// }
// else {alert("Нажаль =(");}
// if (score == 7){document.body.style.backgroundColor = "pink";
//                 document.body.style.backgroundImage= "url('img/Genius.gif')";
//                 document.getElementById('h1').innerText = 'Ты Гений ' + name;
//                 document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 6){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/Erudit.gif')";
//             document.getElementById('h1').innerText = 'Ты Ерудит ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 5){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/Normal.gif')";
//             document.getElementById('h1').innerText = 'Ты Нормальный ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 4){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/hz.gif')";
//             document.getElementById('h1').innerText = 'Ты Посредственность ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 3){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/hz2.gif')";
//             document.getElementById('h1').innerText = 'Чуть хуже посредственности ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 2){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/wtf.gif')";
//             document.getElementById('h1').innerText = 'Ты отвечаешь на угад? ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 1){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/lol.gif')";
//             document.getElementById('h1').innerText = 'Ты прикалываешься? ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
// else if (score == 0){document.body.style.backgroundColor = "pink";
//             document.body.style.backgroundImage= "url('img/OMG.gif')";
//             document.getElementById('h1').innerText = 'Ты дно! ' + name;
//             document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}


//---------------------------------------------------------------------------

//перевірити чи дівчина підходить до модельного агенства? Якщо її ріст від 170 до 185 і вік від 16-25 років ця дівчина підходить: якщо ні то не підходить, врахувати що користувач може вказати не вірні данні.
//Запитати в корист вік, вивести знак горскопу під яким він народився.

// var name = prompt("Введіть ваше ім’я");
// var age = prompt ("Введіть ваш вік");
// var hight = prompt("Введіть ваш зріст");

// if (age >= 16 && age <= 25 && hight >= 170 && hight <= 185){alert( name + "Ви підходите для моделі");}
// else if (age <= 16 || age >= 25 || hight <= 170 || hight >= 185){alert( name + "Ви нам не підходите");}
// else {alert("Введіть вірне значення")};


//-------------------------------------------------------------------------------------


// var name = prompt("Введіть ваше ім’я");
// var age = prompt ("Введіть ваш вік");
// if (age % 12 ==0 ){ alert ("Ви Мавпа");}
// else if(age % 12 == 1){alert("Ви Півень");}
// else if(age % 12 == 2){alert("Собака");}
// else if(age % 12 == 3){alert("Свиня");}
// else if(age % 12 == 4){alert("Ви миша");}
// else if(age % 12 == 5){alert("Ви Бик");}
// else if(age % 12 == 6){alert("Ви Тигр");}
// else if(age % 12 == 7){alert("Ви Кіт");}
// else if(age % 12 == 8){alert("Ви Дракон");}
// else if(age % 12 == 9){alert("Ви Змія");}
// else if(age % 12 == 10){alert("Ви Кінь");}
// else if(age % 12 == 11){alert("Ви Коза");}
// else {alert("Ви ввели невірні дані")};

// var name = prompt("Введіть ваше ім’я");
// var age = parseInt(prompt("Введіть ваш вік"));
// switch (age % 12) {
//     case 0: {
//         alert("Ви Мавпа");
//         document.body.style.backgroundImage = "url(https://img.depo.ua/745xX/May2017/240504.jpg)"; break;
//     }
//     case 1: {alert("Ви Півень");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 2: {alert("Собака");
//      document.body.style.backgroundImage = "url(https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080)"; break; }
//     case 3: {alert("Свиня"); 
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 4: {alert("Ви миша");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 5: {alert("Ви Бик");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 6: {alert("Ви Тигр");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 7: {alert("Ви Кіт");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 8: {alert("Ви Дракон");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 9: {alert("Ви Змія");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 10: {alert("Ви Кінь");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//     case 11: {alert("Ви Коза");
//      document.body.style.backgroundImage = "url(https://volyn.com.ua/content/thumbs/750x500/1/65/elllc4-210741a43ad2688a86391907a1b33651.jpg)"; break; }
//      default : {alert("Введіть коректне значення")}
// }
//Оператор свічь (sweetch) - Багаторазові перевірки!
// var day = parseInt(prompt ("Введіть число"));
// switch(day){
//     case 1:{alert("Понеділок");break}
//     case 2:{alert("Вівторок");break}
//     case 3:{alert("Середа");break}
//     case 4:{alert("Четвер");break}
//     case 5:{alert("П’ятниця");break}
//     case 6:{alert("Субота");break}
//     case 7:{alert("Неділя");break}
//     default:{alert("Вставте число від 1-7")};
// }

var country=prompt("Введіть країну зі списку:\nУкріїна\nРосія\nБілорусь\nПольща\nРумунія");
var ua=document.getElementById("blok1");
var ru=document.getElementById("blok2");
var by=document.getElementById("blok3");
var pl=document.getElementById("blok4");
var rom=document.getElementById("blok5");
switch (country){
    case"Україна" : case "укрїна" : case "УКРАЇНА":{
        ua.style.display="block"; break;
    }
    case"Росія" : case "росія" : case "РОСІЯ":{
        ru.style.display="block"; break;
    }
    case"Білорусь" : case "білорусь" : case "БІЛОРУСЬ":{
        by.style.display="block"; break;
    }
    case"Польща" : case "польща" : case "ПОЛЬЩА":{
        pl.style.display="block"; break;
    }
    case"Румунія" : case "румунія" : case "РУМУНІЯ":{
        rom.style.display="block"; break;
    }
}