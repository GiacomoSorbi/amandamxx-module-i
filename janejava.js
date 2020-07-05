window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 0px";
    document.getElementById("logo").style.fontSize = "35px";
      document.getElementById("navbar-right").style.paddingTop = "6px";
  } else {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("logo").style.fontSize = "90px";
    document.getElementById("navbar-right").style.paddingTop = "63px";
  }
}
