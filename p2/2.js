function findLMV() {
    var str = document.getElementById('t1').value // lấy giá trị nhập vào ô t1
    for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
    || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') // chạy vòng lặp đếm nguyên âm
    return ("Left most vowel of " + str + " is at location " + (i + 1));
    }
    return ("No vowels found for string " + str);
   }
   function reverse(num) {
    rnum = 0;
    temp = num;
    if (isNaN(num)) { // kiểm tra có phải giá trị số hay không
    return "invalid number";
    }
    while (num != 0) {
    rnum *= 10;
    rnum += num % 10;
    num -= num % 10;
    num = Math.floor(num / 10);
    } // xử lý thuật toán
    return "Reverse of num " + temp + " is " + rnum; // trả về kết quả
   }
   