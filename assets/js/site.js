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

  // Image lightbox (shared) — navigable: prev/next buttons, arrow keys, swipe
  var lb, lbImg, lbList = [], lbIdx = 0;
  function buildLightbox() {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button class="lightbox-nav prev" aria-label="Previous image">&#8249;</button>' +
      '<img alt=""/>' +
      '<button class="lightbox-nav next" aria-label="Next image">&#8250;</button>';
    lbImg = lb.querySelector('img');
    lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lb.querySelector('.lightbox-nav.prev').addEventListener('click', function (e) { e.stopPropagation(); lbStep(-1); });
    lb.querySelector('.lightbox-nav.next').addEventListener('click', function (e) { e.stopPropagation(); lbStep(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    var x0 = null;
    lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) lbStep(dx < 0 ? 1 : -1);
      x0 = null;
    });
    document.body.appendChild(lb);
  }
  function showLb() { var it = lbList[lbIdx]; if (it) { lbImg.src = it.src; lbImg.alt = it.alt || ''; } }
  function lbStep(d) { if (lbList.length) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); } }
  function openLightbox(list, index) {
    if (!lb) buildLightbox();
    lbList = list; lbIdx = index || 0; showLb();
    var solo = lbList.length < 2;
    lb.querySelector('.lightbox-nav.prev').style.display = solo ? 'none' : '';
    lb.querySelector('.lightbox-nav.next').style.display = solo ? 'none' : '';
    lb.classList.add('open'); document.body.style.overflow = 'hidden';
  }
  function closeLightbox() { if (lb) { lb.classList.remove('open'); document.body.style.overflow = ''; } }
  window.__openLightbox = openLightbox;
  document.addEventListener('keydown', function (e) {
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') lbStep(-1);
    else if (e.key === 'ArrowRight') lbStep(1);
  });
  // gallery grid → open lightbox at clicked index, navigable across the grid
  var gItems = Array.prototype.slice.call(document.querySelectorAll('.gallery-grid .g-item img'));
  var gList = gItems.map(function (im) { return { src: im.src, alt: im.alt }; });
  gItems.forEach(function (img, i) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { openLightbox(gList, i); });
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
    var workList = slides.map(function (s) { var im = s.querySelector('img'); return { src: im.src, alt: im.alt }; });
    slides.forEach(function (s, j) {
      s.addEventListener('click', function () {
        if (j === idx) { openLightbox(workList, j); }
        else { go(j); }
      });
    });
    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (next) next.addEventListener('click', function () { go(idx + 1); });
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { go(idx); }, 150); });
    go(0);
  });

  // Review "Read more" toggle (expand/collapse long reviews)
  document.querySelectorAll('.rev-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.rev-card');
      if (!card) return;
      var expanded = card.classList.toggle('rev-expanded');
      btn.textContent = expanded ? 'Read less' : 'Read more';
    });
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
