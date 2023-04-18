
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
}



function openNavbar() {
    document.getElementById("nav-list").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("nav-list").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);