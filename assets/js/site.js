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
    burger.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      burger.innerHTML = open ? '✕' : '☰';   // ✕ when open, ☰ when closed
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Desktop "Services" dropdown — click the parent to open the menu instead of
  // navigating away (hover still opens it too).
  document.querySelectorAll('.nav .has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var li = a.parentElement;
      var wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav .has-sub.open').forEach(function (o) { o.classList.remove('open'); });
      if (!wasOpen) li.classList.add('open');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav .has-sub')) {
      document.querySelectorAll('.nav .has-sub.open').forEach(function (o) { o.classList.remove('open'); });
    }
  });

  // Mobile menu "Services" accordion
  document.querySelectorAll('.m-sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      var willOpen = !item.classList.contains('open');
      // "Why Clients Pick Us" accordion: only one panel open at a time
      var group = q.closest('.commit-acc');
      if (group && willOpen) {
        group.querySelectorAll('.faq-item.open').forEach(function (other) {
          if (other !== item) other.classList.remove('open');
        });
      }
      item.classList.toggle('open');
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

  // Review carousel. Auto-play advances ONE card every 5s and loops endlessly
  // (leading cards cloned so the wrap is seamless, then we snap back). The
  // arrows page by a FULL view (3 cards desktop / 2 tablet / 1 mobile). Dots are
  // page-based (one per page) and the active dot tracks the front card's page.
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var viewport = root.querySelector('.carousel-viewport');
    var track = root.querySelector('[data-track]');
    if (!viewport || !track) return;
    var real = Array.prototype.slice.call(track.children);
    var n = real.length;
    if (!n) return;
    var dotsWrap = root.parentElement.querySelector('[data-dots]');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var idx = 0;            // front real index; idx >= n means we're on the clones
    var pv = 3;             // cards per view (page size)
    var pages = 1;
    var clones = [];
    var timer = null;
    var busy = false;

    function perView() {
      if (window.matchMedia('(max-width:700px)').matches) return 1;
      if (window.matchMedia('(max-width:1000px)').matches) return 2;
      return 3;
    }
    function slideW() { return real[0].getBoundingClientRect().width; }
    function pageOf() { return Math.min(Math.floor((((idx % n) + n) % n) / pv), pages - 1); }

    function place(animate) {
      track.style.transition = animate ? '' : 'none';
      track.style.transform = 'translateX(' + (-idx * slideW()) + 'px)';
      if (!animate) { void track.offsetWidth; track.style.transition = ''; }
    }
    function syncDots() {
      if (!dotsWrap) return;
      var active = pageOf();
      var dots = dotsWrap.children;
      for (var d = 0; d < dots.length; d++) dots[d].classList.toggle('active', d === active);
    }
    // 1-up (mobile): fit the viewport to the active card so there's no empty
    // space below short reviews. Multi-up: let cards share the row height.
    function adjustHeight() {
      if (pv === 1) {
        var card = real[((idx % n) + n) % n];
        if (card) viewport.style.height = card.offsetHeight + 'px';
      } else {
        viewport.style.height = '';
      }
    }
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var p = 0; p < pages; p++) {
        (function (p) {
          var b = document.createElement('button');
          b.className = 'cdot';
          b.setAttribute('aria-label', 'Go to review page ' + (p + 1));
          b.addEventListener('click', function () { stop(); goTo(p * pv); start(); });
          dotsWrap.appendChild(b);
        })(p);
      }
      dotsWrap.style.display = pages > 1 ? '' : 'none';
    }
    function makeClones() {
      clones.forEach(function (c) { if (c.parentNode) track.removeChild(c); });
      clones = [];
      pv = perView();
      pages = Math.ceil(n / pv);
      for (var i = 0; i < pv; i++) {
        var c = real[i % n].cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        c.removeAttribute('id');
        track.appendChild(c);
        clones.push(c);
      }
    }
    function goTo(i) {
      if (i === idx) { syncDots(); return; }
      busy = true; idx = i; place(true); syncDots(); adjustHeight();
    }
    // auto-play: single card forward
    function step() { if (!busy) goTo(idx + 1); }
    // arrows: jump a whole page, wrapping at the ends
    function nextPage() {
      if (busy) return;
      var cp = pageOf();
      if (cp >= pages - 1) goTo(n);            // → first page (via clones), then snap home
      else goTo((cp + 1) * pv);
    }
    function prevPage() {
      if (busy) return;
      var cp = pageOf();
      if (cp <= 0) { idx = n; place(false); goTo((pages - 1) * pv); }  // jump to clone of page 1, slide back to last
      else goTo((cp - 1) * pv);
    }

    track.addEventListener('transitionend', function (e) {
      if (e.target !== track || e.propertyName !== 'transform') return;
      busy = false;
      if (idx >= n) { idx -= n; place(false); syncDots(); }   // wrapped onto clones → snap home
      adjustHeight();
    });

    function start() { stop(); timer = setInterval(step, 5000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    if (prev) prev.addEventListener('click', function () { stop(); prevPage(); start(); });
    if (next) next.addEventListener('click', function () { stop(); nextPage(); start(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    function layout() {
      var keep = ((idx % n) + n) % n;
      makeClones();
      idx = keep;
      buildDots();
      place(false);
      syncDots();
      adjustHeight();
    }
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
    layout();
    start();
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
