function btn_onclick(){
    var mobilenav = document.getElementById('mobilenav');
    var btn = document.getElementById('mobilemenu');

    if(mobilenav.style.left== "-100%"){
        mobilenav.style.left= "50%";
        btn.src="images/icon-close.svg";
        mobilenav.style.display= "block";
    }
    else{
        mobilenav.style.left="-100%";
        btn.src = "images/icon-hamburger.svg";

    }
}
