let number1 = 10;
const number2 = number1;
number1 = 20;
const number3 = number1;

console.log(number1);
console.log(number2);
console.log(number3);

const person = {
    name: 'Lương',
    age: 30
};
const person2 = person;

person.name = 'Teo';
person.age = '21';


console.log(person);
console.log(person2);