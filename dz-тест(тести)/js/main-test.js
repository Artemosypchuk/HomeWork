
var score = 0;
var ask = +prompt("Пропонуємо пройти цей тест"+" 1-так, 2-ні.");
if (ask == 1) {var name = prompt("Введіть ваше ім’я", "Моє ім’я");
                var qwestion1 = +prompt ("Профессор лёг спать в 8 часов, а встал в 9 часов.Сколько часов проспал профессор?")
             if  (qwestion1 == 1){++ score};
             var qwestion2 = +prompt ("На двух руках 10 пальцев. Сколько пальцев на 10?")
             if  (qwestion2 == 50){++ score};
             var qwestion3 = +prompt ("Сколько цифр в дюжине?")
             if  (qwestion3 == 2){++ score};
             var qwestion4 = +prompt ("Сколько нужно сделать запилов, чтобы распилить  бревно на 12 частей?")
             if  (qwestion4 == 11){++ score};
             var qwestion5 = +prompt ("Врач сделал три укола в интервале 30 минут. Сколько времени он затратил?")
             if  (qwestion5 == 30){++ score};
             var qwestion6 = +prompt ("Сколько цифр 9 в интервале 1 100?")
             if  (qwestion6 == 1){++ score};
             var qwestion7 = +prompt ("У пастуха было 30 овец. Все кроме одной разбежались. Сколько овец осталось?")
             if  (qwestion7 == 1){++ score};
}
else {alert("Нажаль =(");}
if (score == 7){document.body.style.backgroundColor = "pink";
                document.body.style.backgroundImage= "url('img/Genius.gif')";
                document.getElementById('h1').innerText = 'Ты Гений ' + name;
                document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 6){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/Erudit.gif')";
            document.getElementById('h1').innerText = 'Ты Ерудит ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 5){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/Normal.gif')";
            document.getElementById('h1').innerText = 'Ты Нормальный ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 4){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/hz.gif')";
            document.getElementById('h1').innerText = 'Ты Посредственность ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 3){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/hz2.gif')";
            document.getElementById('h1').innerText = 'Чуть хуже посредственности ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 2){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/wtf.gif')";
            document.getElementById('h1').innerText = 'Ты отвечаешь на угад? ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 1){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/lol.gif')";
            document.getElementById('h1').innerText = 'Ты прикалываешься? ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}
else if (score == 0){document.body.style.backgroundColor = "pink";
            document.body.style.backgroundImage= "url('img/OMG.gif')";
            document.getElementById('h1').innerText = 'Ты дно! ' + name;
            document.getElementById('h2').innerText = 'Правильных ответов: ' + score;}