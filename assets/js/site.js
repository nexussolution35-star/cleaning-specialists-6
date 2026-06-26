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

  // Review carousel (CN9-style): arrows + dots, one card per view
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('[data-track]');
    if (!track) return;
    var slides = track.children;
    var dotsWrap = root.parentElement.querySelector('[data-dots]');
    var dots = dotsWrap ? dotsWrap.querySelectorAll('.cdot') : [];
    var n = slides.length, i = 0;
    function go(idx) {
      i = (idx + n) % n;
      track.style.transform = 'translateX(' + (-100 * i) + '%)';
      for (var d = 0; d < dots.length; d++) dots[d].classList.toggle('active', d === i);
    }
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { go(i - 1); });
    if (next) next.addEventListener('click', function () { go(i + 1); });
    for (var d = 0; d < dots.length; d++) {
      (function (d) { dots[d].addEventListener('click', function () { go(d); }); })(d);
    }
    go(0);
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
