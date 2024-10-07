const themeIcon = document.getElementById('theme-icon');

// Check the current mode in local storage, if any
let isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Apply the initial mode
document.body.classList.toggle('dark-mode', isDarkMode);
themeIcon.textContent = isDarkMode ? 'dark_mode' : 'light_mode';

themeIcon.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Update the icon
    themeIcon.textContent = isDarkMode ? 'dark_mode' : 'light_mode';

    // Save the current mode in local storage
    localStorage.setItem('dark-mode', isDarkMode);
});


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
document.getElementById('scrollUpLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  });
  document.getElementById('scrollUpLin').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  });  
function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
const scrollUpLinks = ['scrollUpLink', 'scrollUpLin'];
scrollUpLinks.forEach(id => {
  const link = document.getElementById(id);
  if (link) {
      link.addEventListener('click', scrollToTop);
  }
});