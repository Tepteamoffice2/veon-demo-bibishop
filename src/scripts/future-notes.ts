// Keeps every FutureLink note inside the viewport: flips it to the right edge or the left edge when it would overflow.
const notes = Array.from(document.querySelectorAll<HTMLElement>(".future-link__note[aria-hidden]"));
function place(): void {
  const vw = document.documentElement.clientWidth;
  for (const n of notes) {
    n.classList.remove("is-flip-right", "is-flip-left");
    const r = n.getBoundingClientRect();
    if (r.right > vw - 8) n.classList.add("is-flip-right");
    const r2 = n.getBoundingClientRect();
    if (r2.left < 8) { n.classList.remove("is-flip-right"); n.classList.add("is-flip-left"); }
  }
}
place();
let t = 0;
window.addEventListener("resize", () => { cancelAnimationFrame(t); t = requestAnimationFrame(place); });
