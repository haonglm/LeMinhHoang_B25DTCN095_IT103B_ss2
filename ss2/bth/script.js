/* nhập */

let userName = prompt("Nhập tên của bạn:");
let role = prompt("Nhập vai trò của bạn (admin, student, guest):");
let accountBalance = +prompt("Nhập số dư tài khoản của bạn:");
let accountStatus = prompt("Nhập trạng thái của bạn (true là hoạt động, để trống hoặc nhập khác là khóa):");
let overdueDay = +prompt("Nhập số ngày quá hạn trả sách của bạn (nếu có):");

/* xử lý */

switch (role) {
    case "admin":
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        break;
    case "student":
        console.log("Chào sinh viên, bạn có thể mượn sách");
        break;
    case "guest":
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        break;
    default:
        console.log("Lỗi: Vai trò không hợp lệ!");
        break;
}

if((userName != "" ) && (role == "admin" || role == "student") && (accountBalance > 0 && accountStatus == "true")) {
    console.log("ĐƯỢC PHÉP MƯỢN SÁCH");
}else {
    console.log("YÊU CẦU BỊ TỪ CHỐI");
    console.log("Lý do:");

    if (userName === "") {
        console.log("Chưa nhập tên người dùng");
    }

    if (role !== "admin" && role !== "student") {
        console.log("Vai trò không được phép mượn sách");
    }

    if (accountBalance <= 0) {
        console.log("Số dư tài khoản không hợp lệ");
    }

    if (accountStatus !== "true") {
        console.log("Tài khoản đang bị khóa hoặc chưa kích hoạt");
    }
}

