/* ===== typing animation ===== */
var typed = new Typed(".typing", {
  strings: ["Jr. Web Geliştiricisiyim", "", "Jr. Web Tasarımcısıyım"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ===== Aside ===== */

const nav = document.querySelector(".nav"),
  navLİst = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length,
  totalNavList = navLİst.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navLİst[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavList; j++) {
      if (navLİst[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navLİst[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) asideSectionTogglerBtn();
  });
}

const showSection = (element) => {
  const target = element.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  document.querySelector("#" + target).classList.add("active");
};

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
