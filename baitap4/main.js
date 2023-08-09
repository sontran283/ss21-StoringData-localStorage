// Thực hiện tạo một ứng dụng quản lý đầu việc
// Phải đầy đủ các tính năng Create - Read - Update - Delete
// Mỗi khi thực hiện xong một chức năng, dữ liệu về các đầu việc sẽ được chỉnh sửa và lưu trữ lại vào trong Local Storage
// Tham khảo dữ liệu của các đầu việc trong mảng sau
let thead = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm th`",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
    {
        id: 4,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
    {
        id: 5,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
];

// chức năng hiển thị ra giao diện (READ)
// chức năng hiển thị ra giao diện (READ)
function newtable() {
    let string = ""
    for (let i = 0; i < thead.length; i++) {
        let element = thead[i];
        string += `  <tr>
                <td>${element.id}</td>
                <td>${element.content}</td>
                <td>${new Date().toLocaleDateString()}</td>
                <td>${element.status}</td>
                <td>${element.assignedTo}</td>
                <td><button onclick="beforeUpdate(${element.id})">update</button></td>
                <td><button onclick="onDelete(${element.id})">delete</button></td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = string;
}
newtable()


//  logic id tự tăng
//  logic id tự tăng
function idtutang() {
    let idmax = 0
    for (let i = 0; i < thead.length; i++) {
        if (idmax < thead[i]) {
            thead[i] = idmax
        }
    }
    return idmax++;
}


//  chức năng thêm mới (Create)
//  chức năng thêm mới (Create)
function addPeople() {
    let newid = idtutang();
    let newcontent = document.getElementById("content").value
    let newassignedTo = document.getElementById("assignedTo").value
    let newstatus = document.getElementById("status").value
    let newdueDate = new Date().toLocaleDateString();
    const obj = {
        id: newid,
        content: newcontent,
        date: newdueDate,
        status: newstatus,
        assignedTo: newassignedTo,
    }
    thead.push(obj);
    document.getElementById("content").value = "";
    document.getElementById("assignedTo").value = "";
    document.getElementById("status").value = "";
    newtable()
}

// chức năng delete
// chức năng delete 
function onDelete(id) {
    if (confirm(`Ban co chac chan muon xoa phan tu co id la ${id}?`)) {
        let idx = thead.findIndex(el => el.id == id) // lay ra duoc id can xoa
        thead.splice(idx, 1) // xóa theo splice
        newtable() // cập nhật giao diện
    }
}

//  chức năng edit update
//  chức năng edit update
function beforeUpdate(id) {
    document.getElementById('question').style.display = 'block'
    const currentElement = thead.find(el => el.id == id);
    document.getElementById('editContent').value = currentElement.content
    document.getElementById('editAssigned').value = currentElement.assignedTo
    localStorage.setItem('currentElementId', id)
}

function onUpdate() {
    const id = localStorage.getItem('currentElementId')
    const currentElement = thead.find(el => el.id == id);
    currentElement.content = document.getElementById('editContent').value
    currentElement.assignedTo = document.getElementById('editAssigned').value
    newtable()
    onCancel()
}

function onCancel() {
    document.getElementById('question').style.display = 'none'
    localStorage.removeItem('currentElementId')
}