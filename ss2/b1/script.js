let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publishYear = +prompt("Nhập năm xuất bản:");

publishYear = parseInt(publishYear);

let currentYear = 2026;

console.log("--- Thông tin sách ---");
console.log("Tên sách: " + bookName);
console.log("Tác giả: " + author);

if (publishYear === currentYear) {
    console.log("Đây là sách mới!");
} else if (2026 - publishYear <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}