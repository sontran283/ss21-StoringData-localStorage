// Kiểm tra sự hợp lệ thông tin người dùng nhập vào:
// Email không được bỏ trống, mật khẩu không được bỏ trống, xác nhận mật khẩu trùng khớp.
// Kiểm tra sự tồn tại của email đăng ký.
// Lưu tài khoản vừa tạo thành công.

// Lưu tài khoản mới
function saveAccount() {
    // Lấy thông tin từ biểu mẫu
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp,vui lòng nhập lại");
        return false;
    }

    // Kiểm tra sự tồn tại của email đăng ký
    const tk = JSON.parse(localStorage.getItem(email))
    if (tk == undefined) {

    } else {
        if (tk.email == email) {
            alert("Email đã tồn tại! Vui lòng sử dụng email khác");
            return false;
        }
    }

    // Lưu thông tin tài khoản vào Local Storage
    let account = { email: email, password: password };
    localStorage.setItem(email, JSON.stringify(account));
    return true;
}



