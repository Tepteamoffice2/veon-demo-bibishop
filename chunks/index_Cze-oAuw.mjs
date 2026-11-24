import { c as createComponent, r as renderTemplate, a as renderScript, b as renderSlot, d as renderHead, e as addAttribute, f as createAstro, m as maybeRenderHead, g as renderComponent, F as Fragment, A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, h as UnsupportedImageConversion, t as toStyleString, N as NoImageMetadata, i as FailedToFetchRemoteImageDimensions, j as ExpectedImageOptions, k as ExpectedNotESMImage, l as InvalidImageService, n as ImageMissingAlt, s as spreadAttributes, o as ExperimentalFontsNotEnabled, p as FontFamilyNotFound, u as unescapeHTML } from './astro/server_B08J32TL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { joinPaths, isRemotePath } from '@astrojs/internal-helpers/path';
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import * as mime from 'mrmime';
import '../renderers.mjs';

const tekturUrl = "/C:/Program%20Files/Git/veon-demo-bibishop/_astro/tektur-cyrillic.cZO70csH.woff2";

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Base;
  const { lang, title, description, canonical } = Astro2.props;
  const base = "/C:/Program Files/Git/veon-demo-bibishop/".replace(/\/?$/, "/");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html", '> <head><meta charset="utf-8"><script>document.documentElement.classList.add("js")</script><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', ">", '<meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="uk_UA"><meta name="robots" content="noindex"><meta name="theme-color" content="#FFFFFF"><link rel="icon"', ' type="image/svg+xml"><!-- Only the main face is preloaded: Tektur (cyrillic) sets the H1 --><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', "", '</head> <body id="top" data-rec="R-019,R-020,R-060"> <a class="skip-link" href="#main">', "</a> ", ' <main id="main">', "</main> ", " ", " ", " </body> </html>"])), addAttribute(lang, "lang"), title, addAttribute(description, "content"), canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${base}logo-bibishop.svg`, "href"), addAttribute(tekturUrl, "href"), renderSlot($$result, $$slots["head"]), renderHead(), lang.startsWith("uk") ? "До змісту" : lang.startsWith("ru") ? "К содержанию" : "Skip to content", renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderScript($$result, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro", void 0);

const $$Astro$5 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: cls } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(["icon", cls], "class:list")} viewBox="0 0 24 24" aria-hidden="true" focusable="false"> ${name === "phone" && renderTemplate`<path d="M6.6 3.5h2.6l1.4 4-2 1.4a11 11 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"></path>`} ${name === "viber" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path d="M12 2.8c5 0 8.4 2.3 8.4 7.6 0 5.2-3.4 7.4-8.4 7.4-.8 0-1.6-.1-2.3-.2L6.4 20.6v-3.9C4.4 15.4 3.6 13.3 3.6 10.4 3.6 5.1 7 2.8 12 2.8Z"></path> <path d="M9.3 7.4h1.3l.7 1.9-.9.7a5 5 0 0 0 2.6 2.6l.7-.9 1.9.7v1.3c0 .5-.4.9-.9.9a6.3 6.3 0 0 1-6.3-6.3c0-.5.4-.9.9-.9Z"></path> ` })}`} ${name === "mail" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <rect x="3" y="5.5" width="18" height="13" rx="1"></rect> <path d="m3.5 6.5 8.5 6.5 8.5-6.5"></path> ` })}`} ${name === "map" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z"></path> <circle cx="12" cy="10" r="2.3"></circle> ` })}`} ${name === "menu" && renderTemplate`<path d="M4 7h16M4 12h16M4 17h16"></path>`} ${name === "close" && renderTemplate`<path d="M6 6l12 12M18 6 6 18"></path>`} ${name === "chevron" && renderTemplate`<path d="m7 10 5 5 5-5"></path>`} ${name === "copy" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <rect x="8.5" y="8.5" width="11" height="11" rx="1"></rect> <path d="M15.5 5.5v-1a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1"></path> ` })}`} </svg>`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Icon.astro", void 0);

const phones = [
  { e164: "+380994786008", label: "+380 99 478 60 08" },
  { e164: "+380972151190", label: "+380 97 215 11 90" },
  { e164: "+380932445898", label: "+380 93 244 58 98" },
  { e164: "+380632891517", label: "+380 63 289 15 17" }
];
const mainPhone = phones[0];
const viber = {
  href: "viber://chat?number=%2B380632891517",
  label: "+380 63 289 15 17"
};
const email = "mail@bibishop.com.ua";
const address = {
  street: "Воскресенський проспект, 11",
  short: "Воскресенський просп., 11",
  city: "Київ",
  postal: "02125",
  // A map search by the address only: the current Google pin is labelled with another company (I-002, R-013).
  mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Воскресенський проспект 11, Київ, 02125")
};
const schedule = [
  { days: "Пн–Пт", hours: "9:00–18:00" },
  { days: "Сб", hours: "9:00–16:00" },
  { days: "Нд", hours: "вихідний" }
];
const legalName = "ФОП Лазаренко О. О.";
const makes = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Citroen",
  "Daewoo",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Infiniti",
  "KIA",
  "Land Rover",
  "Lexus",
  "Mazda",
  "Mercedes",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Renault",
  "Saab",
  "Seat",
  "Skoda",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo"
];
const makesMobileVisible = 12;
const categories = [
  { name: "Запчастини для ТО", span: 4 },
  { name: "Охолодження та опалення", span: 5 },
  { name: "Деталі кузова", span: 3 },
  { name: "Гальмівна система", span: 3 },
  { name: "Двигун і система вихлопу", span: 5 },
  { name: "Підвіска і рульове", span: 4 },
  { name: "Зчеплення та трансмісія", span: 5 },
  { name: "Олива та автохімія", span: 3 },
  { name: "Електрика та освітлення", span: 4 }
];
const brands = [
  "FEBI BILSTEIN",
  "MANN",
  "BOSCH",
  "ELRING",
  "LEMFORDER",
  "VICTOR REINZ",
  "INA",
  "TRW",
  "Gates"
];
const products = [
  { brand: "Gates", article: "KP45669XS", name: "Комплект ременя ГРМ з помпою води", image: "kp45669xs" },
  { brand: "INA", article: "422006410", name: "Коромисло клапана", image: "422006410" },
  { brand: "FRENKIT", article: "254936", name: "Ремкомплект супорта з поршнем", image: "254936" }
];
const nav = [
  { href: "#makes", label: "Марки" },
  { href: "#categories", label: "Каталог" },
  { href: "#brands", label: "Бренди" },
  { href: "#delivery", label: "Доставка й оплата" },
  { href: "#contacts", label: "Контакти" }
];
const futurePages = [
  "Оплата і доставка",
  "Повернення та гарантії",
  "Договір оферти",
  "Про нас",
  "Статус замовлення"
];
const NOTE_SOON = "Розділ у розробці";

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const others = phones.slice(1);
  const base = "/C:/Program Files/Git/veon-demo-bibishop/".replace(/\/?$/, "/");
  return renderTemplate`${maybeRenderHead()}<header class="hdr" data-header data-astro-cid-3ef6ksr2> <div class="container hdr__bar" data-astro-cid-3ef6ksr2> <a class="hdr__logo" href="#top" aria-label="BiBiShop, на початок сторінки" data-astro-cid-3ef6ksr2> <img${addAttribute(`${base}logo-bibishop.svg`, "src")} width="754" height="423" alt="" data-astro-cid-3ef6ksr2> </a> <nav class="hdr__nav" aria-label="Розділи сторінки" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${nav.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.label}</a></li>`)} </ul> </nav> <div class="hdr__contact" data-astro-cid-3ef6ksr2> <div class="phones" data-rec="R-005" data-astro-cid-3ef6ksr2> <a class="phones__main num"${addAttribute(`tel:${mainPhone.e164}`, "href")} data-astro-cid-3ef6ksr2>${mainPhone.label}</a> <details class="phones__more" data-phones data-astro-cid-3ef6ksr2> <summary aria-label="Інші номери телефону" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron", "data-astro-cid-3ef6ksr2": true })} </summary> <ul class="phones__list" data-astro-cid-3ef6ksr2> ${others.map((p) => renderTemplate`<li data-astro-cid-3ef6ksr2><a class="num"${addAttribute(`tel:${p.e164}`, "href")} data-astro-cid-3ef6ksr2>${p.label}</a></li>`)} <li class="phones__viber" data-astro-cid-3ef6ksr2><a${addAttribute(viber.href, "href")} data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-3ef6ksr2": true })}<span data-astro-cid-3ef6ksr2>Viber <span class="num" data-astro-cid-3ef6ksr2>${viber.label}</span></span></a></li> </ul> </details> </div> <a class="btn hdr__viber"${addAttribute(viber.href, "href")} data-rec="R-004" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-3ef6ksr2": true })}Viber
</a> </div> <div class="hdr__icons" data-astro-cid-3ef6ksr2> <a class="hdr__icon"${addAttribute(`tel:${mainPhone.e164}`, "href")}${addAttribute(`Подзвонити ${mainPhone.label}`, "aria-label")} data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "data-astro-cid-3ef6ksr2": true })}</a> <a class="hdr__icon"${addAttribute(viber.href, "href")}${addAttribute(`Написати у Viber ${viber.label}`, "aria-label")} data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-3ef6ksr2": true })}</a> </div> <button class="hdr__icon hdr__burger" type="button" aria-label="Відкрити меню" aria-haspopup="dialog" aria-expanded="false" aria-controls="menu" data-menu-open data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "data-astro-cid-3ef6ksr2": true })} </button> </div> </header> <dialog id="menu" class="menu" aria-label="Меню" data-astro-cid-3ef6ksr2> <div class="menu__top container" data-astro-cid-3ef6ksr2> <a class="hdr__logo" href="#top" aria-label="BiBiShop, на початок сторінки" data-menu-link data-astro-cid-3ef6ksr2> <img${addAttribute(`${base}logo-bibishop.svg`, "src")} width="754" height="423" alt="" data-astro-cid-3ef6ksr2> </a> <button class="hdr__icon" type="button" aria-label="Закрити меню" data-menu-close data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "close", "data-astro-cid-3ef6ksr2": true })}</button> </div> <div class="menu__body container" data-astro-cid-3ef6ksr2> <nav aria-label="Розділи сторінки" data-astro-cid-3ef6ksr2> <ul class="menu__nav" data-astro-cid-3ef6ksr2> ${nav.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(item.href, "href")} data-menu-link data-astro-cid-3ef6ksr2>${item.label}</a></li>`)} </ul> </nav> <div class="menu__contacts" data-astro-cid-3ef6ksr2> <ul class="menu__phones" data-astro-cid-3ef6ksr2> ${phones.map((p) => renderTemplate`<li data-astro-cid-3ef6ksr2><a class="num"${addAttribute(`tel:${p.e164}`, "href")} data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "data-astro-cid-3ef6ksr2": true })}${p.label}</a></li>`)} </ul> <a class="btn menu__viber"${addAttribute(viber.href, "href")} data-astro-cid-3ef6ksr2>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-3ef6ksr2": true })}Viber <span class="num" data-astro-cid-3ef6ksr2>${viber.label}</span></a> <a class="link"${addAttribute(`mailto:${email}`, "href")} data-astro-cid-3ef6ksr2>${email}</a> </div> </div> </dialog> ${renderScript($$result, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { h1 } = Astro2.props;
  const cells = Array.from({ length: 17 }, (_, i) => i + 1);
  const dash = h1.indexOf(" \u2014 ");
  const before = dash > 0 ? h1.slice(0, h1.lastIndexOf(" ", dash - 1) + 1) : h1;
  const glued = dash > 0 ? h1.slice(before.length, dash + 2) : "";
  const after = dash > 0 ? h1.slice(dash + 2) : "";
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="hero" data-rec="R-001,S-GR005,S-MR004" data-astro-cid-bbe6dxrz> <div class="container hero__head" data-astro-cid-bbe6dxrz> <h1 data-rec="R-018" data-astro-cid-bbe6dxrz>${before}<span class="nowrap" data-astro-cid-bbe6dxrz>${glued}</span>${after}</h1> <p class="hero__lead" data-astro-cid-bbe6dxrz>Оригінали й аналоги. Менеджер підбере деталь і перевірить сумісність.</p> </div> <div class="vinband" data-rec="R-003,S-R011" data-astro-cid-bbe6dxrz> <div class="container vinband__inner" data-astro-cid-bbe6dxrz> <label class="vinband__label" for="vin" data-astro-cid-bbe6dxrz>Ваш VIN — 17 знаків</label> <div class="vin" data-vin data-astro-cid-bbe6dxrz> <input id="vin" name="vin" class="vin__input" type="text" maxlength="17" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" inputmode="text" aria-describedby="vin-hint vin-status" data-astro-cid-bbe6dxrz> <div class="vin__cells" aria-hidden="true" data-astro-cid-bbe6dxrz> ${cells.map((n) => renderTemplate`<span class="vin__cell"${addAttribute(`--i:${n - 1}`, "style")} data-astro-cid-bbe6dxrz> <span class="vin__char" data-astro-cid-bbe6dxrz></span> <span class="vin__pos num" data-astro-cid-bbe6dxrz>${n}</span> </span>`)} </div> </div> <div class="vinband__row" data-hero-actions data-astro-cid-bbe6dxrz> <a class="btn vinband__go"${addAttribute(viber.href, "href")} data-vin-go data-rec="R-003,R-004" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "name": "copy", "data-astro-cid-bbe6dxrz": true })} <span class="only-wide" data-astro-cid-bbe6dxrz>Скопіювати VIN і відкрити Viber</span> <span class="only-narrow" data-astro-cid-bbe6dxrz>Скопіювати VIN у Viber</span> </a> <a class="btn btn--on-field"${addAttribute(`tel:${mainPhone.e164}`, "href")} data-rec="R-003,R-005" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "data-astro-cid-bbe6dxrz": true })} <span class="only-wide num" data-astro-cid-bbe6dxrz>${mainPhone.label}</span> <span class="only-narrow" data-astro-cid-bbe6dxrz>Подзвонити</span> </a> <p class="vinband__status" id="vin-status" role="status" aria-live="polite" data-vin-status data-astro-cid-bbe6dxrz></p> </div> </div> </div> <div class="container" data-astro-cid-bbe6dxrz> <p class="hero__hint" id="vin-hint" data-astro-cid-bbe6dxrz>VIN є у свідоцтві про реєстрацію (техпаспорті). Немає VIN — напишіть у Viber марку, модель і рік.</p> </div> </section> ${renderScript($$result, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$FutureLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FutureLink;
  const { note, class: cls } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["future-link", cls], "class:list")} role="link" aria-disabled="true" tabindex="0"> ${renderSlot($$result, $$slots["default"])} <span class="future-link__note" aria-hidden="true">${note}</span> <span class="visually-hidden">(${note})</span> </span>`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/FutureLink.astro", void 0);

const $$Makes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="makes" class="section makes" data-rec="R-006" aria-labelledby="makes-title" data-astro-cid-gu5epg75> <div class="container" data-astro-cid-gu5epg75> <div class="section__head makes__head" data-astro-cid-gu5epg75> <h2 id="makes-title" data-astro-cid-gu5epg75>Немає VIN під рукою? Почніть з марки</h2> </div> <ul class="makes__grid" id="makes-grid" data-makes data-astro-cid-gu5epg75> ${makes.map((make, i) => renderTemplate`<li${addAttribute(["makes__item", { "is-extra": i >= makesMobileVisible }], "class:list")} data-astro-cid-gu5epg75> <button class="makes__btn" type="button" aria-pressed="false"${addAttribute(make, "data-make")} data-astro-cid-gu5epg75>${make}</button> </li>`)} </ul> <div class="makes__more" data-astro-cid-gu5epg75> <button class="btn btn--outline makes__toggle" type="button" aria-expanded="false" aria-controls="makes-grid" data-makes-toggle data-astro-cid-gu5epg75>Показати всі 30</button> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "class": "makes__all", "data-astro-cid-gu5epg75": true }, { "default": ($$result2) => renderTemplate`Ще 26 марок` })} </div> <div class="makes__answer" data-makes-answer data-astro-cid-gu5epg75> <p class="makes__hint" role="status" aria-live="polite" data-astro-cid-gu5epg75> <span data-makes-picked data-astro-cid-gu5epg75>Оберіть марку.</span>
Підбір за моделлю й роком запрацює в повній версії сайту — а зараз надішліть VIN або марку, модель і рік у Viber.
</p> <div class="makes__actions" data-astro-cid-gu5epg75> <a class="btn"${addAttribute(viber.href, "href")} data-astro-cid-gu5epg75>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-gu5epg75": true })}Написати у Viber</a> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": "\u041F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430 \u043C\u043E\u0434\u0435\u043B\u043B\u044E \u0439 \u0440\u043E\u043A\u043E\u043C \u0437\u0430\u043F\u0440\u0430\u0446\u044E\u0454 \u0432 \u043F\u043E\u0432\u043D\u0456\u0439 \u0432\u0435\u0440\u0441\u0456\u0457 \u0441\u0430\u0439\u0442\u0443", "class": "makes__future", "data-astro-cid-gu5epg75": true }, { "default": ($$result2) => renderTemplate`Обрати модель і рік` })} </div> </div> </div> </section> ${renderScript($$result, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Makes.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Makes.astro", void 0);

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="categories" class="section section--band cats" data-rec="R-006" aria-labelledby="cats-title" data-astro-cid-qacliicl> <div class="container" data-astro-cid-qacliicl> <div class="section__head" data-astro-cid-qacliicl> <h2 id="cats-title" data-astro-cid-qacliicl>Дев'ять вузлів авто — дев'ять розділів каталогу</h2> </div> <ul class="cats__grid" data-astro-cid-qacliicl> ${categories.map((c) => renderTemplate`<li class="cats__cell"${addAttribute(`--span:${c.span}`, "style")} data-astro-cid-qacliicl> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "class": "cats__link", "data-astro-cid-qacliicl": true }, { "default": ($$result2) => renderTemplate` <span class="cats__name" data-astro-cid-qacliicl>${c.name}</span> ` })} </li>`)} </ul> </div> </section> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Categories.astro", void 0);

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case "fixed":
      return `${width}px`;
    // Image is always the width of the screen
    case "full-width":
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
const baseService = {
  validateOptions(options) {
    if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.widths && options.densities) {
        throw new AstroError(IncompatibleDescriptorOptions);
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
      if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
        throw new AstroError(UnsupportedImageConversion);
      }
    }
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/C:/Program Files/Git/veon-demo-bibishop/", imageConfig.endpoint.route);
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected || "avis" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp_BGFHd7Rx.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.layout ?? "none";
  if (resolvedOptions.priority) {
    resolvedOptions.loading ??= "eager";
    resolvedOptions.decoding ??= "sync";
    resolvedOptions.fetchpriority ??= "high";
    delete resolvedOptions.priority;
  } else {
    resolvedOptions.loading ??= "lazy";
    resolvedOptions.decoding ??= "async";
    resolvedOptions.fetchpriority ??= "auto";
  }
  if (layout !== "none") {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    delete resolvedOptions.densities;
    resolvedOptions.style = addCSSVarsToStyle(
      {
        fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
        pos: resolvedOptions.position
      },
      resolvedOptions.style
    );
    resolvedOptions["data-astro-image"] = layout;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$2 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/node_modules/astro/components/Image.astro", void 0);

const $$Astro$1 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/node_modules/astro/components/Picture.astro", void 0);

const fontsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Font;
  const { internalConsumableMap } = fontsMod;
  if (!internalConsumableMap) {
    throw new AstroError(ExperimentalFontsNotEnabled);
  }
  const { cssVariable, preload = false } = Astro2.props;
  const data = internalConsumableMap.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  return renderTemplate`${preload && data.preloadData.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}<style>${unescapeHTML(data.css)}</style>`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/node_modules/astro/components/Font.astro", void 0);

const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
							const getImage = async (options) => await getImage$1(options, imageConfig);

const kp45669xs = new Proxy({"src":"/C:/Program%20Files/Git/veon-demo-bibishop/_astro/kp45669xs.DQTbozIR.webp","width":800,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/kp45669xs.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/kp45669xs.webp");
							return target[name];
						}
					});

const ina422006410 = new Proxy({"src":"/C:/Program%20Files/Git/veon-demo-bibishop/_astro/422006410.BJungNJv.webp","width":800,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/422006410.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/422006410.webp");
							return target[name];
						}
					});

const frenkit254936 = new Proxy({"src":"/C:/Program%20Files/Git/veon-demo-bibishop/_astro/254936.4soKF9zj.webp","width":618,"height":618,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/254936.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/assets/products/254936.webp");
							return target[name];
						}
					});

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const images = { kp45669xs, "422006410": ina422006410, "254936": frenkit254936 };
  return renderTemplate`${maybeRenderHead()}<section id="brands" class="section section--band brands" aria-labelledby="brands-title" data-astro-cid-syh6xvgc> <div class="container brands__grid" data-astro-cid-syh6xvgc> <div class="brands__side" data-astro-cid-syh6xvgc> <h2 id="brands-title" data-astro-cid-syh6xvgc>Оригінал чи аналог — у каталозі є обидва</h2> <ul class="brands__list" aria-label="Популярні виробники" data-astro-cid-syh6xvgc> ${brands.map((b) => renderTemplate`<li data-astro-cid-syh6xvgc>${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "class": "brands__name", "data-astro-cid-syh6xvgc": true }, { "default": ($$result2) => renderTemplate`${b}` })}</li>`)} </ul> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "class": "brands__all", "data-astro-cid-syh6xvgc": true }, { "default": ($$result2) => renderTemplate`Усі бренди` })} </div> <div class="brands__answer" data-astro-cid-syh6xvgc> <ul class="items" data-astro-cid-syh6xvgc> ${products.map((p) => renderTemplate`<li class="item" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Picture", $$Picture, { "src": images[p.image], "formats": ["avif", "webp"], "fallbackFormat": "webp", "widths": [240, 360, 480, 600].filter((w) => w <= images[p.image].width), "sizes": "(min-width: 60rem) 220px, (min-width: 40rem) 30vw, 128px", "alt": `${p.name} ${p.brand} ${p.article}`, "loading": "lazy", "decoding": "async", "class": "item__img", "data-astro-cid-syh6xvgc": true })} <div class="item__text" data-astro-cid-syh6xvgc> <p class="item__brand" data-astro-cid-syh6xvgc>${p.brand}</p> <p class="item__article num" data-astro-cid-syh6xvgc>${p.article}</p> <p class="item__name" data-astro-cid-syh6xvgc>${p.name}</p> </div> </li>`)} </ul> <div class="search" data-astro-cid-syh6xvgc> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": "\u041F\u043E\u0448\u0443\u043A \u0437\u0430\u043F\u0440\u0430\u0446\u044E\u0454 \u0432 \u043F\u043E\u0432\u043D\u0456\u0439 \u0432\u0435\u0440\u0441\u0456\u0457 \u0441\u0430\u0439\u0442\u0443", "class": "search__field", "data-astro-cid-syh6xvgc": true }, { "default": ($$result2) => renderTemplate` <span class="search__label" data-astro-cid-syh6xvgc>Пошук за артикулом</span> <span class="search__sample num" data-astro-cid-syh6xvgc>напр. KP45669XS</span> ` })} </div> </div> </div> </section> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Brands.astro", void 0);

const $$Delivery = createComponent(($$result, $$props, $$slots) => {
  const stops = [
    { fig: "\u0434\u043E 15:00", text: "\u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E 15:00 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u043C\u043E \u041D\u043E\u0432\u043E\u044E \u041F\u043E\u0448\u0442\u043E\u044E \u0442\u043E\u0433\u043E \u0436 \u0434\u043D\u044F" },
    { fig: "\u0432\u0456\u0434 80 \u0433\u0440\u043D", text: "\u041D\u043E\u0432\u0430 \u041F\u043E\u0448\u0442\u0430: \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043F\u043E\u0448\u0442\u043E\u043C\u0430\u0442, 1 \u0440\u043E\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C, \u0456\u043D\u043E\u0434\u0456 2\u20133" },
    { fig: "2 \u0433\u043E\u0434\u0438\u043D\u0438", text: "\u043A\u0443\u0440'\u0454\u0440 \u043F\u043E \u041A\u0438\u0454\u0432\u0443, 9:00\u201318:00, \u0437\u0430 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456; \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0443\u0442\u043E\u0447\u043D\u044E\u0439\u0442\u0435" },
    { fig: "0 \u0433\u0440\u043D", text: `\u0441\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437: ${address.short}` },
    { fig: "14 \u0434\u043D\u0456\u0432", text: "\u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0447\u0438 \u043E\u0431\u043C\u0456\u043D: \u0447\u0435\u043A, \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430, \u0431\u0435\u0437 \u0441\u043B\u0456\u0434\u0456\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F" }
  ];
  const pay = [
    { title: "\u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436", text: "\u043A\u043E\u043C\u0456\u0441\u0456\u044F 2% + 20 \u0433\u0440\u043D" },
    { title: "\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430", text: "100 \u0433\u0440\u043D" },
    { title: "\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0424\u041E\u041F", text: "\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u0430\u0437" },
    { title: "\u0413\u043E\u0442\u0456\u0432\u043A\u0430", text: "\u0443 \u041A\u0438\u0454\u0432\u0456" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="delivery" class="section delivery" data-rec="R-002" aria-labelledby="delivery-title" data-astro-cid-ypvisqm5> <div class="container" data-astro-cid-ypvisqm5> <div class="section__head" data-astro-cid-ypvisqm5> <h2 id="delivery-title" data-astro-cid-ypvisqm5>Від повідомлення у Viber до деталі у вас</h2> </div> <div class="route" data-reveal data-astro-cid-ypvisqm5> <span class="route__line" aria-hidden="true" data-astro-cid-ypvisqm5></span> <ol class="route__stops" data-astro-cid-ypvisqm5> ${stops.map((s) => renderTemplate`<li class="stop" data-astro-cid-ypvisqm5> <h3 class="stop__fig num" data-astro-cid-ypvisqm5>${s.fig}</h3> <p class="stop__text" data-astro-cid-ypvisqm5>${s.text}</p> </li>`)} </ol> </div> <p class="delivery__note" data-astro-cid-ypvisqm5>Укрпошта — лише з повною передоплатою.</p> <div class="pay" data-astro-cid-ypvisqm5> <h3 class="pay__title" data-astro-cid-ypvisqm5>Як оплатити</h3> <dl class="pay__list" data-astro-cid-ypvisqm5> ${pay.map((p) => renderTemplate`<div class="pay__item" data-astro-cid-ypvisqm5> <dt data-astro-cid-ypvisqm5>${p.title}</dt> <dd data-astro-cid-ypvisqm5>${p.text}</dd> </div>`)} </dl> </div> </div> </section> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Delivery.astro", void 0);

const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacts" class="section contacts" data-rec="R-012" aria-labelledby="contacts-title" data-astro-cid-7qny6o5v> <div class="container contacts__grid" data-astro-cid-7qny6o5v> <div class="contacts__place" data-astro-cid-7qny6o5v> <h2 id="contacts-title" data-astro-cid-7qny6o5v>${address.street} — приїжджайте або пишіть</h2> <p class="contacts__city" data-astro-cid-7qny6o5v>${address.city}, ${address.postal}. Самовивіз безкоштовно.</p> <a class="link contacts__map"${addAttribute(address.mapHref, "href")} target="_blank" rel="noopener" data-astro-cid-7qny6o5v>${renderComponent($$result, "Icon", $$Icon, { "name": "map", "data-astro-cid-7qny6o5v": true })}Відкрити на карті</a> <div class="hours" data-astro-cid-7qny6o5v> <h3 class="hours__title" data-astro-cid-7qny6o5v>Контакт-центр</h3> <dl class="hours__list" data-astro-cid-7qny6o5v> ${schedule.map((s) => renderTemplate`<div class="hours__row" data-astro-cid-7qny6o5v> <dt data-astro-cid-7qny6o5v>${s.days}</dt> <dd class="num" data-astro-cid-7qny6o5v>${s.hours}</dd> </div>`)} </dl> </div> </div> <div class="contacts__reach" data-astro-cid-7qny6o5v> <ul class="contacts__phones" data-rec="R-005" data-astro-cid-7qny6o5v> ${phones.map((p) => renderTemplate`<li data-astro-cid-7qny6o5v><a class="num"${addAttribute(`tel:${p.e164}`, "href")} data-astro-cid-7qny6o5v>${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "data-astro-cid-7qny6o5v": true })}${p.label}</a></li>`)} </ul> <a class="btn contacts__viber"${addAttribute(viber.href, "href")} data-rec="R-004" data-astro-cid-7qny6o5v>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-7qny6o5v": true })}Viber <span class="num" data-astro-cid-7qny6o5v>${viber.label}</span></a> <a class="contacts__mail"${addAttribute(`mailto:${email}`, "href")} data-astro-cid-7qny6o5v>${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "data-astro-cid-7qny6o5v": true })}${email}</a> </div> </div> </section> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Contacts.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const base = "/C:/Program Files/Git/veon-demo-bibishop/".replace(/\/?$/, "/");
  return renderTemplate`${maybeRenderHead()}<footer class="ftr" data-astro-cid-sz7xmlte> <div class="container ftr__grid" data-astro-cid-sz7xmlte> <div class="ftr__brand" data-astro-cid-sz7xmlte> <a class="ftr__logo" href="#top" aria-label="BiBiShop, на початок сторінки" data-astro-cid-sz7xmlte> <img${addAttribute(`${base}logo-bibishop.svg`, "src")} width="754" height="423" alt="" decoding="async" data-astro-cid-sz7xmlte> </a> <p data-astro-cid-sz7xmlte>Інтернет-магазин запчастин для іномарок.</p> <p class="ftr__legal" data-astro-cid-sz7xmlte>${legalName}, ${address.city}, ${address.street}.</p> </div> <ul class="ftr__contacts" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a class="num"${addAttribute(`tel:${mainPhone.e164}`, "href")} data-astro-cid-sz7xmlte>${mainPhone.label}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(viber.href, "href")} data-rec="R-004" data-astro-cid-sz7xmlte>Viber <span class="num" data-astro-cid-sz7xmlte>${viber.label}</span></a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(`mailto:${email}`, "href")} data-astro-cid-sz7xmlte>${email}</a></li> </ul> <nav class="ftr__pages" aria-label="Сторінки повної версії сайту" data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> ${futurePages.map((p) => renderTemplate`<li data-astro-cid-sz7xmlte>${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate`${p}` })}</li>`)} </ul> </nav> </div> <div class="container ftr__base" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© BiBiShop</p> ${renderComponent($$result, "FutureLink", $$FutureLink, { "note": NOTE_SOON, "class": "ftr__lang", "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate`Російська версія` })} </div> </footer> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Footer.astro", void 0);

const $$StickyBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sbar" data-sticky-bar data-rec="R-003" inert data-astro-cid-5qlys77k> <a class="btn btn--outline sbar__btn"${addAttribute(`tel:${mainPhone.e164}`, "href")} data-astro-cid-5qlys77k>${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "data-astro-cid-5qlys77k": true })}Подзвонити</a> <a class="btn sbar__btn"${addAttribute(viber.href, "href")} data-astro-cid-5qlys77k>${renderComponent($$result, "Icon", $$Icon, { "name": "viber", "data-astro-cid-5qlys77k": true })}Viber</a> </div> `;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/StickyBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const H1 = "\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0434\u043B\u044F \u0456\u043D\u043E\u043C\u0430\u0440\u043E\u043A \u2014 \u043F\u0456\u0434\u0431\u0435\u0440\u0435\u043C\u043E \u0437\u0430 VIN";
  const title = "\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0434\u043B\u044F \u0456\u043D\u043E\u043C\u0430\u0440\u043E\u043A \u0443 \u041A\u0438\u0454\u0432\u0456 \u2014 \u043F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430 VIN | BiBiShop";
  const description = "BiBiShop \u2014 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0442\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u0456 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0434\u043B\u044F \u0456\u043D\u043E\u043C\u0430\u0440\u043E\u043A. \u041F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430 VIN, \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430 \u041D\u043E\u0432\u043E\u044E \u041F\u043E\u0448\u0442\u043E\u044E \u0432 \u0434\u0435\u043D\u044C \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u041A\u0438\u0457\u0432 \u2014 \u0437\u0430 2 \u0433\u043E\u0434\u0438\u043D\u0438.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "BiBiShop",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postal,
      addressCountry: "UA"
    },
    telephone: phones.map((p) => p.e164),
    email
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "uk", "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "h1": H1 })} ${renderComponent($$result2, "Makes", $$Makes, {})} ${renderComponent($$result2, "Categories", $$Categories, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Delivery", $$Delivery, {})} ${renderComponent($$result2, "Contacts", $$Contacts, {})}   `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}${renderComponent($$result2, "StickyBar", $$StickyBar, { "slot": "footer" })}`, "head": async ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd))), "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/pages/index.astro", void 0);

const $$file = "C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/pages/index.astro";
const $$url = "/C:/Program Files/Git/veon-demo-bibishop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page as a, baseService as b, parseQuality as p };
