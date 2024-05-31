// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//       navbar.setAttribute('id', 'navbar-scrolled');
//     } else {
//       navbar.removeAttribute('id');
//     }
// });


const counters = [
    { id: 'counter1', start: 87, end: 1567, current: 1 },
    { id: 'counter2', start: 260, end: 2745, current: 150 },
    { id: 'counter3', start: 1, end: 1360, current: 50 },
    { id: 'counter4', start: 230, end: 2531, current: 120 }
  ];
  const updateInterval = 1; // Adjust the update interval in milliseconds

  function updateCounters() {
    counters.forEach(counter => {
      const countElement = document.getElementById(counter.id);
      if (counter.current <= counter.end && countElement.getBoundingClientRect().bottom <= window.innerHeight) {
        countElement.textContent = counter.current;
        counter.current++;
      }
    });

    if (counters.some(counter => counter.current <= counter.end)) {
      setTimeout(() => {
        requestAnimationFrame(updateCounters);
      }, updateInterval);
    }
  }

  window.addEventListener('scroll', updateCounters);
  updateCounters();