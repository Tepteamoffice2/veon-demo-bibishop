// Header: compact state after the first screen, phone list disclosure, full-screen menu, sticky mobile bar.

const header = document.querySelector<HTMLElement>("[data-header]");
const hero = document.getElementById("hero");
const heroActions = document.querySelector<HTMLElement>("[data-hero-actions]");
const bar = document.querySelector<HTMLElement>("[data-sticky-bar]");

// Compact header once the hero is out of view (class swap, no height animation; the header is fixed, so nothing below moves).
if (header && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => header.classList.toggle("is-compact", !entry.isIntersecting),
    { rootMargin: "-120px 0px 0px 0px" },
  ).observe(hero);
}

// Sticky bottom bar (phones): shows once the hero's Viber/phone buttons have scrolled away.
if (bar && heroActions && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => {
      const past = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      bar.classList.toggle("is-shown", past);
      bar.toggleAttribute("inert", !past);
    },
    { threshold: 0 },
  ).observe(heroActions);
}

// Phone list: close on outside click and Escape.
const phones = document.querySelector<HTMLDetailsElement>("[data-phones]");
if (phones) {
  document.addEventListener("click", (e) => {
    if (phones.open && !phones.contains(e.target as Node)) phones.open = false;
  });
  phones.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && phones.open) {
      phones.open = false;
      phones.querySelector("summary")?.focus();
    }
  });
}

// Full-screen menu: native <dialog> (focus stays inside, Escape closes).
const menu = document.getElementById("menu") as HTMLDialogElement | null;
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
if (menu && openBtn) {
  openBtn.addEventListener("click", () => {
    menu.showModal();
    openBtn.setAttribute("aria-expanded", "true");
  });
  menu.querySelector("[data-menu-close]")?.addEventListener("click", () => menu.close());
  menu.addEventListener("close", () => {
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.focus({ preventScroll: true });
  });
  menu.querySelectorAll<HTMLAnchorElement>("[data-menu-link]").forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = id ? document.querySelector(id) : null;
      if (!target) return;
      e.preventDefault();
      menu.close();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    }),
  );
}
