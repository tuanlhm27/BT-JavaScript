//AND(&&) dk1 và dk2: chỉ đúng khi cả 2 cùng đúng
//OR(||) dk1 hoặc dk2: cả 2 đúng hoặc 1 trong 2 đúng thì đúng
//NOT(!) dk đúng -> sai và ngược lại

var a = 3
var b = 4
var c = 5

//AND
console.log((a>b && c>b))
console.log((b>a && a<c))
console.log((a>c && c>a))
//OR
console.log((a>c || c>b))
console.log((a>b || b>c))
console.log((b>a || c>b))
//NOT
console.log(!(a>b))
console.log(!(c>a))
