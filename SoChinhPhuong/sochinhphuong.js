var arr = [12,1,4,9,267,45,87,235]

function kiemtra(a) {
    if(a < 1 ) 
        return false;
    var i = Math.sqrt(a)
    if(i * i == a)
        return true;
    return false;
}

function chinhphuong() {
    b = []
    for(var c of arr) {
        if(kiemtra(c))
        b.push(c)
    } return b;
}
document.getElementById("result").innerHTML = "Mảng lúc đầu: " + arr;
document.getElementById("result1").innerHTML = "Các số chính phương có trong mảng trên: " + chinhphuong(arr);