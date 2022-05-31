function responsiveNavbar() {
    var x = document.getElementsByClassName("nav-li");
    var img = document.getElementById("menu-img");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element.style.display == "block") {
            element.style.display = "none";
            img.src = "images/menu.png";
        } else {
            element.style.display = "block";
            img.src = "images/close.png";
        }
    }
}