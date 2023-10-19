const nav = document.getElementById("js-nav");
const ham = document.getElementById("js-hamburger");
const black = document.getElementById("black");
const topTo = document.getElementById("js-top");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
  black.classList.toggle("active");
});

//スクロール時のイベントを追加
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  if (scroll > 300) {
    topTo.classList.add("active");
  } else {
    topTo.classList.remove("active");
  }
});
