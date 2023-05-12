var index = 1;

function addRow() {

    var tbody = document.getElementById("tbody"); // biến tbody dùng để truyền nội dung vào thẻ html id body
    var trAo = document.createElement("tr");// biến trAo dùng để tạo 1 hàng mới

    tbody.append(trAo); // chèn nội dung biến trAo vào biến tbody
    trAo.id = index;

    //  tạo hàng, truyền nội dung biến vào các ô
    var tdHoTen = document.createElement("td");
    var tdNgaySinh = document.createElement("td");
    var tdDiemToan = document.createElement("td");
    var tdDiemLy = document.createElement("td");
    var tdDiemHoa = document.createElement("td");
    var tdDiemTrungBinh = document.createElement("td");
    var tdHocLuc = document.createElement("td");

    //      id các ô sẽ được tăng dần theo từng hàng
    tdDiemToan.id = "diemToan" + index;
    tdDiemLy.id = "diemLy" + index;
    tdDiemHoa.id = "diemHoa" + index;
    tdDiemTrungBinh.id = "diemTrungBinh" + index;
    tdHocLuc.id = "hocLuc" + index;

    index = index + 1;

    //      chèn nội dung vào trAo
    trAo.append(tdHoTen);
    trAo.append(tdNgaySinh);
    trAo.append(tdDiemToan);
    trAo.append(tdDiemLy);
    trAo.append(tdDiemHoa);
    trAo.append(tdDiemTrungBinh);
    trAo.append(tdHocLuc);

    //  lấy giá trị từ input bằng value 
    //  và truyền vào các biến td rồi in ra màn hình
    tdHoTen.innerHTML = nhapTen.value;
    tdNgaySinh.innerHTML = nhapNamSinh.value;
    tdDiemToan.innerHTML = nhapDiemToan.value;
    tdDiemLy.innerHTML = nhapDiemLy.value;
    tdDiemHoa.innerHTML = nhapDiemHoa.value;


}

function diemTB() {
    //      vòng lặp chạy dựa theo id các ô 
    for (var i = 1; i < index; i++) {
        //  các biến sẽ truyền giá trị vào các thẻ có id tương úng
        var dToan = document.getElementById("diemToan" + i);
        var dLy = document.getElementById("diemLy" + i);
        var dHoa = document.getElementById("diemHoa" + i);
        var dTB = document.getElementById("diemTrungBinh" + i);

        console.log(dToan.innerHTML);
        console.log(dLy.innerHTML);
        console.log(dHoa.innerHTML);

        //  lúc này kiểu dữ liệu các biến khi in ra màn hình đang là string
        //  dùng 2 lần dấu - để chuyển string thành kiểu number
        dTB.innerHTML = (dToan.innerHTML - (-dLy.innerHTML) - (-dHoa.innerHTML)) / 3;
        console.log(dTB.innerHTML);
    }
}

function xepLoai() {
    // truyền nội dung biến vào các ô có id tương ứng
    var tB = document.getElementById("diemTrungBinh1");
    var hLuc = document.getElementById("hocLuc1");

    // rẽ nhánh phân loại học lực
   if (tB > 9 && tB <= 10) {
        hLuc.innerHTML = "Xuất sắc";
    } else if (tB > 8 && tB <= 9) {
        hLuc.innerHTML = "Giỏi";
    } else if (tB > 7 && tB <= 8) {
        hLuc.innerHTML = "Khá";
    } else if (tB > 5 && tB <= 7) {
        hLuc.innerHTML = "Trung bình"; 
    } else if (tB > 4 && tB <= 5) {
        hLuc.innerHTML = "Yếu"; 
    } else if (tB > 0 && tB <= 4) {
        hLuc.innerHTML = "Kém"; 
    }  

}







