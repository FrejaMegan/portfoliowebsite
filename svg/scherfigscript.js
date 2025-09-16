document.addEventListener("DOMContentLoaded", function () {
  runProgram();
});

async function runProgram() {
  let selected;
  let selectedID;
  let color;
  let active;
  let infoboks;

  // 1. Load SVG
  let mySvg = await fetch("./hansscherfigkort.svg");
  let svg = await mySvg.text();
  document.querySelector("#map").innerHTML = svg;

  // 2. Find og skjul infobokse
  let info_1 = document.querySelector("#info-1");
  let info_2 = document.querySelector("#info-2");
  let info_3 = document.querySelector("#info-3");
  let info_4 = document.querySelector("#info-4");

  info_1.style.visibility = "hidden";
  info_2.style.visibility = "hidden";
  info_3.style.visibility = "hidden";
  info_4.style.visibility = "hidden";

  // 3. Klik på punkter
  document.querySelector("#points").addEventListener("click", function (evt) {
    clicked(evt);
  });

  function clicked(obj) {
    if (infoboks) infoboks.style.visibility = "hidden";

    selected = obj.target;
    selectedID = selected.getAttribute("id");
    color = selected.getAttribute("fill");

    // Vis korrekt infoboks
    if (selectedID === "punkt1") infoboks = info_1;
    if (selectedID === "punkt2") infoboks = info_2;
    if (selectedID === "punkt3") infoboks = info_3;
    if (selectedID === "punkt4") infoboks = info_4;

    if (infoboks) infoboks.style.visibility = "visible";

    // Skift farve på tidligere aktiv
    if (active && active !== selected) active.setAttribute("fill", "#32592b");

    active = selected;

    // Skift farve på valgte punkt
    if (color === "#32592b") selected.setAttribute("fill", "#123456");
    else {
      selected.setAttribute("fill", "#32592b");
      if (infoboks) infoboks.style.visibility = "hidden";
    }
  }
}
