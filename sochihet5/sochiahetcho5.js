var arr = [10,9,25,76,50,5,44,76];

function kiem_tra() {
    var x = []
    for (const y of arr) {
        if(y % 5 == 0)
        x.push(y)
    }
    return x;
}
document.getElementById('mangdau').innerHTML = "Mảng lúc đầu: " + arr;
document.getElementById('mangsau').innerHTML = "Các số chia hết cho 5 có trong mảng trên: " + kiem_tra(arr);