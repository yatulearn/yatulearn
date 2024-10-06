// Function to set the active button and update the image
function setActive(button) {
    // Get all buttons inside '.roadmap_btns' and '.roadmap_btns_right'
    const buttons = document.querySelectorAll('.roadmap_btns button, .roadmap_btns_right button');

    // Remove 'active' class and reset styles from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = ''; // Reset background
        btn.style.color = ''; // Reset text color
        btn.style.boxShadow = ''; // Remove shadow
    });

    // Add 'active' class and styles to the clicked button
    button.classList.add('active');
    button.style.backgroundColor = '#fff'; // White background for active button
    button.style.color = '#000'; // Black text for active button
    button.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Add shadow for active button

    // Change the displayed image based on the clicked button
    const imageElement = document.querySelector('.roadmap_imgs img'); // Assuming only one image is shown at a time
    
    // Match based on class names
    if (button.classList.contains('btn_web')) {
        imageElement.src = 'assets/images/Ms roadmap.png';
    } else if (button.classList.contains('btn_dsa')) {
        imageElement.src = 'assets/images/DSA.png';
    } else if (button.classList.contains('btn_cs')) {
        imageElement.src = 'assets/images/Cyber Security.png';
    } else if (button.classList.contains('btn_ai')) {
        imageElement.src = 'assets/images/AI.png';
    } else if (button.classList.contains('btn_os')) {
        imageElement.src = 'assets/images/Functions-of-Operating-System-2.jpg.webp';
    } else if (button.classList.contains('btn_cn')) {
        imageElement.src = 'assets/images/cn roadmap.png';
    } else {
        imageElement.src = ''; // Default image if needed
    }
}

// Set 'Web Development' button active by default on page load
window.onload = function() {
    const defaultButton = document.querySelector('.roadmap_btns .btn_web'); // Select 'Web Development' button
    setActive(defaultButton); // Make it active
};

// Function to handle scroll up action
function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Add event listeners for scroll up links
const scrollUpLinks = ['scrollUpLink', 'scrollUpLin'];
scrollUpLinks.forEach(id => {
  const link = document.getElementById(id);
  if (link) {
      link.addEventListener('click', scrollToTop);
  }
});
