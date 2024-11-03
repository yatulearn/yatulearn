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
window.onload = function () {
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
// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function () {
  const rateUsBtn = document.getElementById('rateUsBtn');
  const rateUsPopup = document.getElementById('rateUsPopup');
  const closePopup = rateUsPopup.querySelector('.close');
  const rateUsForm = document.getElementById('rateUsForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const backToTopBtn = document.getElementById('backToTopBtn');

  rateUsBtn.onclick = function () {
    rateUsPopup.style.display = 'block';
  }

  closePopup.onclick = function () {
    rateUsPopup.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target == rateUsPopup) {
      rateUsPopup.style.display = 'none';
    }
  }

  rateUsForm.onsubmit = function (event) {
    event.preventDefault();
    const rating = document.querySelector('input[name="rating"]:checked');
    const comments = document.getElementById('comments').value;

    if (rating) {
      // Here you would typically send this data to your server
      console.log('Rating:', rating.value);
      console.log('Comments:', comments);

      // Show thank you message
      thankYouMessage.style.display = 'block';
      setTimeout(() => {
        thankYouMessage.style.display = 'none';
      }, 3000);

      rateUsPopup.style.display = 'none';
      rateUsForm.reset();
    } else {
      alert('Please select a rating before submitting.');
    }
  }

  // Back to Top button functionality
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  };

  backToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
});





