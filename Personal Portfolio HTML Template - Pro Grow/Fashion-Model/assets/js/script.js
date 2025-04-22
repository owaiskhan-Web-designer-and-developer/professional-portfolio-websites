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
let c = document.createElement("canvas");
document.body.appendChild(c);
const getContext = () => {
  let ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  let cubes = [],
    spacing = 30,
    xPos = 0,
    n = Math.floor(window.innerWidth / spacing),
    tSpeedFactor = [0.2, 0.4, 0.6, 0.8, 1],
    i;
  const colors = ["#FADE3B", "#FADE3B", "#FADE3B"];
  for (i = 0; i < n; i++) {
    cubes.push({
      x: xPos,
      y: Math.round(Math.random() * c.height),
      width: Math.round(Math.random() * 10) * 2,
      tSpeed: tSpeedFactor[Math.floor(Math.random() * tSpeedFactor.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: 0,
      upDownFactor: Math.random() >= 0.5 ? 1 : -1,
    });
    xPos += spacing;
  }
  const draw = () => {
    let i;
    ctx.clearRect(0, 0, c.width, c.height);
    for (i = 0; i < n; i++) {
      ctx.save();
      ctx.translate(
        cubes[i].x + cubes[i].width / 2,
        cubes[i].y + cubes[i].width / 2
      );
      ctx.rotate(cubes[i].angle);
      ctx.fillStyle = cubes[i].color;
      ctx.globalAlpha = 1;
      ctx.fillRect(
        -cubes[i].width / 2,
        -cubes[i].width / 2,
        cubes[i].width,
        cubes[i].width
      );
      ctx.restore();
      cubes[i].y = cubes[i].y + cubes[i].tSpeed * cubes[i].upDownFactor;
      cubes[i].angle += Math.PI / 360;
      if (cubes[i].upDownFactor === -1) {
        if (cubes[i].y + cubes[i].width < 0) {
          cubes[i].y = c.height;
        }
      } else if (cubes[i].upDownFactor === 1) {
        if (cubes[i].y >= c.height) {
          cubes[i].y = -cubes[i].width;
        }
      }
    }
    window.requestAnimationFrame(draw);
  };
  draw();
};
document.addEventListener("DOMContentLoaded", getContext);
// ------------------------- blur effect responsive
$(document).ready(function () {
  $(document).on("click", ".menu-option", function () {
    $(".blury").addClass("backky");
  });
  $(document).on("click", ".close-menu", function () {
    $(".blury").removeClass("backky");
  });
});
// ------------------------------------Loader
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
  });
});
// ---------------- Gallary Design
$(document).ready(function () {
  var $gallery = $(".gallery").isotope({
    itemSelector: ".portfolio-items",
  });
  $(".filtering").on("click", "span", function () {
    var filterValue = $(this).attr("data-filter");
    $gallery.isotope({ filter: filterValue });
  });
  $(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
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
// ------------------------------------Progess design
document.addEventListener("DOMContentLoaded", function () {
  const progressSection = document.querySelector("#progress");
  if (!progressSection) {
    console.log("Element with ID 'progress' not found.");
    return;
  }
  const items = document.querySelectorAll(".progress-item");
  const colors = [
    "#E6033A",
    "#E6033A",
    "#E6033A",
    "#E6033A",
    "#E6033A",
    "#E6033A",
  ];
  const observerOptions = { threshold: 0.1 };
  function handleIntersection(entries, observer) {
    if (entries[0].isIntersecting) {
      items.forEach((item, index) => {
        let num = parseInt(item.dataset.num, 10); // ✅ Radix added here
        let count = 0;
        let color = colors[index % colors.length];
        let interval = setInterval(() => {
          if (count === num) {
            clearInterval(interval);
          } else {
            count++;
            item.style.background = `conic-gradient(${color} ${count}%, #121212 0deg)`;
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
// ------------------------------------Progess two design
$(document).ready(function () {
  "use strict";
  function animateProgressBars(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let progressBar = $(entry.target);
        const percentage = parseInt(progressBar.attr("data-percentage"), 10); // ✅ Radix added
        progressBar
          .find(".progress-fill")
          .animate({ width: percentage + "%" }, 2000);
        progressBar.find(".progress-number-mark").animate(
          { left: percentage + "%" },
          {
            duration: 2000,
            step: function (now) {
              var data = Math.round(now);
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
  let observer = new IntersectionObserver(animateProgressBars, {
    threshold: 0.3,
  });
  $(".progress-bar").each(function () {
    observer.observe(this);
  });
});
// ------slick slider
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
