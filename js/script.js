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
    for (let j = 0; j < totalNavList; j++) {
      navLİst[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}

const showSection = (element) => {
  const target = element.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  document.querySelector("#" + target).classList.add("active");
};
