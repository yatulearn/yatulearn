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
function showImage(imageNumber) {
    // Hide all images
    var images = document.querySelectorAll('.roadmap-image');
    images.forEach(function(image) {
        image.style.display = 'none';
    });

    // Show the selected image
    document.getElementById('image' + imageNumber).style.display = 'block';

    // Remove the active class from all buttons
    var buttons = document.querySelectorAll('.roadmap-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add the active class to the clicked button
    buttons[imageNumber - 1].classList.add('active');
}
