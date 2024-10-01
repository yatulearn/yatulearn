function activateButton(button) {
    // Get all buttons
    const buttons = document.querySelectorAll('.roadmap-button');

    // Check if the clicked button is already active
    if (!button.classList.contains('active')) {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
    }
}
