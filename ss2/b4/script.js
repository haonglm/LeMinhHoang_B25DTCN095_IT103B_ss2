let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let favourite = +prompt("Nhập mức độ yêu thích (từ 1 đến 5):");

favourite = parseInt(favourite);

console.log("--- Nhật ký mượn sách ---");
console.log("Người mượn: " + borrowerName);
console.log("Cuốn sách: " + bookName);

if (favourite === 5 || favourite === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (favourite === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (favourite === 2 || favourite === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    console.log("Mức độ yêu thích không hợp lệ. Vui lòng nhập từ 1 đến 5.");
}