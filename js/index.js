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


  // home page header drop down js 
  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseenter', function () {
      const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
      const dropdownMenu = new bootstrap.Dropdown(toggle);
      dropdownMenu.show();
    });

    dropdown.addEventListener('mouseleave', function () {
      const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
      const dropdownMenu = new bootstrap.Dropdown(toggle);
      dropdownMenu.hide();
    });
  });



