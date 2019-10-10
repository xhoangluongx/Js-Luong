const numbers = [1,3,5,7,9];

[num1, , num2] = numbers;
console.log(num1, num2);

const person = {
    name: 'teo', age: 3
};
const {name, age} = person;
console.log(name, age);