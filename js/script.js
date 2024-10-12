// Function to set the active button
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





