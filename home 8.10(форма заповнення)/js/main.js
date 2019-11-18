var form = document.querySelectorAll('input');
var button = document.querySelector('button');
var key = [];
var b;
var chek;
var p = document.querySelectorAll('p');
for (var i = 0; i < form.length; i++) {
    key[i] = form[i].getAttribute('name')
}

button.addEventListener('click', function () {
    for (var i = 0; i < form.length; i++) {
        var object = {
            [key[0]]: form[0].value,
            [key[1]]: form[1].value,
            [key[2]]: form[2].value,
            [key[3]]: form[3].value,
            [key[4]]: form[4].value,
            [key[5]]: form[5].value,
            [key[6]]: form[6].value,
            [key[7]]: form[7].value,
            [key[8]]: form[8].value,
            [key[9]]: form[9].value,
            [key[10]]: form[10].value,
            [key[11]]: form[11].value,
            [key[12]]: form[12].value,
            [key[13]]: form[13].value,
            [key[14]]: form[14].value,
            testEmail: function () {
                var mail = this[key[2]];

                for (var i = 0; i < mail.length; i++) {
                    if (mail[i] == '@') {
                        b = true;
                    }
                }
                if (b == true) {
                    form[2].style.border = 'solid rgb(115, 156, 115)';
                    p[2].style.display = 'none';

                } else {
                    form[2].style.border = 'solid red';
                    p[2].style.display = 'block';
                    b = false;
                }
            },
            chekPass: function () {
                var pass = this[key[13]];
                var check = this[key[14]]
                for (var i = 0; i < pass.length; i++) {
                    if (pass == check && pass.length >= 8) {
                        chek = true;
                    }
                }
                if (chek == true) {
                    form[13].style.border = 'solid rgb(115, 156, 115)';
                    p[13].style.display = 'none';
                    form[14].style.border = 'solid rgb(115, 156, 115)';
                    p[14].style.display = 'none';

                } else {
                    form[13].style.border = 'solid red';
                    p[13].style.display = 'block';
                    form[14].style.border = 'solid red';
                    p[14].style.display = 'block';


                    chek = false;
                }
            }
        }
        if (object[key[i]] == "") {
            form[i].style.backgroundColor = 'rgba(255, 0, 0, 0.247)';
            p[i].style.display = 'block';

        } else {
            form[i].style.backgroundColor = 'white';
            p[i].style.display = 'none';

        }

    }
    console.log(object)
    object.testEmail()
    object.chekPass()
    if (b == chek && b == true) {
        alert('Hello' + ' ' + object.name)
    }

})