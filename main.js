var index = 1;

function addRow() {
    /**lưu phần tử DOM tạo 1 hàng mới 
     * đồng thời gán id 
     */
    var trAo = $("<tr></tr>").attr("id", index);
    $("#tbody").append(trAo);

    // truy xuất DOM, lưu vào các biến
    var tdHoten = $("<td></td>");
    var tdNgaySinh = $("<td></td>");
    //                             method .attr() dùng đề tịnh tiến id qua từng hàng                                     
    var tdDiemToan = $("<td></td>").attr("id", "diemToan" + index);
    var tdDiemLy = $("<td></td>").attr("id", "diemLy" + index);
    var tdDiemHoa = $("<td></td>").attr("id", "diemHoa" + index);
    var tdDiemTrungBinh = $("<td></td>").attr("id", "diemTrungBinh" + index);
    var tdHocLuc = $("<td></td>").attr("id", "hocLuc" + index);

    index++;

    //  gán nội dung bằng append
    trAo.append(tdHoten);
    trAo.append(tdNgaySinh);
    trAo.append(tdDiemToan);
    trAo.append(tdDiemLy);
    trAo.append(tdDiemHoa);
    trAo.append(tdDiemTrungBinh);
    trAo.append(tdHocLuc);

    //lấy giá trị từ input bằng val() và đưa ra màn hình
    tdHoten.html($("#nhapTen").val());
    tdNgaySinh.html($("#nhapNamSinh").val());
    tdDiemToan.html($("#nhapDiemToan").val());
    tdDiemLy.html($("#nhapDiemLy").val());
    tdDiemHoa.html($("#nhapDiemHoa").val());
}

function diemTB() {

    for (var i = 1; i < index; i++) {
        // gán giá trị trong bảng cho biến bằng html()
        // chuyển kiểu dữ liệu của DOM truy xuất bằng id thành kiểu số nguyên bằng parseInt()
        var dToan = parseInt($("#diemToan" + i).html());
        var dLy = parseInt($("#diemLy" + i).html());
        var dHoa = parseInt($("#diemHoa" + i).html());
        var dTB = parseInt($("#diemTrungBinh" + i).html());
        
        dTB = (dToan +dLy +dHoa)/3;

        //  if else check xem dTB có phải là số chiwa hết cho 2
        if (dTB % 2 == 0) { //  nếu chia hết cho 2 in dTB ra DOM đã truy xuất
            $("#diemTrungBinh" + i).html(dTB);
        } else { // nếu không, dùng method .toFixed() với hệ số 2 để làm tròn đến số thập phân thứ 2
            $("#diemTrungBinh" + i).html(dTB.toFixed(2));
        }
    }   
}

function xepLoai() {
    //  vòng lặp xếp học lực dựa vào điểm tb của các ô (khi id ô điểm tb tăng lên vòng lặp sẽ chạy lại)
    for (var i = 1; i < index; i++) {
        var tB = $("#diemTrungBinh" + i);
        var hLuc = $("#hocLuc" + i);
        
        //  if else check mức học lực
        if (tB.html() > 9 && tB.html() <= 10) {
            hLuc.html("Xuất sắc");
          } else if (tB.html() > 8 && tB.html() <= 9) {
            hLuc.html("Giỏi");
          } else if (tB.html() > 7 && tB.html() <= 8) {
            hLuc.html("Khá");
          } else if (tB.html() > 5 && tB.html() <= 7) {
            hLuc.html("Trung bình");
          } else if (tB.html() > 4 && tB.html() <= 5) {
            hLuc.html("Yếu");
          } else if (tB.html() > 0 && tB.html() <= 4) {
            hLuc.html("Kém");
          }
    }
}



