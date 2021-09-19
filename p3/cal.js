function f(d) {
    if (d == 'c') {
    document.getElementById('res').value = ""; //  nút xóa
    return;
    }
    res = document.getElementById('res').value; // các nút số
    if (res == 0 && d == 0)
    return;
    if (d == '+' || d == '-' || d == '*' || d == '/') {
    opr = d;
    num = parseFloat(res);
    document.getElementById('res').value = d; // nút cộng trừ nhân chia
    return;
    }
    if (d == '=') {
    num1 = parseFloat(res);
    switch (opr) {
    case '+': ans = num + num1; break;
    case '-': ans = num - num1; break;
    case '*': ans = num * num1; break;
    case '/': ans = parseInt(num / num1); break;
    }
    document.getElementById('res').value = ans;
    return; //bấm = để tính toán
    }
    if (d == '--') {
    document.getElementById('res').value *= -1; // số âm
    return;
    }
    if (!isNaN(document.getElementById('res').value))
    document.getElementById('res').value += d;
    else
    document.getElementById('res').value = d;
   }
   $("#home").click(function(){
    location.href = "";
});