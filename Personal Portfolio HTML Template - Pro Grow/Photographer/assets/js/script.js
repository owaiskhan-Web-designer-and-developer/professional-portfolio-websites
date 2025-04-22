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
// ---------------------Load More-more
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore-more").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
  });
});
// ---------------------Load More
$(document).ready(function () {
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).fadeIn(500).css("display", "flex");
  });
});
// -------------------------Type word animation
document.addEventListener("DOMContentLoaded", function () {
  const txt = ["Photographer", "Video Editor", "UI/UX Designer"];
  let i = 0,
    j = 0;
  let end = false;
  function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 500));
  }
  async function main() {
    const typedElement = document.getElementById("typed");
    if (!typedElement) return;
    if (i < txt.length) {
      if (!end && j <= txt[i].length) {
        typedElement.innerHTML += txt[i][j];
        j++;
      }
      if (end && j <= txt[i].length) {
        typedElement.innerHTML = txt[i].substring(0, j - 1);
        j--;
      }
      if (j == txt[i].length) {
        end = true;
        await wait(2);
      }
      if (end && j == 0) {
        i++;
        end = false;
      }
    } else {
      i = 0;
    }
    setTimeout(main, 200);
  }
  main();
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
// ----------------- Gallary Dersign isotope
$(".gallery").isotope({
  itemSelector: ".portfolio-items",
});
var $gallery = $(".gallery").isotope();
$(".filtering").on("click", "span", function () {
  var filterValue = $(this).attr("data-filter");
  $gallery.isotope({ filter: filterValue });
}); 
$(".filtering").on("click", "span", function () {
  $(this).addClass("active").siblings().removeClass("active");
}); 
// -------- Progress Bar design
document.addEventListener("DOMContentLoaded", function () {
  const progressSection = document.querySelector("#progress");
  const items = document.querySelectorAll(".progress-item");
  const colors = [
    "#FADE3B",
    "#FADE3B",
    "#FADE3B",
    "#FADE3B",
    "#FADE3B",
    "#FADE3B",
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
// ------------ Slider Slick
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
