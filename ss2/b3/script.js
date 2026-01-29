let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại (Khoa học, Lịch sử, Văn học, Truyện):");
let isAvailable = prompt("Tình trạng sách (Nhập 'có' nếu sẵn sàng, 'không' nếu đã mượn):");

category = category.toLowerCase();
isAvailable = isAvailable.toLowerCase();

console.log("--- Kết quả phân loại ---");
console.log("Tên sách: " + bookName);

if (category === "khoa học" || category === "lịch sử") {
    if (isAvailable === "có") {
        console.log("Sách này có sẵn trong thư viện.");
    } else {
        console.log("Sách đã được mượn.");
    }
} else if (category === "văn học" || category === "truyện") {
    console.log("Sách này có thể đọc giải trí.");
} else {
    console.log("Thể loại không xác định.");
}