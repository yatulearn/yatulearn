// Function to check login status and update button visibility
const updateButtonVisibility = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Get login status
    const loginButton = document.querySelector('.login-btn'); // Select Login button using class
    const signupButton = document.querySelector('.signup-btn'); // Select Signup button using class
    const logoutButton = document.querySelector('#logoutButton'); // Select Logout button using ID

    if (isLoggedIn) {
        // User is logged in, hide login/signup buttons and show logout button
        if (loginButton) loginButton.style.display = 'none';
        if (signupButton) signupButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'inline-block'; // Show logout button
    } else {
        // User is not logged in, show login/signup buttons and hide logout button
        if (loginButton) loginButton.style.display = 'inline-block';
        if (signupButton) signupButton.style.display = 'inline-block';
        if (logoutButton) logoutButton.style.display = 'none'; // Hide logout button
    }
};

// Function to log out the user
const logoutUser = () => {
    localStorage.setItem("isLoggedIn", "false"); // Set login status to false
    updateButtonVisibility(); // Update button visibility
    alert("You have logged out."); // Optional alert for user feedback
};

// Function to show login alert (if not logged in)
const showLoginAlert = () => {
    alert("Please log in to access this feature.");
};

// Add event listeners to links that require login
const linksToCheck = [
    { selector: '#Doubts', href: 'https://forms.gle/v4cY8FfyyhuJnWeSA' },
    { selector: 'a[href="pages/yatu_learn_qp.html"]', href: 'pages/yatu_learn_qp.html' },
    { selector: 'a[href="pages/yatu_learn_notes.html"]', href: 'pages/yatu_learn_notes.html' },
    { selector: 'a[href="pages/yatu_learn_wd.html"]', href: 'pages/yatu_learn_wd.html' },
    { selector: 'a[href="pages/yatu_learn_aiml.html"]', href: 'pages/yatu_learn_wd.html' },
    { selector: 'a[href="pages/yatu_learn_cn.html"]', href: 'pages/yatu_learn_wd.html' },
    { selector: 'a[href="pages/yatu_learn_cs.html"]', href: 'pages/yatu_learn_wd.html' },
    { selector: 'a[href="pages/yatu_learn_dsa.html"]', href: 'pages/yatu_learn_wd.html' },
    { selector: 'a[href="pages/yatu_learn_os.html"]', href: 'pages/yatu_learn_wd.html' }
];
linksToCheck.forEach(link => {
    const element = document.querySelector(link.selector);
    if (element) {
        element.addEventListener('click', function (event) {
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
            if (!isLoggedIn) {
                event.preventDefault(); // Prevent navigation if not logged in
                showLoginAlert(); // Show login alert
            } else {
                // Allow the user to navigate to the link
                window.location.href = link.href;
            }
        });
    }
});

// Call the function on page load to update button visibility
updateButtonVisibility();

// Attach logout function to the logout button
const logoutButton = document.querySelector('#logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', logoutUser);
}
