function sc() {
    rng = prompt('Enter the range'); 
    res = rng.split("-"); 
    if (res.length != 2) {
    alert("invalid range "); 
    return;
    }// cho nhập khoảng giá trị, dùng split để cắt chuỗi các gia trị cách nhau bởi "-". nếu có hơn 1 khoảng giá trị thì alert "invalid range"
    first = parseInt(res[0]);// chuyển giá trị thứ 1 về kiểu Int
    second = parseInt(res[1]);// chuyển giá trị thứ 2 về kiểu Int
    if (first > second) {
    alert("invalid range ");
    return;
    } // nếu giá trị 1 lớn hơn giá trị 2 thì khoảng giá trị sai
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }// tạo bảng và xử lý thuật toán
    document.write(str); // xuất ra
   }