// Smooth scroll for anchor links
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href^='#']");
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

/* ========= Lightbox for Gallery ========= */
(function () {
  const gallery = document.querySelector("#smv-gallery");
  if (!gallery) return;

  const thumbs = [...gallery.querySelectorAll("[data-index]")];
  const items = thumbs.map((btn) => {
    const img = btn.querySelector("img");
    return { src: img.getAttribute("src"), alt: img.getAttribute("alt") || "" };
  });

  const lightbox = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-image");
  const capEl = document.getElementById("lightbox-caption");
  const btnClose = document.getElementById("lightbox-close");
  const btnNext = document.getElementById("lightbox-next");
  const btnPrev = document.getElementById("lightbox-prev");

  let current = 0;
  let startX = 0;

  function show(i) {
    current = (i + items.length) % items.length;
    const it = items[current];
    imgEl.src = it.src;
    imgEl.alt = it.alt;
    capEl.textContent = it.alt;
  }

  function open(i) {
    show(i);
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function next(delta = 1) {
    show(current + delta);
  }

  // Delegated click on thumbs
  gallery.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-index]");
    if (!btn) return;
    open(parseInt(btn.dataset.index, 10));
  });

  // Controls
  btnClose.addEventListener("click", close);
  btnNext.addEventListener("click", () => next(1));
  btnPrev.addEventListener("click", () => next(-1));

  // Click backdrop to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-backdrop")) {
      close();
    }
  });

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next(1);
    if (e.key === "ArrowLeft") next(-1);
  });

  // Basic swipe
  lightbox.addEventListener("pointerdown", (e) => (startX = e.clientX));
  lightbox.addEventListener("pointerup", (e) => {
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) next(dx < 0 ? 1 : -1);
  });
})();
