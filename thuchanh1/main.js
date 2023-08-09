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