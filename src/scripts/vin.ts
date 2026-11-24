// VIN row: format check on the client (17 chars, Latin letters and digits, no I/O/Q — ISO 3779).
// Nothing is sent anywhere. The button copies the VIN to the clipboard and opens the real Viber chat;
// without a complete VIN, or if the clipboard is refused, it simply opens Viber with a hint.

const VIN_LENGTH = 17;
const VALID = /^[A-HJ-NPR-Z0-9]$/;
// Cyrillic look-alikes typed on a Ukrainian keyboard → Latin.
const LOOKALIKE: Record<string, string> = {
  "А": "A", "В": "B", "Е": "E", "К": "K", "М": "M", "Н": "H", "О": "O", "Р": "P",
  "С": "C", "Т": "T", "Х": "X", "І": "I", "У": "Y",
};

const root = document.querySelector<HTMLElement>("[data-vin]");
const input = root?.querySelector<HTMLInputElement>("input");
const cells = root ? Array.from(root.querySelectorAll<HTMLElement>(".vin__cell")) : [];
const go = document.querySelector<HTMLAnchorElement>("[data-vin-go]");
const status = document.querySelector<HTMLElement>("[data-vin-status]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

function clean(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[\s\-_.·]/g, "")
    .split("")
    .map((c) => LOOKALIKE[c] ?? c)
    .join("")
    .slice(0, VIN_LENGTH);
}

function say(text: string): void {
  if (status) status.textContent = text;
}

function describe(vin: string): string {
  if (!vin) return "";
  const bad = vin.split("").filter((c) => !VALID.test(c));
  if (bad.some((c) => c === "I" || c === "O" || c === "Q")) return "У VIN немає літер I, O, Q — мабуть, це 1 або 0.";
  if (bad.length) return "У VIN лише латинські літери й цифри.";
  if (vin.length < VIN_LENGTH) return `Введено ${vin.length} з ${VIN_LENGTH}.`;
  return "VIN має 17 знаків — можна надсилати.";
}

function isComplete(vin: string): boolean {
  return vin.length === VIN_LENGTH && vin.split("").every((c) => VALID.test(c));
}

let previous = "";

function render(vin: string): void {
  cells.forEach((cell, i) => {
    const ch = vin[i] ?? "";
    const charEl = cell.firstElementChild as HTMLElement | null;
    if (charEl) charEl.textContent = ch;
    cell.classList.toggle("is-bad", ch !== "" && !VALID.test(ch));
    cell.classList.toggle("is-next", document.activeElement === input && i === vin.length);
  });
  // Motion 2: the newly typed cell "snaps" (200 ms, transform only)
  if (vin.length > previous.length && !reduce.matches) {
    const cell = cells[vin.length - 1];
    cell?.animate([{ transform: "scale(1.14)" }, { transform: "none" }], { duration: 200, easing: "cubic-bezier(.2,.7,.2,1)" });
  }
  root?.classList.toggle("is-complete", isComplete(vin));
  previous = vin;
}

async function copy(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}

if (root && input) {
  input.maxLength = 25; // room for pasted VINs with spaces; trimmed to 17 by clean()
  const update = () => {
    const vin = clean(input.value);
    if (input.value !== vin) input.value = vin;
    render(vin);
    say(describe(vin));
  };
  input.addEventListener("input", update);
  input.addEventListener("focus", () => render(clean(input.value)));
  input.addEventListener("blur", () => render(clean(input.value)));
  // A tap anywhere on the row puts the caret at the end: the cells show the value, not a text layout.
  input.addEventListener("click", () => {
    const end = input.value.length;
    input.setSelectionRange(end, end);
  });
  update();
}

go?.addEventListener("click", async (event) => {
  const vin = input ? clean(input.value) : "";
  const href = go.href;
  event.preventDefault();
  if (isComplete(vin)) {
    const ok = await copy(vin);
    say(ok ? "VIN скопійовано. Вставте його в чат Viber." : `Не вдалося скопіювати. Вставте VIN у чат: ${vin}`);
  } else {
    say("Вставте VIN у чат Viber або напишіть марку, модель і рік.");
  }
  window.location.href = href;
});
