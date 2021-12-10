class Student{
    constructor(id, hoTen, maSV, lop, khoa, toan, ly, hoa, hanhdong){
        this.__id = id;
        this.__hoTen= hoTen;
        this.__maSV= maSV;
        this.__lop= lop;
        this.__khoa= khoa;
        this.__toan= toan;
        this.__ly= ly;
        this.__hoa= hoa;
        this.__hanhdong= hanhdong;
    }
    set id(value) {this.__id = value;}
    get id() {return this.__id};

    set hoTen(value) {this.__hoTen = value;}
    get hoTen() {return this.__hoTen};
    
    set maSV(value) {this.__maSV = value;}
    get maSV() {return this.__maSV}
    
    set lop(value) {this.__lop = value;}
    get lop() {return this.__lop}
    
    set khoa(value) {this.__khoa = value;}
    get khoa() {return this.__khoa}
    
    set toan(value) {this.__toan = value;}
    get toan() {return this.__toan}
    
    set ly(value) {this.__ly = value;}
    get ly() {return this.__ly}
    
    set hoa(value) {this.__hoa = value;}
    get hoa() {return this.__hoa}
    
    set hanhdong(value) {this.__hanhdong = value;}
    get hanhdong() {return this.__hanhdong}
    diemTrungBinh(){return ((parseFloat(this.toan) + parseFloat(this.ly)+ parseFloat(this.hoa))/3).toFixed(2); }
    xepLoai(){
        if (this.diemTrungBinh() >= 8) {
            return "Giỏi";
        }else if((this.diemTrungBinh >= 6.5) && (this.diemTrungBinh <= 8)){
            return "Khá";
        }else{
            return "Trung Bình";
        }
    }
}
class Khoa{
    constructor(id, tenKhoa){
        this.__id = id;
        this.__tenKhoa = tenKhoa;
    }
    set id(value) {this.__id = value;}
    get id() {return this.__id};

    set tenKhoa(value) {this.__tenKhoa = value;}
    get tenKhoa() {return this.__tenKhoa};
}
class Lop{
    constructor(id, tenLop){
        this.__id = id;
        this.__tenLop = tenLop;
    }
    set id(value) {this.__id = value;}
    get id() {return this.__id};

    set tenLop(value) {this.__tenLop = value;}
    get tenLop() {return this.__tenLop};
}