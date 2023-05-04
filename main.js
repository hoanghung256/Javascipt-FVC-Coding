
alert("Chào mừng bạn đến với ứng dụng JavaScript đầu tiên");

//      Lấy thông tin từ người dùng
var ten = prompt("Nhập tên của bạn:");
var thanhPho = prompt("Nhập thành phố bạn sống:");
var sdt = prompt("Nhập số điện thoại:");

//      In kết quả lên màn console
console.log(ten);
console.log(thanhPho);
console.log(sdt);

//      Gán giá trị nhận được vào phần tử HTML
var nameAssign = document.getElementById("name");
var cityAssign = document.getElementById("city");
var mobileAssign = document.getElementById("mobile"); 

//      In kết quả ra màn hình
nameAssign.innerHTML = ten;
cityAssign.innerHTML = thanhPho;
mobileAssign.innerHTML = sdt;

//       Vòng lặp yêu cầu người dùng nhập ngày sinh hợp lệ
var yeuCauNhapTuoi = true;
while(yeuCauNhapTuoi){
    var namSinh = prompt("Nhập năm sinh:");
    var ageAssign = document.getElementById("age");
    var now = new Date().getFullYear();
    ageAssign.innerHTML = "Tuổi của bạn là: " + (now - namSinh);
    if(namSinh > now){
         console.log('xạo vậy ba!');
    } else{
        yeuCauNhapTuoi = false;
    }
}

//      Hiển thị nội dung sau khi bấm nút
var messageAssign = document.getElementById("message");
document.getElementById("hien").onclick = hienAn;
function hienAn() {
    console.log("đã bấm nút");
    message.style = "display: block";
}