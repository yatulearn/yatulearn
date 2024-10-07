const toggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(themeIcon.name === 'sunny-outline'){
        themeIcon.name = 'moon-outline';
    }else{
        themeIcon.name = 'sunny-outline';
    }
});
// Add smooth transition
document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';