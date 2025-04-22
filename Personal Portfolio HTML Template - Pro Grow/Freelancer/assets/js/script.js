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
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: false, value_area: 867.56 } },
      color: { value: "#00d061" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#00d061" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00d061",
        opacity: 0.52,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  const stats = new Stats();
  stats.showPanel(0);
  stats.dom.style.display = "none";
  document.body.appendChild(stats.dom); 
  const countParticles = document.querySelector(".js-count-particles"); 
  const update = () => {
    stats.begin();
    stats.end();
    if (
      countParticles &&
      window.pJSDom.length > 0 &&
      window.pJSDom[0].pJS.particles.array
    ) {
      countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  }; 
  requestAnimationFrame(update);
}); 
// -------------- Loader
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
// ----------------- Youtube Video
const $gallery = $(".gallery").isotope({
  itemSelector: ".portfolio-items",
});
$(".filtering").on("click", "span", function () {
  const filterValue = $(this).attr("data-filter");
  $gallery.isotope({ filter: filterValue });
  $(this).addClass("active").siblings().removeClass("active");
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
// --------------------Progress resume
document.addEventListener("DOMContentLoaded", function () {
  const progressSection = document.querySelector("#progress");
  if (!progressSection) {
    console.log("Element with ID 'progress' not found.");
    return;
  }
  const items = document.querySelectorAll(".progress-item");
  const colors = [
    "#00D061",
    "#00D061",
    "#00D061",
    "#00D061",
    "#00D061",
    "#00D061",
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

// ------------------------- Progress Bar Design
$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".skill-progress .progres").each(function () {
      const bottom_of_object = $(this).offset().top + $(this).outerHeight();
      const bottom_of_window = $(window).scrollTop() + $(window).height();
      const myVal = $(this).attr("data-value");

      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });
}); 
// ------------- services slick slider
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