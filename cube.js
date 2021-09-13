function modelChange() {
    var p2 = document.getElementById("cube");
    console.log(p2.style.visibility);
    if (p2.style.visibility == "visible") {
        p2.style.visibility = "hidden";
    } else {
        p2.style.visibility = "visible";
    }
}