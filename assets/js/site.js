/* AI Research Guide — interaction layer.
   No dependencies. Everything degrades gracefully without JS. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- Reading progress ------------------------------------------- */
  var bar = document.querySelector('.progress');
  var head = document.querySelector('.site-head');
  var ticking = false;

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (bar) bar.style.transform = 'scaleX(' + ratio + ')';
    if (head) head.classList.toggle('is-stuck', window.scrollY > 12);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* ---- Mobile navigation ------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ---- Scroll reveal ---------------------------------------------- */
  var revealables = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || reduced.matches) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revealables, function (el) { revealer.observe(el); });
  }

  /* ---- Stage progress line ---------------------------------------- */
  var stages = document.querySelector('.stages');
  if (stages && 'IntersectionObserver' in window) {
    var lineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.setProperty('--fill', '1');
          lineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    lineObserver.observe(stages);
  } else if (stages) {
    stages.style.setProperty('--fill', '1');
  }

  /* ---- Segmented comparison --------------------------------------- */
  var tabWrap = document.querySelector('[data-tabs]');
  if (tabWrap) {
    var tabs = tabWrap.querySelectorAll('[role="tab"]');
    var panels = document.querySelectorAll('[data-panel]');

    function select(index, focus) {
      Array.prototype.forEach.call(tabs, function (tab, i) {
        var active = i === index;
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (active && focus) tab.focus();
      });
      Array.prototype.forEach.call(panels, function (panel, i) {
        panel.hidden = i !== index;
      });
    }

    Array.prototype.forEach.call(tabs, function (tab, i) {
      tab.addEventListener('click', function () { select(i, false); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          select(next, true);
        }
      });
    });

    select(0, false);
  }

  /* ---- Evaluation checklist --------------------------------------- */
  var checklist = document.getElementById('provider-checklist');
  if (checklist) {
    var boxes = checklist.querySelectorAll('input[type="checkbox"]');
    var count = document.querySelector('[data-check-count]');
    var meter = document.querySelector('[data-check-meter]');
    var reset = document.querySelector('[data-check-reset]');
    var STORE = 'arg-pod-checklist-v1';
    var saved = {};

    try {
      saved = JSON.parse(localStorage.getItem(STORE) || '{}') || {};
    } catch (err) {
      saved = {};
    }

    function sync(persist) {
      var done = 0;
      var state = {};
      Array.prototype.forEach.call(boxes, function (box) {
        if (box.checked) done++;
        state[box.id] = box.checked;
      });
      if (count) count.textContent = done + ' / ' + boxes.length;
      if (meter) meter.style.width = (boxes.length ? (done / boxes.length) * 100 : 0) + '%';
      if (persist) {
        try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (err) { /* storage unavailable */ }
      }
    }

    Array.prototype.forEach.call(boxes, function (box) {
      if (saved[box.id]) box.checked = true;
      box.addEventListener('change', function () { sync(true); });
    });

    if (reset) {
      reset.addEventListener('click', function () {
        Array.prototype.forEach.call(boxes, function (box) { box.checked = false; });
        sync(true);
      });
    }

    sync(false);
  }

  /* ---- Active section in nav -------------------------------------- */
  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var targets = [];
    Array.prototype.forEach.call(navLinks, function (link) {
      var el = document.querySelector(link.getAttribute('href'));
      if (el) targets.push({ el: el, link: link });
    });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        targets.forEach(function (t) {
          t.link.removeAttribute('aria-current');
          if (t.el === entry.target) t.link.setAttribute('aria-current', 'true');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    targets.forEach(function (t) { sectionObserver.observe(t.el); });
  }

  /* ---- Author portrait ---------------------------------------------
     The author photograph is dropped in at assets/img/author-muhammad-dawood-khan.jpg.
     Until it exists, a monogram stands in — no stand-in portrait of a person. */
  var avatar = document.querySelector('[data-avatar]');
  if (avatar) {
    var src = avatar.getAttribute('data-avatar');
    var probe = new Image();
    probe.onload = function () {
      var img = document.createElement('img');
      img.src = src;
      img.alt = 'Muhammad Dawood Khan';
      img.width = 132;
      img.height = 132;
      img.decoding = 'async';
      avatar.textContent = '';
      avatar.appendChild(img);
    };
    probe.src = src;
  }
})();
