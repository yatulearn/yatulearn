let nav = document.querySelector("nav");
let btnh = document.querySelector(".btn-home");
let btnq = document.querySelector(".qp");
let btnn = document.querySelector(".btn-notes");
let btna = document.querySelector(".btn-about");
let btndark = document.querySelector("#dark-mode");
let btnexplore = document.querySelectorAll(".btn button");
let btnRoadmap = document.querySelectorAll(".roadmap_btns button");
let btnRoadmapRight = document.querySelectorAll(".roadmap_btns_right button");
let semester = document.querySelectorAll(".semseter");

btndark.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    btnexplore.forEach((x) => {
        x.classList.toggle("dark-mode-bttns");
    });
    btnRoadmap.forEach((x) => {
        x.classList.toggle("dark-mode-bttns");
    });
    btnRoadmapRight.forEach((x) => {
        x.classList.toggle("dark-mode-bttns");
    });
    semester.forEach((x) => {
        x.classList.toggle("dark-semester");
    });
});

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

// Roadmap
let btnw = document.querySelector(".btn_web");
let btnd = document.querySelector(".btn_dsa");
let btnc = document.querySelector(".btn_cs");
let btnai = document.querySelector(".btn_ai");
let btnos = document.querySelector(".btn_os");
let btncn = document.querySelector(".btn_cn");
let i1 = document.querySelector(".img1");
let i2 = document.querySelector(".img2");
let i3 = document.querySelector(".img3");
let i4 = document.querySelector(".img4");
let i5 = document.querySelector(".img5");
let i6 = document.querySelector(".img6");

const hideAllImages = () => {
    i1.style.display = "none";
    i2.style.display = "none";
    i3.style.display = "none";
    i4.style.display = "none";
    i5.style.display = "none";
    i6.style.display = "none";
};

btnw.addEventListener("click", function () {
    hideAllImages();
    i1.style.display = "flex";
    btnw.classList.add("btn_web");
});

btnd.addEventListener("click", function () {
    hideAllImages();
    i2.style.display = "flex";
});

btnc.addEventListener("click", function () {
    hideAllImages();
    i3.style.display = "flex";
});

btnai.addEventListener("click", function () {
    hideAllImages();
    i4.style.display = "flex";
});

btnos.addEventListener("click", function () {
    hideAllImages();
    i5.style.display = "flex";
});

btncn.addEventListener("click", function () {
    hideAllImages();
    i6.style.display = "flex";
});
