$(document).ready(function(){
    $("#find").click(function(){
        var str = document.getElementById('t1').value 
        for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') 
        return alert("Left most vowel of " + str + " is at location " + (i + 1));
        }
        return alert("No vowels found for string " + str);
    });
    $("#clearFi").click(function(){
        var str = document.getElementById('t1').value = "";
    });
    $("#reverse").click(function(){
        var num = document.getElementById('t2').value;
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
        return alert("Reverse of num " + temp + " is " + rnum);
    });
    $("#clearRe").click(function(){
        var str = document.getElementById('t2').value = "";
    });
    $("#home").click(function(){
        location.href = "";
    });
});