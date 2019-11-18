alert("Розкоментуйте ту задачу яку хочете перевірити");

// var day = prompt("Enter a number");
// if (day==1){ alert("Modnay");}    //умовний оператор if ()
// else if (day==2){alert("Thuesday");}
// else if (day==3){alert("Wensday");}
// else if (day==4){alert("Thirthday");}
// else if (day==5){alert("Fridey");}
// else if (day==6){alert("Saturday");}
// else if (day==7){alert("Sunday");}
// else{alert("Enter a number from 1 to 7");}


/////-----ЗАДАЧА 3-----
// var temp = +prompt ("Введіть температуру свого тіла ", "36.6");
// //&& - означає і; || - або
// if (temp <20 || temp >= 46) {alert("Ви ТРУП :("); }
// else if(temp>=20 && temp < 27){alert("Ви у Комі :(");}
// else if(temp>=27 && temp < 36 || temp >=37 && temp <42){alert("ви хворі");}
// else if(temp>=36 && temp < 37){alert("Ви ЗДОРОВІ =)");}
// else if(temp>=42 && temp < 46){alert("Ви Втратили свідомість");}

// else {alert ("Ви не ввели число...");}




//-----ЗАДАЧА 4------
// var value = +prompt("Виберіть операцію", "1-usd;2-uah" );
// if (value == 1){ var summUsd = +prompt("Введіть сумму в долларах");
// var curs = +prompt ("Введіть курс доллара до гривні");
// var resultUa = summUsd * curs;
// alert(resultUa);}
// else if (value == 2){ var summUa = +prompt("Введіть сумму в гривні");
// var curs = +prompt ("Введіть курс гривні до доллара")
// var resultUsd = summUa / curs;
// alert(resultUsd);}

//// ------ЗАДАЧА 5-----
// var gender = prompt("Виберіть стать", "Чоловік - 1, Жінка - 2");
// if (gender == 1){var years = prompt ("Введіть свій вік");
//     (years < 65)? alert("Іди працюй"): alert ("Вітаємо на пенсії");
// }
// else if (gender == 2){var years = prompt ("Введіть свій вік","Розуміємо що не вічливо та все ж");
// (years < 55)? alert("Ідіть ще попрацюйте"): alert ("Вітаємо на пенсії");
// }

////-----ЗАДАЧА 6-----
// var value = +prompt("Виберіть величину для переводу її в Метри", "1-міліметр, 2-сантиметр, 3-дециметр, 4-метр");
// if (value ==1){var metr = +prompt("Введіть довжину");
// result = metr * 0.001;
// alert(result + "Метрів");}
// else if (value ==2){var metr = +prompt("Введіть довжину");
// result = metr * 0.01;
// alert(result + "Метрів");}
// else if (value ==3){var metr = +prompt("Введіть довжину");
// result = metr * 0.1;
// alert(result + "Метрів");}
// else if (value ==4){var metr = +prompt("Введіть довжину");
// result = metr * 1;
// alert(result + "Метрів");}

/////------ЗАДАЧА 7-------
// var ask = prompt ("Бажаєте дізнатися ідеальну свою вагу?", "Yes or No");
// if (ask=="Yes"){var old = +prompt("Введіть ваш вік");
//                 var height = +prompt("Введіть ваш зріст");
//                 if (old >=40) {var result = ( height - 90);}
//                 else if (old<40) {var result = ( height - 100);} }
// else {alert("GoodBye-)");}
// alert(result);

/////------ЗАДАЧА 8-------

// var numb = +prompt ("Введіть будь яке число");
// if (numb % 3 == 0 && numb % 5 == 0 && numb % 7 == 0 && numb % 9 == 0 && numb % 11 == 0)
// {alert ("Ваше число кратное числам (3),(5),(7),(9),(11)");}
// else if (numb % 3 == 0 && numb % 5 == 0 && numb % 7 == 0 && numb % 9 == 0)
// {alert ("Ваше число кратное числам");}
// else if (numb % 3 == 0 && numb % 5 == 0 && numb % 7 == 0)
// {alert ("Ваше число кратное");}
// else if (numb % 3 == 0 && numb % 5 == 0)
// {alert ("Ваше число кратное", numb);}
// else if (numb % 3 == 0)
// {alert ("Ваше число кратное", numb);}
// else if (numb % 11 == 0)
// {alert ("Ваше число кратное", numb);}
// else if (numb % 9 == 0)
// {alert ("Ваше число кратное", numb);}
// else if (numb % 7 == 0)
// {alert ("Ваше число кратное", numb);}
// else if (numb % 5 == 0)
// {alert ("Ваше число кратное", numb);}

// else(alert ("Ваше число не кратное числам (3),(5),(7),(9),(11)"))

/////------ЗАДАЧА 9-------
// var numb = +prompt ("Введіть будь яке число");
// if (numb % 2 == 0){alert ("(" + numb + ")" + " "+"Ваше число парне");}
// else {alert ("(" + numb + ")" + " "+"Ваше число не парне")}

/////------ЗАДАЧА 10-------
// var ask = +prompt ("Хочете дзнатися чи ваш трикутник є прямокутним?" + "(1 - Так), (2 - Ні). ");
// if (ask == 1){     var katet1 = +prompt ("Введіть значення першого катету" );
//                     var katet2 = +prompt ("Введіть значення другого катету" );
//                     var gipotenuza = +prompt ("Введіть значення Гипотенузи" );
//                     var gip = gipotenuza **2;
//                     var kat = katet1**2 + katet2**2;
//                     if (gip == kat){ alert("Прямокутний")} 
//                     else { alert("Не прямокутний трикутник")};
//                 }
// else {alert ("До зустрічі наступного разу!")}


/////------ЗАДАЧА 11-------
//  var numb = +prompt ("Введіть будь яке число");
//  (result = numb **3);
//  alert(result);