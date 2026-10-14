const btnKaufen = document.getElementById("btnKaufen");
const meldung = document.getElementById("meldung");

btnKaufen.addEventListener("click", function () {
    meldung.textContent = "Iphone wurde in den Warenkorb gelegt!";
});