let btn = document.getElementById("btn");
    let inputText = document.getElementById("inputText");
    let h2 = document.getElementById("kq");

btn.addEventListener("click", click);

function click(e) {
  let x= inputText.value
  h2.innerHTML =sodoixung(x)
}
function sodoixung(value) {
  var sodao = parseInt(value.toString().split("").reverse().join(""));
  if (value == sodao) {
    return  " là số đối xứng";
  } else {
    return  "không phải số đối xứng";
  }
}
