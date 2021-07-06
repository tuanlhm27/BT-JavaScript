function daoso() {
    var b = document.getElementById("a").value;
    var rev_b = b.split("").reverse("").join("");
    document.getElementById("somoi").innerHTML = "Số mới được tạo ra là: " + rev_b;
}