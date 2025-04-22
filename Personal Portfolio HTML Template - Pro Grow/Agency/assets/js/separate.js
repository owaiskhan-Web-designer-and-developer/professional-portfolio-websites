// ----- counter
$(document).on("ready", function () {
  // Using .on() for event delegation on document ready
  setTimeout(() => {
    $(".counter-js").each(function () {
      const $counter = $(this);
      $counter.text("0");
      let count = 0;
      const target = parseInt($counter.data("count"), 10);
      function updateCount() {
        if (count < target) {
          count++;
          $counter.text(count);
          setTimeout(updateCount, 10);
        } else {
          $counter.text(target);
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
  $(document).on(
    "click",
    ".popup-youtube, .popup-vimeo, .popup-gmaps",
    function () {
      $(this).magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
  );
  var number = "123";
  var parsedNumber = parseInt(number, 10);
});

// ----- counter
$(document).ready(function () {
  setTimeout(() => {
    $(".counter-js").each(function () {
      const $counter = $(this);
      $counter.text("0");
      let count = 0;
      const target = parseInt($counter.data("count"), 10);
      function updateCount() {
        if (count < target) {
          count++;
          $counter.text(count);
          setTimeout(updateCount, 10);
        } else {
          $counter.text(target);
        }
      }
      updateCount();
    });
  }, 2000);
});
// --------------- language counter
$(document).ready(function () {
  "use strict";
  function animateProgressBars(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let $progressBar = $(entry.target);
        const percentage = parseInt($progressBar.attr("data-percentage"), 10);
        $progressBar
          .find(".progress-fill")
          .animate({ width: percentage + "%" }, 2000);
        $progressBar.find(".progress-number-mark").animate(
          { left: percentage + "%" },
          {
            duration: 2000,
            step: function (now) {
              const value = Math.round(now);
              $(this)
                .find(".percent")
                .html(value + "%");
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
  $(".progress-bar").each(function () {
    observer.observe(this);
  });
});
