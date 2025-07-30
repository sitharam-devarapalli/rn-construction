// home page number count section js 
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".rn-whatwe-count");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-count");
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = `${Math.ceil(count).toLocaleString()}+`;
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = `${target.toLocaleString()}+`;
        }
      };

      updateCount();
    });
  });


//   home page review section js 
  const myCarousel = document.querySelector('#testimonialCarousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // 5 seconds
    ride: 'carousel'
  });