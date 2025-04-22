// -------------------------Page Loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut();
    $(".loader-mask").fadeOut("slow");
  }, 1000);
});
// -------------------------cursor animation
$(window).on("mousemove", function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});
//------------------------- header active on scroll down to 100px
$(document).ready(function () {
  const $header = $("[data-header]");
  $(window).on("scroll", function () {
    const scrollTop = parseInt($(this).scrollTop(), 10);
    if (scrollTop > 50) {
      $header.addClass("active");
    } else {
      $header.removeClass("active");
    }
  });
});
// -------------------------Header navbar
$(document).ready(function () {
  $(".menu-option").on("click", function () {
    $(".menu-option").hide();
    $(".close-menu").show();
    $(".main-header-menu").addClass("open");
  });
  $(".close-menu").on("click", function () {
    $(".close-menu").hide();
    $(".menu-option").show();
    $(".main-header-menu").removeClass("open");
  });
});
// ------------------------- active header
$(document).ready(function () {
  const activeTab = localStorage.getItem("activeTab");
  if (activeTab) {
    $(`[data-tab="${activeTab}"]`).addClass("active");
  }
  $(document).on("click", ".tabs-li", function () {
    $(".tabs-li").removeClass("active");
    $(this).addClass("active");
    const tabValue = $(this).data("tab");
    localStorage.setItem("activeTab", tabValue);
  });
  if (window.location.pathname.includes("index.html")) {
    $(".tabs-li").removeClass("active");
    localStorage.removeItem("activeTab");
  }
});
// ------------------------- animation
$(document).ready(function () {
  setTimeout(() => {
    gsap.to(".animate-section", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.5,
    });
    gsap.to(".animate-section-very", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.5,
    });
  }, 1000);
});
// ------------------------- backgeround Animation Design
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
const colours = ["#351A01", "#351A01", "#351A01", "#351A01"];
const maxParticles = 100;
let particles = [];
let cx = width / 2;
let cy = height / 2;
window.addEventListener("mousemove", (e) => {
  cx = e.clientX;
  cy = e.clientY;
});
class Particle {
  constructor(x, y, vx, vy, radius, colour) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.colour = colour;
  }
  move() {
    if (this.y > height || this.y < 0 || this.x > width || this.x < 0) {
      this.reset();
    }
    this.x += this.vx;
    this.y += this.vy;
  }
  reset() {
    this.x = cx;
    this.y = cy;
    this.vx = 2 + Math.random() * -4;
    this.vy = 2 + Math.random() * -4;
    this.radius = 1 + Math.random();
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
}
function initParticles() {
  for (let i = 0; i < maxParticles; i++) {
    setTimeout(createParticle, 10 * i, i);
  }
}
function createParticle(i) {
  let p = new Particle(
    Math.floor(Math.random() * width),
    Math.floor(Math.random() * height),
    1.5 + Math.random() * -3,
    1.5 + Math.random() * -3,
    1 + Math.random(),
    colours[Math.floor(Math.random() * colours.length)]
  );
  particles.push(p);
}
function loop() {
  ctx.clearRect(0, 0, width, height);
  for (let particle of particles) {
    particle.move();
    particle.draw(ctx);
  }
  requestAnimationFrame(loop);
}
initParticles();
loop();
window.addEventListener("resize", resize);
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
// ----- counter
document.addEventListener("DOMContentLoaded", function () { 
  setTimeout(() => {
    const counters = document.querySelectorAll(".counter-js");
    counters.forEach((counter) => {
      counter.innerText = "0";
      let count = 0;
      const target = parseInt(counter.dataset.count, 10); 
      function updateCount() {
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
    });
  }, 2000);
}); 
// ------------------------- blur effect responsive
$(document).ready(function () {
  $(document).on("click", ".menu-option", function () {
    $(".blury").addClass("backky");
  });
  $(document).on("click", ".close-menu", function () {
    $(".blury").removeClass("backky");
  });
});
//  ---------------- Typed Js
$("#typed").typed({
  strings: ["Lawyer.", "Consultant.", "Attorney."],
  typeSpeed: 100,
  startDelay: 0,
  backSpeed: 60,
  backDelay: 2000,
  loop: true,
  cursorChar: "|",
  contentType: "html",
});
// --------------- Loader
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
  });
});
/*------------------------------------- Sound Pop Videos -------------------------------------*/
$(document).ready(function () {
  $(".soundcloud").magnificPopup({
    type: "soundcloud",
    items: {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    type: "iframe",
  });
});
// ----------------- Gallary Dersign
$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});
// ----------------- Youtube Video
$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
// ---------------- Progrees
$(document).ready(function () {
  "use strict";
  function animateProgressBars(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = $(entry.target);
        const percentage = parseInt(progressBar.attr("data-percentage"), 10);
        progressBar
          .find(".progress-fill")
          .animate({ width: percentage + "%" }, 2000);
        progressBar.find(".progress-number-mark").animate(
          { left: percentage + "%" },
          {
            duration: 2000,
            step: function (now, fx) {
              const data = Math.round(now);
              $(this)
                .find(".percent")
                .html(data + "%");
            },
          }
        );
        observer.unobserve(entry.target);
      }
    });
  }
  const observer = new IntersectionObserver(animateProgressBars, {
    threshold: 0.3,
  });
  $(document).ready(function () {
    $(".progress-bar").each(function () {
      observer.observe(this);
    });
  });
}); 
// ---------------- Progrees two
$(document).ready(function () {
  const progressSection = document.querySelector("#progress");
  const colors = [
    "#351A01",
    "#351A01",
    "#351A01",
    "#351A01",
    "#351A01",
    "#351A01",
  ];
  const observerOptions = { threshold: 0.1 }; 
  function handleIntersection(entries, observer) {
    if (entries[0].isIntersecting) {
      const items = document.querySelectorAll(".progress-item");
      items.forEach((item, index) => {
        let num = parseInt(item.dataset.num, 10);
        let count = 0;
        let color = colors[index % colors.length];
        let interval = setInterval(() => {
          if (count === num) {
            clearInterval(interval);
          } else {
            count++;
            item.style.background = `conic-gradient(${color} ${count}%, #F4EEE4 0deg)`;
            item.setAttribute("data-value", `${count}%`);
            item.innerHTML = `${count}%`;
          }
        }, 15);
      });
      observer.unobserve(progressSection);
    }
  } 
  if (progressSection) {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);
  } else {
    console.log("Element with ID 'progress' not found.");
  }
}); 
// ------- chart
$(document).ready(function () {
  $(".chart").easyPieChart({
    size: 160,
    barColor: "#351A01",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#6c6c6c",
    lineCap: "circle",
    animate: 2000,
  });
  $(".some-element").on("click", function () {
  });
}); 
// ------------------ Slider
$(document).ready(function () {
  $(".autoplay").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: true,
    focusOnChange: false,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });
});
