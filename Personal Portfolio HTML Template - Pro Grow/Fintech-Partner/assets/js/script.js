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
// ------------------------------------Loader
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
  });
});
// ----------------- Youtube Video
document.addEventListener("DOMContentLoaded", function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
/*------------------------------------- Sound Pop Videos -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  $(".soundcloud").magnificPopup({
    type: "iframe", // merged and corrected
    items: {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
  });
});
// ----------------- Gallary Dersign
document.addEventListener("DOMContentLoaded", function () {
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
// ----------------------- Progress bar resume
$(document).on("DOMContentLoaded ready", function () {
  const progressSection = document.querySelector("#progress");
  if (!progressSection) {
    console.log("Element with ID 'progress' not found!");
    return;
  }
  const items = document.querySelectorAll(".progress-item");
  const colors = [
    "#C6F806",
    "#C6F806",
    "#C6F806",
    "#C6F806",
    "#C6F806",
    "#C6F806",
  ];
  const observerOptions = { threshold: 0.1 };
  function handleIntersection(entries, observer) {
    if (entries[0].isIntersecting) {
      items.forEach((item, index) => {
        let num = parseInt(item.dataset.num, 10); // ✅ radix added
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
// ----------------------- Progress bar resume two
$(document).ready(function () {
  "use strict";
  $(function () {
    function animateProgressBars(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let progressBar = $(entry.target);
          let percentage = parseInt(progressBar.attr("data-percentage"), 10); // ✅ Radix added
          progressBar
            .find(".progress-fill")
            .animate({ width: percentage + "%" }, 2000);
          progressBar.find(".progress-number-mark").animate(
            { left: percentage + "%" },
            {
              duration: 2000,
              step: function (now, fx) {
                let data = Math.round(now);
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
    document.querySelectorAll(".progress-bar").forEach((el) => {
      observer.observe(el);
    });
  });
});
// ------------ Slick slidder
document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector(".accordion");
  if (!accordion) return;
  accordion.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const buttons = accordion.querySelectorAll("button");
      const isExpanded = e.target.getAttribute("aria-expanded") === "true";
      buttons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
      if (!isExpanded) {
        e.target.setAttribute("aria-expanded", "true");
      }
    }
  });
});
// ------------ Slick slidder
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
// ------------------------- blur effect responsive
$(document).ready(function () {
  $(document).on("click", ".menu-option", function () {
    $(".blury").addClass("backky");
  });
  $(document).on("click", ".close-menu", function () {
    $(".blury").removeClass("backky");
  });
});
