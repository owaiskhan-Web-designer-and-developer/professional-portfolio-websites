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
var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById("test"),
  ctx = canvas.getContext("2d"),
  rate = 60,
  arc = 100,
  time = 0,
  count = 0,
  size = 7,
  speed = 20,
  parts = [],
  colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
var mouse = { x: 0, y: 0 };
canvas.setAttribute("width", w);
canvas.setAttribute("height", h);
function create() {
  for (var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.random() * w,
      y: Math.random() * h,
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size,
    };
  }
}
function particles() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = Math.max(
      Math.min(15 - DistanceBetween(mouse, li) / 10, 10),
      1
    );
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle = li.c;
    if (i % 2 == 0) ctx.stroke();
    else ctx.fill();
    li.x += li.toX * (time * 0.05);
    li.y += li.toY * (time * 0.05);
    if (li.x > w) li.x = 0;
    if (li.y > h) li.y = 0;
    if (li.x < 0) li.x = w;
    if (li.y < 0) li.y = h;
  }
  if (time < speed) {
    time++;
  }
  setTimeout(particles, 1000 / rate);
}
function MouseMove(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;
}
function DistanceBetween(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
canvas.addEventListener("mousemove", MouseMove);
create();
particles();
// ------------------------- blur effect responsive
$(document).ready(function () {
  $(document).on("click", ".menu-option", function () {
    $(".blury").addClass("backky");
  });
  $(document).on("click", ".close-menu", function () {
    $(".blury").removeClass("backky");
  });
});
// ------------------------------------ Loadmore
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
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
// ----------------------------------- Glarry Isotope
$(".gallery").isotope({
  itemSelector: ".portfolio-items",
}); 
var $gallery = $(".gallery").isotope();
$(document).on("click", ".filtering span", function () {
  var filterValue = $(this).attr("data-filter");
  $gallery.isotope({ filter: filterValue });
  $(this).addClass("active").siblings().removeClass("active");
}); 
// ------------------------------------Youtube Video
$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
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
/*------------------------------------- counter -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const progressSection = document.querySelector("#progress");
  if (!progressSection) {
    console.log("Element with ID 'progress' not found.");
    return;
  }
  const items = document.querySelectorAll(".progress-item");
  const colors = [
    "#0E0086",
    "#0E0086",
    "#0E0086",
    "#0E0086",
    "#0E0086",
    "#0E0086",
  ];
  const observerOptions = { threshold: 0.1 };
  function handleIntersection(entries, observer) {
    if (entries[0].isIntersecting) {
      items.forEach((item, index) => {
        let num = parseInt(item.dataset.num, 10); 
        let count = 0;
        let color = colors[index % colors.length];
        let interval = setInterval(() => {
          if (count === num) {
            clearInterval(interval);
          } else {
            count++;
            item.style.background = `conic-gradient(${color} ${count}%, #FFF 0deg)`;
            item.setAttribute("data-value", `${count}%`);
            item.innerHTML = `${count}%`;
          }
        }, 15);
      });
      observer.unobserve(progressSection);
    }
  }
  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );
  observer.observe(progressSection);
});
// ----------- Second Progress
$(document).ready(function () {
  "use strict";
  function animateProgressBars(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $progressBar = $(entry.target);
        const percentage = $progressBar.attr("data-percentage");
        $progressBar
          .find(".progress-fill")
          .animate({ width: percentage }, 2000);
        $progressBar.find(".progress-number-mark").animate(
          { left: percentage },
          {
            duration: 2000,
            step: function (now) {
              const data = Math.round(now); 
              $(this).find(".percent").html(`${data}%`);
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
  $(document).on("mouseenter", ".progress-bar", function () {
    console.log("Hovered on progress bar!");
  });
  $(".progress-bar").each(function () {
    observer.observe(this);
  });
});
// --------------Slidder slick
$(document).ready(function () {
  $(".autoplay").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
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

