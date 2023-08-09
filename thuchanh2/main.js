// thuc hanh 1
// thuc hanh 1

// B1: Lấy các selector tương ứng
let player = document.getElementById("inputPlayer");
let control = document.getElementById("addPlayer");
let listPlayer = document.getElementById("listPlayer");

// B2: Thêm sự kiện click cho nút thêm cầu thủ
control.addEventListener("click", function (e) {
    // B2.1: Thêm player vào bộ nhớ trình duyệt
    localStorage.setItem(player.value, player.value);

    // B2.2: Khởi tạo phần tử li
    let liPlayer = document.createElement("li");
    let liText = document.createTextNode(player.value);
    liPlayer.appendChild(liText);

    // B2.3: Thêm phần tử li vào danh sách đã có
    listPlayer.appendChild(liPlayer);

    // B2.4: Làm rỗng ô input sau khi thêm thành công
    player.value = "";
});

// B1: Tạo hàm lấy danh sách cầu thủ
function getAllPlayer() {
    // B1.1: Duyệt danh sách cầu thủ lưu trữ tại local storage
    for (let index = 0; index < localStorage.length; index++) {
        // B1.2: Khởi tạo phần tử li
        let liPlayer = document.createElement("li");
        let liText = document.createTextNode(localStorage.key(index));
        liPlayer.appendChild(liText);

        // B1.3: Thêm phần tử li vào danh sách đã có
        listPlayer.appendChild(liPlayer);
    }
}

// B2: Hiển thị danh sách cầu thủ
getAllPlayer();




// thuc hanh 2
// thuc hanh 2

// B1: Lấy các selector tương ứng
let clr = document.getElementById("clearPlayer");

// B2: Thêm sự kiện click cho nút xóa tất cả cầu thủ
clr.addEventListener("click", function () {
    localStorage.clear();
    listPlayer.innerHTML = "";
});
// B2.2: Khởi tạo phần tử li
let button = document.createElement("button");
button.innerText = "Xóa";
liPlayer.appendChild(button);

// B2.3: Thêm sự kiện xóa item
button.addEventListener("click", function () {
    // B1: Lấy ra key tương ứng
    let keyPlayer = button.previousSibling;
    // B2: Xóa phần tử khỏi localStorage
    localStorage.removeItem(localStorage.key(keyPlayer));
    // B3: Xóa khỏi giao diện
    button.parentNode.outerHTML = "";
});

let button = document.createElement("button");
button.innerText = "Xóa";
liPlayer.appendChild(button);

let deletePlayer = document.querySelectorAll("ul#listPlayer li button");
for (let index = 0; index < deletePlayer.length; index++) {
    // B1: Thêm sự kiện cho các nút
    deletePlayer[index].addEventListener("click", function () {
        // B2: Lấy ra key tương ứng
        let keyPlayer = deletePlayer[index].previousSibling;
        // B3: Xóa phần tử khỏi localStorage
        localStorage.removeItem(localStorage.key(keyPlayer));
        // B4: Xóa khỏi giao diện
        deletePlayer[index].parentNode.outerHTML = "";
    });
}