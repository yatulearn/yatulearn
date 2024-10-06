function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);

    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
  }

  function loadTheme() {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.querySelector('#theme-toggle i').className = 'fas fa-sun';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    loadTheme();
  });

