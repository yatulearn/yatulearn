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

//  Roadmap

let btnw=document.querySelector(".btn_web");
let btnd=document.querySelector(".btn_dsa");
let btnc=document.querySelector(".btn_cs");
let btnai=document.querySelector(".btn_ai");
let btnos=document.querySelector(".btn_os");
let btncn=document.querySelector(".btn_cn");
let btnvlsi=document.querySelector(".btn_vlsi");
let btniot=document.querySelector(".btn_iot");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("occur");
})

btnvlsi.addEventListener("click", function(){
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
    btncn.classList.add("occur");
    btnvlsi.classList.add("btn_web");
    btniot.classList.add("occur");
})

btniot.addEventListener("click", function(){
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
    btnvlsi.classList.add("occur");
    btniot.classList.add("btn_web");
})
