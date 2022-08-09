document.addEventListener("DOMContentLoaded", function () {
  //window.scrollTo({ top: 0, behavior: "smooth" });

  //slider
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      document.querySelector(".focused").classList.remove("focused");
      card.classList.toggle("focused");
    });
  });

  //formation slide
  const formations = [...document.querySelectorAll(".formation")];
  const formationName = document.querySelector(".formation-container-name");
  const desc = [...document.querySelectorAll(".formation-description")];

  let index = undefined;

  formations.forEach((formation) => {
    formation.addEventListener("mouseover", function transition() {
      if (index !== undefined) {
        desc[index].classList.remove("slide-right");
        formations[index].classList.remove("formation-modifier");
      }
      formationName.classList.add("desactived-display");
      desc[formations.indexOf(formation)].classList.add("slide-right");
      index = formations.indexOf(formation);

      //soulignement
      formation.classList.add("formation-modifier");
    });
  });

  //passions slide
  const passions = [...document.querySelectorAll(".passion")];
  const passionName = document.querySelector(".passion-container-name");
  const descPassion = [...document.querySelectorAll(".passion-description")];

  let indexP = undefined;

  passions.forEach((passion) => {
    passion.addEventListener("mouseover", function transition() {
      if (indexP !== undefined) {
        descPassion[indexP].classList.remove("slide-left");
        passions[indexP].classList.remove("passion-modifier");
      }
      passionName.classList.add("desactived-display");
      descPassion[passions.indexOf(passion)].classList.add("slide-left");
      indexP = passions.indexOf(passion);

      //soulignment
      passion.classList.add("passion-modifier");
    });
  });

  //Contact
  document.querySelector("#linkedin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/clement-chaban/");
  });

  document.querySelector("#phone").addEventListener("click", () => {
    document.location.href = "tel:+33604138589";
  });

  document.querySelector("#mail").addEventListener("click", () => {
    document.location.href = "mailto:chaban.clement@gmail.com?subject=&body=";
  });

  //scroll
  // const sections = [...document.querySelectorAll(".section")];
  // let active = 0;
  // let to = undefined;
  // let date = undefined;
  // let oldDate = undefined;

  // document.addEventListener("wheel", function (e) {
  //   date = Date.now();
  //   console.log(e);

  //   if (date - oldDate > 500 || oldDate == undefined) {
  //     oldDate = date;
  //     if (e.deltaY > 0) {
  //       active++;
  //       if (active > sections.length - 1) active = sections.length - 1;
  //       to = sections[active].offsetTop;

  //       //sections[active].scrollIntoView(true);
  //       window.scrollTo({ top: to, behavior: "smooth" });
  //     } else {
  //       console.log("test");
  //       active--;
  //       if (active < 0) active = 0;
  //       to = sections[active].offsetTop;
  //       //sections[active].scrollIntoView(true);
  //       window.scrollTo({ top: to, behavior: "smooth" });
  //     }
  //   }
  // });
});
