const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
}

document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    var produkt = this.parentElement;
    produkt.classList.toggle("open");
  });
});
