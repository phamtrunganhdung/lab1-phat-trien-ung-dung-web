$(document).ready(function(){
    var range = prompt("enter the range (from-to)");
    var result = range.split("-");
    if (result.length != 2){
        alert("invalid range");
        return;
    }
    const num1 = parseInt(result[0]);
    const num2 = parseInt(result[1]);
    if(num1 > num2){
        alert("invalid range");
        return;
    }
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = num1; i <= num2; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    document.querySelector(".content").innerHTML = str;
    $(".new").click(function(){
        location.reload();
    });
});