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

//koden søger efter alle elementer på siden, der har klassenavnet "toggle-btn".
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  // Der tilføjes en eventlistener til hvert af disse elementer, der venter på et klik.
  btn.addEventListener("click", function () {
    //Ved klik på et af disse elementer, finder koden forældreelementet til det klikkede element og gemmer det i variablen "produkt".
    var produkt = this.parentElement;

    //Der tilføjes eller fjernes klassen "open" fra forældreelementet. Hvis "open"-klassen ikke er til stede, tilføjer den klassen, og hvis den allerede er til stede, fjerner den klassen.
    produkt.classList.toggle("open");

    // Samlet set tillader denne kode, at når der klikkes på elementer med klassen "toggle-btn", ændres klassen "open" for det overordnede element, hvilket potentielt kan aktivere eller deaktivere visse visuelle eller funktionelle egenskaber på det pågældende element eller dets børneelementer.
  });
});
