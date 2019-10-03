const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6, 7];

const name = {
    name1: 'Hoàng Lương',
    name2: 'Hoàng Hải'

};

const dsLop = {
    ...name,
    name3: 'Hoàng Huy',
    name4: 'Hoàng Hà'
}
console.log(array1);
console.log(array2);
console.log(name);
console.log(dsLop);