function displaymsg(){
    document.getElementById("success").style.display = "block";
    document.getElementById("contact-form").style.display = "none";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
  } else {
    document.getElementById("header-nav").style.top = "-20%";
  }
  prevScrollpos = currentScrollPos;
}