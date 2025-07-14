//bmi
function bmiCalc() {
    let h = Number(prompt("Nhập chiều cao của bạn (m):"));
    let w = Number(prompt("Nhập cân nặng của bạn (kg):"));
    if (Number.isNaN(w) || Number.isNaN(h) || h <= 0 || w <= 0 || h > 2.5 || w > 650) {
        alert("Vui lòng nhập số liệu hợp lệ.");
        return;
    }
    let bmi = w / (h ** 2);
    let bmiRound = bmi.toFixed(2);
    if (bmi < 18.5) {
        alert("BMI: " + bmiRound + ", Thiếu cân");
    }
    else if (18.5 <= bmi && bmi < 23) {
        alert("BMI: " + bmiRound + ", Bình thường");
    } else {
        alert("BMI: " + bmiRound + ", Thừa cân");
    }


}
//swap
function swapNumber() {
    let n1 = Number(prompt("Nhập số thứ nhất:"));
    let n2 = Number(prompt("Nhập số thứ hai:"));
    if (isNaN(n1) || isNaN(n2)) {
        alert("Vui lòng nhập số.");
        return;
    }
    n1 = n1 + n2 - (n2 = n1);
    alert("Số đã nhập: " + n1 + " " + n2 + ". Đổi vị trí: " + n1 + " " + n2);

}
//sort
function sortNumber() {
    let n1 = Number(prompt("Nhập số thứ nhất:"));
    let n2 = Number(prompt("Nhập số thứ hai:"));
    let n3 = Number(prompt("Nhập số thứ ba:"));
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Vui lòng nhập số.");
        return;
    }
    if (n1 > n2) n1 = n1 + n2 - (n2 = n1);

    if (n1 > n3) n1 = n1 + n3 - (n3 = n1);

    if (n2 > n3) n2 = n2 + n3 - (n3 = n2);
    alert("3 số vừa nhập được sắp xếp theo thứ tự tăng dần là: " + n1 + " " + n2 + " " + n3);
}


//is triangle
function isTriangle() {
    let a = Number(prompt("Nhập độ dài cạnh thứ nhất:"));
    let b = Number(prompt("Nhập độ dài cạnh thứ hai:"));
    let c = Number(prompt("Nhập độ dài cạnh thứ ba:"));
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Vui lòng nhập kích thước hợp lệ.");
        return;
    }
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        console.log(true);
        alert("3 độ dài vừa nhập là 3 cạnh của 1 tam giác.");
    } else {
        console.log(false);
        alert("3 độ dài vừa nhập không là 3 cạnh của 1 tam giác.");

    }
}
