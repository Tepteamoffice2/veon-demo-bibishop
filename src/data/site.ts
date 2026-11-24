// Facts for the BiBiShop homepage. Source: veon/client.json (B-F001…B-F018) and design/concept.md.
// Nothing here is invented: no prices of goods, no counters, no reviews.

export interface Phone {
  /** E.164 for tel: links */
  e164: string;
  /** Human-readable, never truncated (R-005, I-008) */
  label: string;
}

export const phones: Phone[] = [
  { e164: "+380994786008", label: "+380 99 478 60 08" },
  { e164: "+380972151190", label: "+380 97 215 11 90" },
  { e164: "+380932445898", label: "+380 93 244 58 98" },
  { e164: "+380632891517", label: "+380 63 289 15 17" },
];

export const mainPhone = phones[0];

export const viber = {
  href: "viber://chat?number=%2B380632891517",
  label: "+380 63 289 15 17",
};

export const email = "mail@bibishop.com.ua";

export const address = {
  street: "Воскресенський проспект, 11",
  short: "Воскресенський просп., 11",
  city: "Київ",
  postal: "02125",
  // A map search by the address only: the current Google pin is labelled with another company (I-002, R-013).
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Воскресенський проспект 11, Київ, 02125"),
};

/** Contact-centre hours only: the branch hours are not confirmed (decisions.md, 2026-11-24). */
export const schedule = [
  { days: "Пн–Пт", hours: "9:00–18:00" },
  { days: "Сб", hours: "9:00–16:00" },
  { days: "Нд", hours: "вихідний" },
];

export const legalName = "ФОП Лазаренко О. О.";

/** 30 makes from the selector on the current homepage (B-F005), in the same order. */
export const makes = [
  "Audi", "BMW", "Chevrolet", "Citroen", "Daewoo", "Fiat",
  "Ford", "Honda", "Hyundai", "Infiniti", "KIA", "Land Rover",
  "Lexus", "Mazda", "Mercedes", "Mitsubishi", "Nissan", "Opel",
  "Peugeot", "Renault", "Saab", "Seat", "Skoda", "SsangYong",
  "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo",
];

/** Makes shown on a phone before «Показати всі 30». */
export const makesMobileVisible = 12;

/**
 * 9 top categories (B-F005). `span` — width on the 12-column «каса»: longer names take wider cells.
 * Rows sum to 12.
 */
export const categories = [
  { name: "Запчастини для ТО", span: 4 },
  { name: "Охолодження та опалення", span: 5 },
  { name: "Деталі кузова", span: 3 },
  { name: "Гальмівна система", span: 3 },
  { name: "Двигун і система вихлопу", span: 5 },
  { name: "Підвіска і рульове", span: 4 },
  { name: "Зчеплення та трансмісія", span: 5 },
  { name: "Олива та автохімія", span: 3 },
  { name: "Електрика та освітлення", span: 4 },
];

/** Popular part brands (client.json products_services[2]). */
export const brands = [
  "FEBI BILSTEIN", "MANN", "BOSCH", "ELRING", "LEMFORDER", "VICTOR REINZ", "INA", "TRW", "Gates",
];

/** Real catalogue items from the current homepage (audit/screens/home-desktop-s02.png); no price, no stock. */
export const products = [
  { brand: "Gates", article: "KP45669XS", name: "Комплект ременя ГРМ з помпою води", image: "kp45669xs" },
  { brand: "INA", article: "422006410", name: "Коромисло клапана", image: "422006410" },
  { brand: "FRENKIT", article: "254936", name: "Ремкомплект супорта з поршнем", image: "254936" },
] as const;

export const nav = [
  { href: "#makes", label: "Марки" },
  { href: "#categories", label: "Каталог" },
  { href: "#brands", label: "Бренди" },
  { href: "#delivery", label: "Доставка й оплата" },
  { href: "#contacts", label: "Контакти" },
];

export const futurePages = [
  "Оплата і доставка",
  "Повернення та гарантії",
  "Договір оферти",
  "Про нас",
  "Статус замовлення",
];

export const NOTE_SOON = "Розділ у розробці";
