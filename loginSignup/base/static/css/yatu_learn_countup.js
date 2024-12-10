// Function to count up from 0 to the target number
function countUp(element, target) {
    let current = 0;
    const increment = target / 100; // Control how fast it counts
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + "+";
        clearInterval(interval);
      } else {
        element.textContent = Math.ceil(current);
      }
    }, 30); // Refresh rate
  }
  
  // Use IntersectionObserver to detect when the section is visible
  const stats = document.querySelectorAll('.stat-number');
  const options = {
    threshold: 0.5  // Start the count when 50% of the element is visible
  };
  
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        countUp(entry.target, target);
        observer.unobserve(entry.target); // Stop observing after the count finishes
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, options);
  stats.forEach(stat => {
    observer.observe(stat);
  });
  