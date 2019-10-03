class SinhVien {
    name = 'Nguyen Van Teo';
    
    printSV = () => {
        console.log(this.name)
    }
}

const sinhVien = new SinhVien();
// console.log(SinhVien.name);
sinhVien.printSV();