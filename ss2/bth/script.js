/* nhập */

let userName = prompt("Nhập tên của bạn:");
let role = prompt("Nhập vai trò của bạn (admin, student, guest):");
let accountBalance = +prompt("Nhập số dư tài khoản của bạn:");
let accountStatus = prompt("Nhập trạng thái của bạn (true là hoạt động, để trống hoặc nhập khác là khóa):");
let overdueDay = +prompt("Nhập số ngày quá hạn trả sách của bạn (nếu có):");

/* xử lý */

let roleMessage;

switch (role) {
    case "admin":
        roleMessage = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        roleMessage = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        roleMessage = "Lỗi: Vai trò không hợp lệ!";
        break;
}

let Allowed = (userName != "") && (role == "admin" || role == "student") && (accountBalance > 0 && accountStatus == "true");
let borrowResult = Allowed ? "ĐƯỢC PHÉP MƯỢN SÁCH" : "YÊU CẦU BỊ TỪ CHỐI";

let fine = 0;
let returnStatus;
let warning;

if (overdueDay <= 0) {
    returnStatus = "Cảm ơn bạn đã trả đúng hạn";
} else if (overdueDay >= 1 && overdueDay <= 5) {
    fine = overdueDay * 5000;
    returnStatus = `Quá hạn ${overdueDay} ngày`;
} else if (overdueDay >= 6 && overdueDay <= 10) {
    fine = overdueDay * 10000;
    returnStatus = `Quá hạn ${overdueDay} ngày`;
} else {
    fine = 200000;
    returnStatus = `Quá hạn ${overdueDay} ngày`;
    warning = "TÀI KHOẢN BỊ KHÓA";
}

console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName.toUpperCase()}

Quyền hạn: ${roleMessage}

Kết quả mượn: ${borrowResult}

Tình trạng trả sách: ${returnStatus}

Tiền phạt: ${fine} VNĐ
${warning}
`);
