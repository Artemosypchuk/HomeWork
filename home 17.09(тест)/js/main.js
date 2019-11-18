// var i=0;
// while (i<10){
//     document.write(i+"<br>");
//     i++;
// }

// var b=10;
// while (b){
//     document.write(b+"<br>");
//     b--;
// }
// var i=0;
// do{
//     alert("Hello");
//     i++;
// }
// while (i<0);

// while(true){
// var log=prompt("Enter Login");
// if (log=="admin"){break;}

// }
// while (true){
//     var pass=prompt("enter Password");
//     if(pass=="123"){break;}
// }
// alert("Hello Admin!");
//------------------------break------------(зупиняє роботу циклу);

//запитуємо 5ть імен вивести ті в яких більше 3х символів;
// var i=0;
// while(i<5){
//     i++;
//     var name = prompt("Enter your name");
//     if (name.length<=3){continue;}
//     document.write(name+"<br>");
// }

//   *
// var a= prompt("Enter a simbol");
// for( var n=5; n>0; n--){
//     for(var i=0; i<n; i++){

//     document.write(a);
// }
// document.write("<br>");
// }
// var a= prompt("Enter a simbol");
// for( var n=1; n<=5; n++){
//     for(var i=0; i<n; i++){

//     document.write(a);
// }
// document.write("<br>");
// }
// var a= prompt("Enter a simbol");
// var hight= prompt("Enter lines");
// var arrow= prompt("Enter\nUP\nDOWN");
// if(arrow=="UP"){
// for( var n=1; n<=hight; n++){
//     for(var i=0; i<n; i++){

//     document.write(a);
// }
// document.write("<br>");
// }
// }
// else if(arrow=="DOWN"){

//         for( var n=0; n<=hight; n++){
//             for(var i=0; i<n; i++){

//             document.write(a);
//         }
//         document.write("<br>");
//         }

// }


//--------------------Масиви----------------------

// var group = ["Саша","Юля","Андрій","Артем"];//данні масиву
// document.write(group[1]);//стандартне звернення

// var group = new Array();
// group[0]="Саша";

// var group = new Array("Саша","Юля","Андрій","Артем");


// var month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
// var colors=new Array("darkgray","gray","greenyellow","green","darkgreen","orange","yellow","red","blue","gold","pink","purple");

// for(var i=0; i<month.length;i++){
//     document.write("<p style='background-color:"+colors[i]+"';>"+month[i]+"</p>");

// }
// кількість студентів запитуємо і заповнюємо їх іменами, вивести імена в зворотньому порядку у стовпчик
// var group=[];
// var number=prompt("Введіть кількість студенетів");
// for (var i=0;i<=number;i++){
//     group[i]=prompt("Введіть ім’я студента"+(i+1))
// }
// for (n=number-1;n>=0;n--){
//     document.write(group[n]+"<br>");
// }

var question = [];
question[0] = "Обнаружив, что любимые джинсы порвались, вы:\n(1) - выкидываете их\n(2) - делаете еще несколько художественных разрезов и продолжаете носить"
question[1] = "Подружка попросила вас побыть с ее ребенком-непоседой. Вы:\nвключите ему телевизор или видеоигру\n(2) - окунетесь в детство и вместе придумаете веселую увлекательную игру"
question[2] = "Часто ли вам снятся сны?\n(1) - Да, вы обычно помните сновидения, они яркие и интересные \n(2) - Нет, вы редко запоминаете сны"
question[3] = "Какую работу вы предпочтете — ту,где известно, что и как делать, или ту, в которой необходимо что-то придумывать?\n(1) - Интереснее самостоятельно искать решения проблем, даже если это требует временных затрат\n(2) - Вам проще работать, когда существует четкий алгоритм"
question[4] = "Подружка выходит замуж, и вам предстоит организовать выкуп невесты, вы:\n(1) - изучите литературу и подберете конкурсы\n(2) - постараетесь придумать конкурсы сами, чтобы они были оригинальными"
question[5] = "Изучая меню в ресторане, вы, скорее всего, остановитесь на:\n(1) - знакомом блюде\n(2) - блюде с самым экстравагантным, названием"
question[6] = "Если в процессе создания стенгазеты потребуется нарисовать какое-то животное, вы:\n(1) - постараетесь найти фотографию или другое изображение и срисуете\n(2) - нарисуете животное сами, даже если не очень хорошо умеете"
question[7] = "Для новогоднего маскарада в детском саду необходимо найти малышу костюм. Вы:\n(1) - сошьете его сами\n(2) - купите в магазине"
question[8] = "Любили ли вы в детстве читать сказки?\n(1) - Вам интереснее было смотреть мультики\n(2) - Да, вы любили читать не меньше, чем смотреть телевизор"
question[9] = "Ваши фотографии в альбоме:\n(1) - чаше традиционные\n(2) - живые позы в необычных ракурсах"
var answer = [];
answer[0] = "2"
answer[1] = "2"
answer[2] = "1"
answer[3] = "1"
answer[4] = "2"
answer[5] = "2"
answer[6] = "2"
answer[7] = "1"
answer[8] = "2"
answer[9] = "2"
var sum = 0;
for (var i = 0; i < question.length; i++) {
    var answer_student = prompt(question[i], "1 або 2");
    if (answer_student == answer[i]) {
        sum++;
    } else if (answer_student == null) {
        alert("Не правельный ответ");
        break;
    }
}
if (sum < 4 && sum>0) {
    document.write("<img src='img/serious.jpg' alt=''></img>");
    document.write("<p style='color:" + "red" + "';>"+"Ваши очки:" +"(" + sum +")"+ "Вы придерживаетесь традиционных взглядов на решение проблемных ситуаций</p>");
} else if (sum >= 4 && sum < 6) {
    
    document.write("<img src='img/kreativ.jpg' alt=''></img>");
    document.write("<p style='color:" + "green" + "';>"+"Ваши очки:" +"(" + sum +")"+ "Вы достаточно креативны по натуре, но не всегда считаете нужным пользоваться этими способностями.</p>");
} else if (sum >= 6) {
    
    document.write("<img src='img/tvorcheskiy.jpg' alt=''></img>");
    document.write("<p style='color:" + "gold" + "';>"+"Ваши очки:"+"(" + sum +")"+ "Вы очень творческий человек. Вы умеете видеть необычные решения, которые незаметны для окружающих.</p>");
} else{alert("Вам нужно пройти тест заново!!!")}