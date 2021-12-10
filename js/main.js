//Khởi tạo mảng
stdList = Array();
lopList = Array();
khoaList = Array();

// Khởi tạo mảng tìm kiếm
arr = Array();
//tạo giá trị
function create() {
    btn = document.getElementById("btnAdd");
    btn.addEventListener('click',addStd);
    
    rootDom = document.getElementById('display');
    hoTenDom = document.getElementById('nameStudent');
    idStudentDom = document.getElementById('idStudent');
    classStudentDom = document.getElementById('classStudent');
    departmentStudentDom = document.getElementById('departmentStudent');
    mathStudentDom = document.getElementById('mathStudent');
    physicStudentDom = document.getElementById('physicStudent');
    chemistryStudentDom = document.getElementById('chemistryStudent');
    
    inputDom = document.getElementById('input');
    editDom = document.getElementById('edit');
    hoTenEditDom = document.getElementById('nameEditStudent');
    idStudentEditDom = document.getElementById('idEditStudent');
    classStudentEditDom = document.getElementById('classEditStudent');
    departmentStudentEditDom = document.getElementById('departmentEditStudent');
    mathStudentEditDom = document.getElementById('mathEditStudent');
    physicStudentEditDom = document.getElementById('physicEditStudent');
    chemistryStudentEditDom = document.getElementById('chemistryEditStudent');
}
function render() {
    rootDom.innerHTML = '<thead><tr>'
    +'<th>STT</th>'
    +'<th>Họ và tên</th>'
    +'<th>Mã sinh viên</th>'
    +'<th>Lớp</th>'
    +'<th>Khoa</th>'
    +'<th>Toán</th>'
    +'<th>Lý</th>'
    +'<th>Hoá</th>'
    +'<th>Điểm TB</th>'
    +'<th>Xếp loại</th>'
    +'<th>Hành động</th>'
    +'</tr></thead>'
    stdList.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}
function renderSearch() {
    rootDom.innerHTML = '<tr>'
    +'<th>STT</th>'
    +'<th>Họ và tên</th>'
    +'<th>Mã sinh viên</th>'
    +'<th>Lớp</th>'
    +'<th>Khoa</th>'
    +'<th>Toán</th>'
    +'<th>Lý</th>'
    +'<th>Hoá</th>'
    +'<th>Điểm TB</th>'
    +'<th>Xếp loại</th>'
    +'<th>Hành động</th>'
    +'</tr>'
    arr.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}
function renderKhoa() {
    rootDom.innerHTML = '<tr>'
    +'<th>STT</th>'
    +'<th>Họ và tên</th>'
    +'<th>Mã sinh viên</th>'
    +'<th>Lớp</th>'
    +'<th>Khoa</th>'
    +'<th>Toán</th>'
    +'<th>Lý</th>'
    +'<th>Hoá</th>'
    +'<th>Điểm TB</th>'
    +'<th>Xếp loại</th>'
    +'<th>Hành động</th>'
    +'</tr>'
    arrKhoa.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}
function createNodeStudent(std) {
    nodeRow = document.createElement('tbody');
    nodeRowtr = document.createElement('tr');

    nodeSTT = document.createElement('td');
    nodeSTT.innerHTML = std.id;
    nodeRowtr.appendChild(nodeSTT);

    nodeHoten = document.createElement('td');
    nodeHoten.innerHTML = std.hoTen;
    nodeRowtr.appendChild(nodeHoten);
    
    nodeMaSinhVien = document.createElement('td');
    nodeMaSinhVien.innerHTML = std.maSV;
    nodeRowtr.appendChild(nodeMaSinhVien);

    nodeLop = document.createElement('td');
    nodeLop.innerHTML = std.lop;
    nodeRowtr.appendChild(nodeLop);

    nodeKhoa = document.createElement('td');
    nodeKhoa.innerHTML = std.khoa;
    nodeRowtr.appendChild(nodeKhoa);

    nodeToan = document.createElement('td');
    nodeToan.innerHTML = std.toan;
    nodeRowtr.appendChild(nodeToan);

    nodeLy = document.createElement('td');
    nodeLy.innerHTML = std.ly;
    nodeRowtr.appendChild(nodeLy);

    nodeHoa = document.createElement('td');
    nodeHoa.innerHTML = std.hoa;
    nodeRowtr.appendChild(nodeHoa);

    nodeDtb = document.createElement('td');
    nodeDtb.innerHTML = std.diemTrungBinh();
    nodeRowtr.appendChild(nodeDtb);

    nodeXl = document.createElement('td');
    nodeXl.innerHTML = std.xepLoai();
    nodeRowtr.appendChild(nodeXl);
   
    nodeStatus = document.createElement('td');
    nodeStatus.setAttribute('class','hanhdong');
    nodeRowtr.appendChild(nodeStatus);

    // Khởi tạo edit
    nodeEdit = document.createElement('button');
    
    nodeEdit.setAttribute('class','btn btn-warning mx-1');
    nodeEdit.innerHTML = 'Sửa';
    nodeEdit.addEventListener('click',function() {
        editStd(std.id);
    })
    nodeStatus.appendChild(nodeEdit);

    // Khởi tạo delete
    nodeDelete = document.createElement('button');
    nodeDelete.setAttribute('class','btn btn-danger');
    nodeDelete.innerHTML = 'Xóa';
    nodeDelete.addEventListener("click", function () {
        deleteStd(std.id);
    })
    nodeStatus.appendChild(nodeDelete);
    
    // Khởi tạo complete
    // nodeComplete = document.createElement('button');
    // nodeComplete.innerHTML = 'complete';
    // nodeStatus.appendChild(nodeComplete);
 
    nodeRow.appendChild(nodeRowtr);
    return nodeRow;
}
//Hàm kiểm tra dữ liệu rỗng
//create Student
function addStd(){
    if(stdList.length == 0) id = 1;
    else id = stdList.length+1;  
    std = new Student(
        id,
        hoTenDom.value,
        idStudentDom.value,
        classStudentDom.value,
        departmentStudentDom.value,
        mathStudentDom.value,
        physicStudentDom.value,
        chemistryStudentDom.value
    );
    stdList.push(std);
    render();
}
function deleteStd(id){
    i = 0;
    j = 1;
    for(;i < stdList.length; i++){
        if(stdList[i].id == id) break;
    }
    stdList.splice(i, 1);
    for(i = 0;i < stdList.length; i++){
       stdList[i].id = j;
       j++;
    }
    render();
}
let index;
function editStd(id){
    inputDom.style.display = 'none';
    stdList.forEach(std => {
        if(std.id == id){
            hoTenEditDom.value = std.hoTen;
            idStudentEditDom.value = std.maSV;
            classStudentEditDom.value = std.lop;
            departmentStudentEditDom.value = std.khoa;
            mathStudentEditDom.value = std.toan;
            physicStudentEditDom.value = std.ly;
            chemistryStudentEditDom.value = std.hoa;
            editDom.style.display = 'block';
            index = id;
        }
    });
}
function updateStd() {
    editDom.style.display = 'none';
    inputDom.style.display = 'block';
    id = index;
    stdList.forEach(std => {
        if(std.id == id){
            std.hoTen = hoTenEditDom.value;
            std.maSV =  idStudentEditDom.value  ;
            std.lop = classStudentEditDom.value;
            std.khoa = departmentStudentEditDom.value;
            std.toan = mathStudentEditDom.value;
            std.ly = physicStudentEditDom.value;
            std.hoa = chemistryStudentEditDom.value;
        }
    });
    render();
}
function search() {
    arr = new Array();
    key = document.getElementById('search').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].hoTen.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
function search2() {
    arr = new Array();
    khoa = document.getElementById('selectKhoa').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].khoa.includes(khoa)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
function search3() {
    arr = new Array();
    khoa = document.getElementById('selectLop').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].lop.includes(khoa)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
function themKhoa() {
    i = khoaList.length + 1;
    ipk = document.getElementById('inputKhoa');
    khoa = new Khoa(i, ipk.value);
    khoaList.push(khoa);
    truyenKhoa();
}
function truyenKhoa() {
    a = document.getElementById('departmentStudent');
    b = document.getElementById('departmentEditStudent');
    c = document.getElementById('selectKhoa');
    a.appendChild(createOptionKhoa(khoaList[khoaList.length-1]));
    b.appendChild(createOptionKhoa(khoaList[khoaList.length-1]));
    c.appendChild(createOptionKhoa(khoaList[khoaList.length-1]));
}
function createOptionKhoa(k) {
    op = document.createElement('option');
    op.innerHTML = k.tenKhoa;
    op.setAttribute("value",k.tenKhoa);
    return op;
}
function themLop() {
    i = lopList.length + 1;
    ipk = document.getElementById('inputLop');
    lop = new Lop(i, ipk.value);
    lopList.push(lop);
    truyenLop();
}
function truyenLop() {
    a = document.getElementById('classStudent');
    b = document.getElementById('classEditStudent');
    c = document.getElementById('selectLop');
    a.appendChild(createOptionLop(lopList[lopList.length-1]));
    b.appendChild(createOptionLop(lopList[lopList.length-1]));
    c.appendChild(createOptionLop(lopList[lopList.length-1]));
}
function createOptionLop(k) {
    op = document.createElement('option');
    op.innerHTML = k.tenLop;
    op.setAttribute("value",k.tenLop);
    return op;
}
window.onload = function (e) {
    create();
    render();
}

