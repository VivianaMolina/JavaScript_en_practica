var Btn1 = document.getElementById('btn-1');
var Btn2 = document.getElementById('btn-2');
var Btn3 = document.getElementById('btn-3');
var Btn4 = document.getElementById('btn-4');
var Btn5 = document.getElementById('btn-5');
var Btn6 = document.getElementById('btn-6');

Btn1.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#e53e3e";
});

Btn2.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#dd6b20";
});

Btn3.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#faf089";
});

Btn4.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#48bb78";
});
Btn5.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#81e6d9";
});
Btn6.addEventListener("click", (e) => {
    document.getElementById("caja").style.backgroundColor = "#d53f8c";
});

