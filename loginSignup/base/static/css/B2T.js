const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "flex"; 
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollToTop = setInterval(() => {
        if (currentScroll > 0) {
            currentScroll -= 50;
            window.scrollTo(0, currentScroll);
        } else {
            clearInterval(scrollToTop);
        }
    }, 16);
};
