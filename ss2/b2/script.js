let bookQuantity = +prompt("Nhập số lượng sách hiện có trong thư viện:");
bookQuantity = parseInt(bookQuantity);

console.log("Số lượng sách bạn đã nhập: " + bookQuantity);

if (bookQuantity < 10) {
    console.log("Thư viện có ít sách");
} else if (bookQuantity >= 10 && bookQuantity <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else if (bookQuantity > 20) {
    console.log("Thư viện có nhiều sách");
} else {
    console.log("Vui lòng nhập một số hợp lệ!");
}