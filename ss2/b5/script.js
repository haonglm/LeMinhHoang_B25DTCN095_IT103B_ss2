let bookName = prompt("Nhập tên sách:");
let bookStatus = prompt("Trạng thái sách (có sẵn / đã mượn):").toLowerCase();
let publishYear = +prompt("Nhập năm xuất bản:");

publishYear = parseInt(publishYear);
let currentYear = 2026;
let bookAge = 2026 - publishYear; 

console.log("--- Trạng thái chi tiết của sách ---");
console.log("Sách: " + bookName);

if (bookStatus === "có sẵn" && bookAge <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (bookStatus === "đã mượn" && bookAge <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (bookStatus === "đã mượn" && bookAge > 10) {
    console.log("Sách này đã mượn và khá cũ");  
} else if (bookStatus === "có sẵn" && bookAge > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
    console.log("Trạng thái hoặc năm xuất bản không hợp lệ.");
}