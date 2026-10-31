(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const darkMq = window.matchMedia("(prefers-color-scheme: dark)");
  function applyMode() {
    const t = root.getAttribute("data-theme");
    root.setAttribute("data-mode", t || (darkMq.matches ? "dark" : "light"));
  }
  const saved = store.get("theme");
  if (saved) root.setAttribute("data-theme", saved);
  applyMode();
  darkMq.addEventListener("change", applyMode);
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-mode") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("theme", next);
    applyMode();
  });

  /* ---------- Nav: scroll state, progress, active link, mobile menu ---------- */
  const nav = $("#nav"), bar = $("#progress"), links = $("#navLinks");
  function onScroll() {
    const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 20);
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$("a", links).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => sectionObs.observe(s));

  /* ---------- Typed roles ---------- */
  const typedEl = $("#typed");
  if (reduceMotion) typedEl.textContent = S.roles[0];
  else {
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = S.roles[ri];
      ci += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, ci);
      let wait = deleting ? 35 : 70;
      if (!deleting && ci === word.length) { deleting = true; wait = 1800; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % S.roles.length; wait = 350; }
      setTimeout(tick, wait);
    })();
  }

  /* ---------- DNA helix canvas ---------- */
  (function helix() {
    const cv = $("#helix"), ctx = cv.getContext("2d");
    let w, h, dpr, t = 0, running = true, letters = [];
    const css = () => getComputedStyle(root);
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      letters = Array.from({ length: Math.round(w / 40) }, () => ({
        x: Math.random() * w, y: Math.random() * h, v: .15 + Math.random() * .35,
        c: "ATCG"[Math.floor(Math.random() * 4)], s: 10 + Math.random() * 6
      }));
    }
    function draw() {
      const a = css().getPropertyValue("--helix-a").trim(), b = css().getPropertyValue("--helix-b").trim();
      ctx.clearRect(0, 0, w, h);
      // drifting nucleotides
      ctx.font = "600 12px JetBrains Mono, monospace";
      letters.forEach((l) => {
        l.y -= l.v; if (l.y < -10) { l.y = h + 10; l.x = Math.random() * w; }
        ctx.fillStyle = `rgba(${a},0.10)`; ctx.font = `600 ${l.s}px JetBrains Mono, monospace`;
        ctx.fillText(l.c, l.x, l.y);
      });
      // double helix running diagonally across the right side
      const mobile = w < 820;
      const cx = mobile ? w * .5 : w * .72, amp = mobile ? 60 : 110, step = 16, len = h + 120;
      const tilt = mobile ? 0 : -0.18;
      for (let i = 0; i < len / step; i++) {
        const y = -60 + i * step;
        const ph = i * 0.32 + t;
        const x1 = cx + Math.sin(ph) * amp + (y - h / 2) * tilt;
        const x2 = cx + Math.sin(ph + Math.PI) * amp + (y - h / 2) * tilt;
        const z1 = (Math.cos(ph) + 1) / 2, z2 = 1 - z1;
        if (i % 2 === 0) {
          const g = ctx.createLinearGradient(x1, y, x2, y);
          g.addColorStop(0, `rgba(${a},${0.08 + z1 * 0.2})`);
          g.addColorStop(1, `rgba(${b},${0.08 + z2 * 0.2})`);
          ctx.strokeStyle = g; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${a},${0.25 + z1 * 0.6})`;
        ctx.beginPath(); ctx.arc(x1, y, 2 + z1 * 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(${b},${0.25 + z2 * 0.6})`;
        ctx.beginPath(); ctx.arc(x2, y, 2 + z2 * 3.5, 0, Math.PI * 2); ctx.fill();
      }
      t += 0.012;
    }
    function loop() { if (running) draw(); requestAnimationFrame(loop); }
    resize();
    addEventListener("resize", resize);
    if (reduceMotion) { draw(); new MutationObserver(draw).observe(root, { attributes: true }); return; }
    new IntersectionObserver(([en]) => { running = en.isIntersecting; }).observe(cv);
    loop();
  })();

  /* ---------- Reveal on scroll + counters ---------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      revealObs.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  const observeReveals = (scope = document) => $$(".reveal:not(.in)", scope).forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
    revealObs.observe(el);
  });

  const fmt = (n) => n.toLocaleString("en-US");
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
      countObs.unobserve(el);
      if (reduceMotion) { el.textContent = fmt(end) + suf; return; }
      const t0 = performance.now(), dur = 1600;
      (function step(now) {
        const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(end * e)) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.5 });
  $$("[data-count]").forEach((el) => countObs.observe(el));

  /* ---------- Skills ---------- */
  (function skills() {
    const cats = ["All", ...new Set(S.skills.map((s) => s.cat))];
    const box = $("#skillFilters"), cloud = $("#skillCloud");
    box.innerHTML = cats.map((c, i) => {
      const n = c === "All" ? S.skills.length : S.skills.filter((s) => s.cat === c).length;
      return `<button class="filter${i ? "" : " active"}" role="tab" data-cat="${esc(c)}">${esc(c)}<span class="n">${n}</span></button>`;
    }).join("");
    function render(cat) {
      const list = cat === "All" ? S.skills : S.skills.filter((s) => s.cat === cat);
      cloud.innerHTML = list.map((s, i) =>
        `<span class="skill" style="animation-delay:${i * 18}ms" title="${esc(s.cat)}">${esc(s.name)}<span class="skill__dots" aria-label="${s.level} of 5">${
          [1, 2, 3, 4, 5].map((n) => `<i class="${n <= s.level ? "on" : ""}"></i>`).join("")}</span></span>`).join("");
    }
    box.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      $$(".filter", box).forEach((x) => x.classList.toggle("active", x === b));
      render(b.dataset.cat);
    });
    render("All");
  })();

  /* ---------- Experience tabs ---------- */
  (function experience() {
    const tabs = $("#expTabs"), panel = $("#expPanel");
    tabs.innerHTML = S.experience.map((x, i) =>
      `<button class="exp__tab${i ? "" : " active"}" role="tab" data-i="${i}"><strong>${esc(x.short)}</strong><span>${esc(x.dates)}</span></button>`).join("");
    function show(i) {
      const x = S.experience[i];
      panel.innerHTML = `<h3>${esc(x.role)}</h3>
        <p class="org">${esc(x.org)}</p>
        <p class="when">${esc(x.dates)} · ${esc(x.where)}</p>
        <div class="tags">${x.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <ul>${x.points.map((p, j) => `<li style="animation-delay:${j * 40}ms">${p}</li>`).join("")}</ul>`;
      $$(".exp__tab", tabs).forEach((b) => b.classList.toggle("active", +b.dataset.i === i));
    }
    tabs.addEventListener("click", (e) => { const b = e.target.closest(".exp__tab"); if (b) show(+b.dataset.i); });
    tabs.addEventListener("keydown", (e) => {
      if (!/Arrow(Up|Down|Left|Right)/.test(e.key)) return;
      e.preventDefault();
      const cur = +$(".exp__tab.active", tabs).dataset.i, d = /Up|Left/.test(e.key) ? -1 : 1;
      const n = (cur + d + S.experience.length) % S.experience.length;
      show(n); $$(".exp__tab", tabs)[n].focus();
    });
    show(0);
  })();

  /* ---------- Publications ---------- */
  (function pubs() {
    const pubs = S.publications;
    const state = { q: "", year: null, topic: null };
    const list = $("#pubList"), chart = $("#pubChart"), topicsBox = $("#pubTopics");
    const count = $("#pubCount"), reset = $("#pubReset"), input = $("#pubSearch");

    const minY = Math.min(...pubs.map((p) => p.y)), maxY = Math.max(...pubs.map((p) => p.y));
    const byYear = {};
    for (let y = minY; y <= maxY; y++) byYear[y] = 0;
    pubs.forEach((p) => byYear[p.y]++);
    const peak = Math.max(...Object.values(byYear));
    chart.innerHTML = Object.entries(byYear).map(([y, n]) =>
      `<button class="bar" data-y="${y}" title="${n} publication${n === 1 ? "" : "s"} in ${y}" ${n ? "" : "disabled"}>
        <span class="bar__fill" data-n="${n || ""}" data-h="${(n / peak) * 82}"></span><span class="bar__y">'${String(y).slice(2)}</span></button>`).join("");
    const grow = () => $$(".bar__fill", chart).forEach((f) => (f.style.height = f.dataset.h + "%"));
    new IntersectionObserver(([en], o) => { if (en.isIntersecting) { grow(); o.disconnect(); } }, { threshold: .3 }).observe(chart);

    const topicCounts = {};
    pubs.forEach((p) => p.topics.forEach((t) => (topicCounts[t] = (topicCounts[t] || 0) + 1)));
    topicsBox.innerHTML = Object.entries(topicCounts).sort((a, b) => b[1] - a[1])
      .map(([t, n]) => `<button class="filter" data-t="${esc(t)}">${esc(t)}<span class="n">${n}</span></button>`).join("");

    const self = /(Manikandan V(inu)?|Vinu Manikandan|Vinu M)\b/g;
    function hl(text) {
      let out = esc(text);
      if (state.q) {
        const re = new RegExp("(" + state.q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        out = out.replace(re, '<mark class="hl">$1</mark>');
      }
      return out;
    }
    function render() {
      const q = state.q.toLowerCase();
      const shown = pubs.filter((p) =>
        (!state.year || p.y === state.year) &&
        (!state.topic || p.topics.includes(state.topic)) &&
        (!q || (p.t + " " + p.j + " " + p.a + " " + p.topics.join(" ")).toLowerCase().includes(q)));
      count.textContent = `${shown.length} of ${pubs.length} publications`;
      reset.hidden = !(state.q || state.year || state.topic);
      $$(".bar", chart).forEach((b) => {
        b.classList.toggle("active", +b.dataset.y === state.year);
        b.classList.toggle("dim", !!state.year && +b.dataset.y !== state.year);
      });
      $$(".filter", topicsBox).forEach((b) => b.classList.toggle("active", b.dataset.t === state.topic));
      if (!shown.length) { list.innerHTML = `<li class="empty">No publications match — try another keyword.</li>`; return; }
      list.innerHTML = shown.map((p, i) => {
        const url = p.doi ? "https://doi.org/" + p.doi : "https://scholar.google.com/scholar?q=" + encodeURIComponent(p.t);
        const authors = hl(p.a).replace(self, "<mark>$1</mark>");
        return `<li class="pub" style="animation-delay:${Math.min(i, 12) * 25}ms">
          <span class="pub__year">${p.y}</span>
          <div>
            <a class="pub__title" href="${url}" target="_blank" rel="noopener">${hl(p.t)}</a>
            <div class="pub__authors">${authors}</div>
            <div><span class="pub__journal">${hl(p.j)}</span><span class="pub__topics">${p.topics.map((t) => `<span>${esc(t)}</span>`).join("")}</span></div>
          </div></li>`;
      }).join("");
    }
    let deb;
    input.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(() => { state.q = input.value.trim(); render(); }, 120); });
    chart.addEventListener("click", (e) => {
      const b = e.target.closest(".bar"); if (!b) return;
      const y = +b.dataset.y; state.year = state.year === y ? null : y; render();
    });
    topicsBox.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      state.topic = state.topic === b.dataset.t ? null : b.dataset.t; render();
    });
    reset.addEventListener("click", () => { state.q = ""; state.year = null; state.topic = null; input.value = ""; render(); });
    render();
  })();

  /* ---------- Talks & certs ---------- */
  $("#talkList").innerHTML = S.talks.map((t) => `
    <div class="talk reveal">
      <span class="talk__y">${esc(t.y)}</span><span class="talk__dot"></span>
      <div class="talk__body">
        <h4>${esc(t.t)}</h4>
        <div class="talk__meta"><span class="talk__kind">${esc(t.kind)}</span>${esc(t.where)}</div>
        ${t.d ? `<p>${esc(t.d)}</p>` : ""}
      </div>
    </div>`).join("");

  $("#certList").innerHTML = S.certs.map((c) => `
    <li class="cert">
      <span class="cert__ico"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg></span>
      <div><div class="cert__t">${esc(c.t)}</div><div class="cert__by">${esc(c.by)}</div></div>
      ${c.y ? `<span class="cert__y">${esc(c.y)}</span>` : ""}
    </li>`).join("");

  observeReveals();

  /* ---------- Contact ---------- */
  const toast = $("#toast");
  function showToast(msg) { toast.textContent = msg; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000); }
  $("#copyEmail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText("vinumanikandan@gmail.com"); showToast("Email copied to clipboard"); }
    catch (e) { showToast("vinumanikandan@gmail.com"); }
  });
  $("#year").textContent = new Date().getFullYear();
})();
