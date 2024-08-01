// Đây là một ví dụ JavaScript để hiển thị một thông báo khi nhấp vào phần tiêu đề
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        alert('Chào mừng đến với CV của tôi!');
    });
});