let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Tình trạng sách (có sẵn / đã mượn / không có sẵn):").toLowerCase();
let borrowDay = parseInt(prompt("Nhập số ngày muốn mượn:"));

let LibraryCard = confirm("Bạn đã có thẻ thư viện chưa?");

console.log(`Người mượn: ${borrowerName}`);
console.log(`Sách: ${bookName}`);

if (bookStatus === "có sẵn") {
    if (LibraryCard) {
        console.log("Chúc mừng, bạn có thể mượn sách này");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }

} else if (bookStatus === "đã mượn") {
    if (borrowDay < 30) {
        if (LibraryCard) {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    } else {
        console.log("Thời gian mượn quá dài, vui lòng kiểm tra lại chính sách");
    }

} else if (bookStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");

} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}