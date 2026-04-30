(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    document.body.classList.add("effects-ready");

    var progress = document.createElement("div");
    progress.className = "wht-scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    function updateProgress() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      progress.style.transform = "scaleX(" + Math.min(Math.max(ratio, 0), 1) + ")";
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    var revealItems = document.querySelectorAll(
      ".home-hero, .metrics-strip > div, .research-grid article, .selected-pubs article, .news-list article, .pub-item, .ip-item, .output-summary, .visitor-panel"
    );

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(function (item) {
        item.classList.add("reveal-item");
        observer.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }

    var counters = document.querySelectorAll(".metric-value[data-count]");
    var animateCounter = function (counter) {
      var target = parseInt(counter.getAttribute("data-count"), 10);
      var suffix = counter.getAttribute("data-suffix") || "";
      var duration = 820;
      var start = performance.now();

      function tick(now) {
        var progressValue = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progressValue, 3);
        counter.textContent = Math.round(target * eased) + suffix;
        if (progressValue < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.7 });

      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    } else {
      counters.forEach(animateCounter);
    }
  });
})();
