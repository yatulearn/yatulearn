let nav = document.querySelector("nav");
let btnh = document.querySelector(".btn-home");
let btnq = document.querySelector(".qp");
let btnn = document.querySelector(".btn-notes");
let btna = document.querySelector(".btn-about");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("change");
    btnh.classList.add("change_btn");
    btnq.classList.add("change_btn");
    btnn.classList.add("change_btn");
    btna.classList.add("change_btn");
  } else {
    nav.classList.remove("change");
    btnh.classList.remove("change_btn");
    btnq.classList.remove("change_btn");
    btnn.classList.remove("change_btn");
    btna.classList.remove("change_btn");
  }
});

let buttons = document.querySelectorAll(
  ".roadmap_btns button, .roadmap_btns_right button"
);
let i1 = document.querySelector(".img1");
let i2 = document.querySelector(".img2");
let i3 = document.querySelector(".img3");
let i4 = document.querySelector(".img4");
let i5 = document.querySelector(".img5");
let i6 = document.querySelector(".img6");

let btnw = document.querySelector(".btn_web");
let btnd = document.querySelector(".btn_dsa");
let btnc = document.querySelector(".btn_cs");
let btnai = document.querySelector(".btn_ai");
let btnos = document.querySelector(".btn_os");
let btncn = document.querySelector(".btn_cn");

btnw.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "flex";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});

btnd.addEventListener("click", function () {
  i2.style.display = "flex";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});

btnc.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "flex";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});

btnai.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "flex";
  i5.style.display = "none";
  i6.style.display = "none";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});

btnos.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "flex";
  i6.style.display = "none";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});

btncn.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "flex";
  buttons.forEach((btn) => btn.classList.remove("btn_web"));
  this.classList.add("btn_web");
});
