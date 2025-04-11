var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
let nav=document.querySelector("nav");
let btnh=document.querySelector(".btn-home");
let btnq=document.querySelector(".qp");
let btnn=document.querySelector(".btn-notes");
let btna=document.querySelector(".btn-about");
window.addEventListener("scroll",function() {
    if(window.scrollY>0){
    nav.classList.add("change");
    btnh.classList.add("change_btn");
    btnq.classList.add("change_btn");
    btnn.classList.add("change_btn");
    btna.classList.add("change_btn");
    }else{
        nav.classList.remove("change");
        btnh.classList.remove("change_btn");
        btnq.classList.remove("change_btn");
        btnn.classList.remove("change_btn");
        btna.classList.remove("change_btn");
    }
})
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
}
 nav = document.querySelector("nav");
let buttons = document.querySelectorAll("nav .btn-home, nav .qp, nav .btn-notes, nav .btn-about");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        nav.classList.add("change");
        buttons.forEach(button => button.classList.add("change_btn"));
    } else {
        nav.classList.remove("change");
        buttons.forEach(button => button.classList.remove("change_btn"));
    }
});

// Roadmap
let roadmapButtons = document.querySelectorAll(".roadmap_btns button");
let images = document.querySelectorAll(".roadmap_imgs img");

roadmapButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        images.forEach(img => img.style.display = "none"); // Hide all images
        images[index].style.display = "flex"; // Show the clicked image

        // Remove 'active' class from all buttons and add to the clicked one
        roadmapButtons.forEach(btn => btn.classList.remove("btn_web"));
        this.classList.add("btn_web");
    });
});

// Show Web Development image by default
images.forEach((img, index) => {
    if (index === 0) img.style.display = "flex"; // Show the first image (Web Development)
    else img.style.display = "none"; // Hide others
});

//  Roadmap

let btnw=document.querySelector(".btn_web");
let btnd=document.querySelector(".btn_dsa");
let btnc=document.querySelector(".btn_cs");
let btnai=document.querySelector(".btn_ai");
let btnos=document.querySelector(".btn_os");
let btncn=document.querySelector(".btn_cn");
let btndbms=document.querySelector(".btn_dbms");
let btnad=document.querySelector(".btn_ad");
let i1=document.querySelector(".img1");
let i2=document.querySelector(".img2");
let i3=document.querySelector(".img3");
let i4=document.querySelector(".img4");
let i5=document.querySelector(".img5");
let i6=document.querySelector(".img6");
let i7=document.querySelector(".img7");
let i8=document.querySelector(".img8");

btnw.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="flex";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="none";
    btnd.classList.add("occur");
    btnai.classList.add("occur");
    btnc.classList.add("occur");
    btnw.classList.add("btn_web");
    btnos.classList.add("occur");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})

btnd.addEventListener("click", function(){
    i2.style.display="flex";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="none";
    btnw.classList.add("occur");
    btnai.classList.add("occur");
    btnc.classList.add("occur");
    btnd.classList.add("btn_web");
    btnos.classList.add("occur");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})

btnc.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="flex";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="none";
    btnc.classList.add("btn_web");
    btnw.classList.add("occur");
    btnai.classList.add("occur");
    btnd.classList.add("occur");
    btnos.classList.add("occur");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})

btnai.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="flex";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="none";
    btnw.classList.add("occur");
    btnd.classList.add("occur");
    btnc.classList.add("occur");
    btnai.classList.add("btn_web");
    btnos.classList.add("occur");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})

btnos.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="flex";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="none";
    btnw.classList.add("occur");
    btnd.classList.add("occur");
    btnc.classList.add("occur");
    btnai.classList.add("occur");
    btnos.classList.add("btn_web");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})

btncn.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="flex";
    i7.style.display="none";
    i8.style.display="none";
    btnw.classList.add("occur");
    btnd.classList.add("occur");
    btnc.classList.add("occur");
    btnai.classList.add("occur");
    btnos.classList.add("occur");
    btncn.classList.add("btn_web");
    btndbms.classList.add("occur");
    btnad.classList.add("occur");
})
btndbms.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="flex";
    i8.style.display="none";
    btnw.classList.add("occur");
    btnd.classList.add("occur");
    btnc.classList.add("occur");
    btnai.classList.add("occur");
    btnos.classList.add("occur");
    btndbms.classList.add("btn_web");
    btncn.classList.add("occur");
    btnad.classList.add("occur");
})
btnad.addEventListener("click", function(){
    i2.style.display="none";
    i1.style.display="none";
    i3.style.display="none";
    i4.style.display="none";
    i5.style.display="none";
    i6.style.display="none";
    i7.style.display="none";
    i8.style.display="flex";
    btnw.classList.add("occur");
    btnd.classList.add("occur");
    btnc.classList.add("occur");
    btnai.classList.add("occur");
    btnos.classList.add("occur");
    btncn.classList.add("occur");
    btndbms.classList.add("occur");
    btnad.classList.add("btn_web");
})
