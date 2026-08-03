(function () {
  "use strict";

  var targets = document.querySelectorAll(
    ".home-stats, .home-showcase__primary, .home-panel, .home-card, .home-talk, .home-reveal"
  );

  if (!targets.length || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  targets.forEach(function (el) {
    if (!el.classList.contains("home-reveal")) {
      el.classList.add("home-reveal");
    }
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
