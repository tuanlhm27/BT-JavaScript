var arr = [6,10,21,53,28,54,97,104,496]

function kiemtra(a,b) {
    if(a == 0 || b == 0)
        return false;
    if(a == b)
        return true;
    return false;
}

function tong(num) {
    var S = 0;
    for(var i = 1; i <num; i++){
        if(num % i == 0)
        S = S + i;
    } return S;
}

for(var i of arr) {
    if(kiemtra(i,tong(i))) {
        alert(i + " là số hoàn hảo trong mảng trên")
    }
}