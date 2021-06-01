function tinhBMI() {
    var height = Number(document.getElementById("height").value)/100;
    var weight = Number(document.getElementById("weight").value);
    var a = weight/(height**2);
    if (height == "" || weight == ""){ // kiểm tra điêu kiện
    } else {
        document.getElementById("a").innerText = "BMI " + a;
        if (a < 18.5){
            document.getElementById("b").innerText = " Bạn gầy";
            document.getElementById("c").innerText = "Nguy cơ phát triển bệnh Thấp";
        } else if (a >= 18.5 && a <= 25){
            document.getElementById("b").innerText = " Bạn bình thường";
            document.getElementById("c").innerText = "Nguy cơ phát triển bệnh Không";
        } else if (a >= 25 && a <= 30){
            document.getElementById("b").innerText = " Bạn hơi béo";
            document.getElementById("c").innerText = "Nguy cơ phát triển bệnh Cao";
        } else{
            document.getElementById("b").innerText = " Bạn béo phì";
            document.getElementById("c").innerText = " Nguy cơ phát triển bệnh rất cao";
        }
    }
}