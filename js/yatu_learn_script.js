var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
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

//  Roadmap

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

btnw.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "flex";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  btnd.classList.add("occur");
  btnai.classList.add("occur");
  btnc.classList.add("occur");
  btnw.classList.add("btn_web");
  btnos.classList.add("occur");
  btncn.classList.add("occur");
});

btnd.addEventListener("click", function () {
  i2.style.display = "flex";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  btnw.classList.add("occur");
  btnai.classList.add("occur");
  btnc.classList.add("occur");
  btnd.classList.add("btn_web");
  btnos.classList.add("occur");
  btncn.classList.add("occur");
});

btnc.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "flex";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  btnc.classList.add("btn_web");
  btnw.classList.add("occur");
  btnai.classList.add("occur");
  btnd.classList.add("occur");
  btnos.classList.add("occur");
  btncn.classList.add("occur");
});

btnai.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "flex";
  i5.style.display = "none";
  i6.style.display = "none";
  btnw.classList.add("occur");
  btnd.classList.add("occur");
  btnc.classList.add("occur");
  btnai.classList.add("btn_web");
  btnos.classList.add("occur");
  btncn.classList.add("occur");
});

btnos.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "flex";
  i6.style.display = "none";
  btnw.classList.add("occur");
  btnd.classList.add("occur");
  btnc.classList.add("occur");
  btnai.classList.add("occur");
  btnos.classList.add("btn_web");
  btncn.classList.add("occur");
});

btncn.addEventListener("click", function () {
  i2.style.display = "none";
  i1.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "flex";
  btnw.classList.add("occur");
  btnd.classList.add("occur");
  btnc.classList.add("occur");
  btnai.classList.add("occur");
  btnos.classList.add("occur");
  btncn.classList.add("btn_web");
});

// crousel
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".nav-button.next");
  const prevButton = document.querySelector(".nav-button.prev");

  let currentIndex = 0;
  let startX = 0;
  let scrollLeft = 0;
  let isDown = false;

  const getSlidesPerView = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const moveToSlide = (index) => {
    const slideWidth = slides[0].offsetWidth + 30; // Including gap
    currentIndex = index;

    // Add smooth animation class
    track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  };

  nextButton.addEventListener("click", () => {
    const maxIndex = slides.length - getSlidesPerView();
    if (currentIndex < maxIndex) {
      moveToSlide(currentIndex + 1);
    } else {
      // Add bounce effect
      track.style.transform = `translateX(${
        -slideWidth * currentIndex - 30
      }px)`;
      setTimeout(() => {
        track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
      }, 150);
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    } else {
      // Add bounce effect
      track.style.transform = `translateX(30px)`;
      setTimeout(() => {
        track.style.transform = `translateX(0px)`;
      }, 150);
    }
  });

  // Touch events
  track.addEventListener("touchstart", (e) => {
    isDown = true;
    track.style.transition = "none";
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("touchend", () => {
    isDown = false;
    track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

    const slideWidth = slides[0].offsetWidth + 30;
    const movement =
      startX - (event.changedTouches[0].pageX - track.offsetLeft);

    if (Math.abs(movement) > slideWidth / 4) {
      if (movement > 0) {
        currentIndex = Math.min(
          currentIndex + 1,
          slides.length - getSlidesPerView()
        );
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
    }

    moveToSlide(currentIndex);
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = x - startX;
    const slideWidth = slides[0].offsetWidth + 30;

    track.style.transform = `translateX(${
      -slideWidth * currentIndex + walk
    }px)`;
  });

  // Window resize handling
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      currentIndex = Math.min(currentIndex, slides.length - getSlidesPerView());
      moveToSlide(currentIndex);
    }, 250);
  });

  // Initialize
  moveToSlide(0);
});
