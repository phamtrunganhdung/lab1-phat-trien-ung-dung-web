$(document).ready(function () {
  $("#check").click(function () {
    var range = document.getElementById("input").value;
    var result = range.split("-");
    if (result.length != 2) {
      alert("invalid range");
      return;
    }
    const num1 = parseInt(result[0]);
    const num2 = parseInt(result[1]);
    if (num1 > num2) {
      alert("invalid range");
      return;
    }
    str =
      "<div class='text-center'> <table class='table-hover table-dark'><tr><th> Number </th><th> Square </th><th> Cube </th></tr> </div>";

    for (i = num1; i <= num2; i++) {
      str = str + "<tr><td>" + i + "<td>" + i * i + "<td>" + i * i * i;
    }
    document.querySelector(".res").innerHTML = str;
  });
  $("#new").click(function () {
    location.reload();
  });
  $("#home").click(function () {
    window.location.href = "../index.html";
  });
});
