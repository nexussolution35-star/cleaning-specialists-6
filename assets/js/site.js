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

  // Service cards "Show More" — reveal cards in batches
  document.querySelectorAll('.svc-paged-wrap').forEach(function (wrap) {
    var batch = parseInt(wrap.getAttribute('data-batch'), 10) || 3;
    var btn = wrap.querySelector('.svc-more');
    if (!btn) return;
    function refresh() {
      if (!wrap.querySelector('.svc-card.svc-hidden')) btn.style.display = 'none';
    }
    btn.addEventListener('click', function () {
      var hidden = wrap.querySelectorAll('.svc-card.svc-hidden');
      for (var i = 0; i < batch && i < hidden.length; i++) hidden[i].classList.remove('svc-hidden');
      refresh();
    });
    refresh();
  });

  // Image lightbox (shared) — open(src), close on X / outside / Esc
  var lb, lbImg;
  function buildLightbox() {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt=""/>';
    lbImg = lb.querySelector('img');
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLightbox(); });
    document.body.appendChild(lb);
  }
  function openLightbox(src, alt) {
    if (!lb) buildLightbox();
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open'); document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (lb) { lb.classList.remove('open'); document.body.style.overflow = ''; }
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  document.querySelectorAll('.gallery-grid .g-item img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { openLightbox(img.src, img.alt); });
  });

  // Our Work — centre-mode carousel (featured centred, neighbours dimmed)
  document.querySelectorAll('[data-work]').forEach(function (root) {
    var vp = root.querySelector('.work-viewport');
    var track = root.querySelector('[data-work-track]');
    if (!vp || !track) return;
    var slides = Array.prototype.slice.call(track.children);
    var n = slides.length;
    var dotsWrap = root.parentElement.querySelector('[data-work-dots]');
    var prev = root.querySelector('[data-work-prev]');
    var next = root.querySelector('[data-work-next]');
    var idx = 0;

    if (dotsWrap) {
      for (var d = 0; d < n; d++) {
        (function (d) {
          var b = document.createElement('button');
          b.className = 'cdot';
          b.setAttribute('aria-label', 'Go to project ' + (d + 1));
          b.addEventListener('click', function () { go(d); });
          dotsWrap.appendChild(b);
        })(d);
      }
    }
    function go(i) {
      idx = Math.max(0, Math.min(i, n - 1));
      var slideW = slides[0].offsetWidth;
      var center = slides[idx].offsetLeft + slideW / 2;
      track.style.transform = 'translateX(' + (vp.clientWidth / 2 - center) + 'px)';
      slides.forEach(function (s, j) { s.classList.toggle('is-active', j === idx); });
      if (dotsWrap) {
        var dd = dotsWrap.children;
        for (var k = 0; k < dd.length; k++) dd[k].classList.toggle('active', k === idx);
      }
    }
    slides.forEach(function (s, j) {
      s.addEventListener('click', function () {
        if (j === idx) { var im = s.querySelector('img'); if (im) openLightbox(im.src, im.alt); }
        else { go(j); }
      });
    });
    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (next) next.addEventListener('click', function () { go(idx + 1); });
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { go(idx); }, 150); });
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
