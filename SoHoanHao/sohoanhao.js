var a = document.getElementById("a");
function kiem_tra_shh() {
    var N = a.value;
    var S = 0; 
        for(var i = 1; i < N; i++) {
            if (N % i == 0)
             S = S + i;
        }
        if(S==N) {
            document.getElementById('result').innerHTML = N + " là số hoàn hảo"
        } else {
            document.getElementById('result').innerHTML = N + " Không là số hoàn hảo"
        }
}