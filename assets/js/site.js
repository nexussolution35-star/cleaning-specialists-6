// The Cleaning Specialists — vanilla JS (no framework)
(function () {
  // Smooth-scroll any CTA that targets #cta-form
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-scroll="cta-form"]');
    if (t) {
      e.preventDefault();
      var el = document.getElementById('cta-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Mobile menu toggle
  var burger = document.querySelector('.hamburger');
  var mobile = document.querySelector('.mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', function () { mobile.classList.toggle('open'); });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.parentElement.classList.toggle('open');
    });
  });

  // Gallery filter
  var filters = document.querySelectorAll('.gallery-filters button');
  var items = document.querySelectorAll('.gallery-grid .g-item');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-filter');
      items.forEach(function (it) {
        it.style.display = (cat === 'all' || it.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    });
  });

  // Review carousel (CN9-style): 3-up desktop / 2-up tablet / 1-up mobile,
  // arrows + dots page through the reviews.
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var viewport = root.querySelector('.carousel-viewport');
    var track = root.querySelector('[data-track]');
    if (!viewport || !track) return;
    var n = track.children.length;
    var dotsWrap = root.parentElement.querySelector('[data-dots]');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var page = 0, pages = 1;

    function perView() {
      if (window.matchMedia('(max-width:700px)').matches) return 1;
      if (window.matchMedia('(max-width:1000px)').matches) return 2;
      return 3;
    }
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var p = 0; p < pages; p++) {
        (function (p) {
          var b = document.createElement('button');
          b.className = 'cdot' + (p === page ? ' active' : '');
          b.setAttribute('aria-label', 'Go to review page ' + (p + 1));
          b.addEventListener('click', function () { go(p); });
          dotsWrap.appendChild(b);
        })(p);
      }
      dotsWrap.style.display = pages > 1 ? '' : 'none';
    }
    function go(p) {
      page = Math.max(0, Math.min(p, pages - 1));
      track.style.transform = 'translateX(' + (-page * viewport.clientWidth) + 'px)';
      if (dotsWrap) {
        var dots = dotsWrap.children;
        for (var d = 0; d < dots.length; d++) dots[d].classList.toggle('active', d === page);
      }
      var hide = pages <= 1;
      if (prev) prev.style.display = hide ? 'none' : '';
      if (next) next.style.display = hide ? 'none' : '';
    }
    function layout() {
      pages = Math.ceil(n / perView());
      if (page > pages - 1) page = pages - 1;
      buildDots();
      go(page);
    }
    if (prev) prev.addEventListener('click', function () { go(page - 1); });
    if (next) next.addEventListener('click', function () { go(page + 1); });
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(layout, 150);
    });
    layout();
  });

  // Form submit placeholder — replace with CRM / email handler
  document.querySelectorAll('form[data-lead]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Thank you! A Specialists consultant will call you back shortly. (Connect this form to your CRM / email handler.)");
      f.reset();
    });
  });
})();
