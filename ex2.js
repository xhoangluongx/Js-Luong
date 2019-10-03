//ham
//cach viet thong thuong
function Hello(name){
    console.log(name);

}
//Cach viet khac
const hello1 = function(name){
    console.log(name + " den tu hello1");
}

// cach viet ham trong js es6
const hello2 = (name) => {
    console.log(name + " den tu hello hien da:")
}
//Neu chi co 1 tham so, va 1 gia tri return
const tinhBinhPhuong = so => so * so ;
console.log(tinhBinhPhuong(2));
Hello('Hoàng Lương')
hello1('Hoàng Hậu')
hello2('Hoàng Ruby')

