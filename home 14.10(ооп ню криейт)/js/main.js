var person = Object.create({
        calculateAge: function () {
            if (person.age < 18) {
                console.log(person.name + ' ' + 'ваш вік: ' + person.age + " " + 'і ви не повнолітні');
            } else {
                console.log(person.name + ' ' + 'ваш вік: ' + person.age + " " + 'і ви є повнолітні');
            }
        }
    }, {
        name: {
            value: 'Artem',
            enumerable: true,
            writable: true,
            configurable: true,
        },
        birth_day: {
            value: 2001,
            enumerable: true,
            writable: true,
            configurable: true,
        },
        color_eye: {
            value: 'blue',
            enumerable: true,
            writable: true,
            configurable: true,
        },
        age: {
            enumerable: true,
            get: function () {
                return new Date().getFullYear() - this.birth_day;
            },
            set: function () {
                console.log('Ви змінили значення');
                this.calculateAge();
            }
        }
    }
    //сам об’єкт)
)