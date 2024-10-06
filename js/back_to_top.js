let calcScrollValue = () => {
    let scrollProgress = document.getElementsByClassName("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    //console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(calcHeight);
    let scrollValue = Math.round(( pos * 100) / calcHeight);
    //console.log(scrollValue);

    if (pos > 100) {
        if (scrollProgress.length > 0) { // Check if any elements were found
            scrollProgress[0].style.display = "grid"; // Show the first progress element
        }
    } else {
        if (scrollProgress.length > 0) {
            scrollProgress[0].style.display = "none"; // Hide the progress element
        }
    }

      // Attach click event listener to the progress element
    if (scrollProgress.length > 0) {
        scrollProgress[0].addEventListener("click", () => {
            document.documentElement.scrollTop = 0; // Scroll to the top
        });
    }
    if(scrollProgress.length > 0){
        scrollProgress[0].style.background = `conic-gradient(#2a28a5 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
    }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;