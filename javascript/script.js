// ===== Reusable Function for Progress Circular Bars =====
function animateCircularProgress(selector, progressSelector, endValue, color, speed = 30) {
  const progressCircle = document.querySelector(selector);
  const progressValue = document.querySelector(progressSelector);
  let startValue = 0;

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressCircle.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === endValue) clearInterval(progress);
  }, speed);
}

// Call animations for each skill
document.addEventListener("DOMContentLoaded", () => {
  animateCircularProgress(".html-css", ".html-progress", 90, "#fca61f");
  animateCircularProgress(".javascript", ".javascript-progress", 75, "#7d2ae8");
  animateCircularProgress(".php", ".php-progress", 80, "#20c997");
  animateCircularProgress(".reactjs", ".reactjs-progress", 30, "#3f396d");
});

// ===== Filter Posts Using jQuery =====
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show(1000);
    } else {
      $(".post").not("." + value).hide(1000);
      $(".post").filter("." + value).show(1000);
    }
  });
});

// ===== Sticky Navbar on Scroll =====
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-top");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      navbar.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});

// ===== Back to Top Button =====
const myButton = document.getElementById("btn-back-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { selector: ".html-css", value: 80 },
    { selector: ".javascript", value: 30 },
    { selector: ".php", value: 10 },
    { selector: ".reactjs", value: 20 },
  ];

  skills.forEach((skill) => {
    const circle = document.querySelector(skill.selector);
    const span = circle.querySelector(".progress-value");

    let start = 0;
    const end = skill.value;
    const speed = 20;
    let angle = 0;

    const interval = setInterval(() => {
      if (start >= end) {
        clearInterval(interval);
      } else {
        start++;
        angle = (start / 100) * 360;
        circle.style.background = `conic-gradient(${getComputedStyle(circle).getPropertyValue('--clr')} ${angle}deg, #e0e0e0 ${angle}deg)`;
        span.textContent = `${start}%`;
      }
    }, speed);
  });
});