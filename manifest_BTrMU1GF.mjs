import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { q as NOOP_MIDDLEWARE_HEADER, v as decodeKey } from './chunks/astro/server_B08J32TL.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/","cacheDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/node_modules/.astro/","outDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/veon/tmp-base-dist/","srcDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/","publicDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/public/","buildClientDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/veon/tmp-base-dist/client/","buildServerDir":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/veon/tmp-base-dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/veon/tmp-base-dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/C:/Program Files/Git/veon-demo-bibishop/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-manifest":"manifest_BTrMU1GF.mjs","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BGFHd7Rx.mjs","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BA30c3ng.js","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.B_1deo2D.js","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Makes.astro?astro&type=script&index=0&lang.ts":"_astro/Makes.astro_astro_type_script_index_0_lang.CYt3oLcc.js","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.hqsFKkyF.js","C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=1&lang.ts":"_astro/Base.astro_astro_type_script_index_1_lang.DIyhvpxU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Header.astro?astro&type=script&index=0&lang.ts","const a=document.querySelector(\"[data-header]\"),d=document.getElementById(\"hero\"),l=document.querySelector(\"[data-hero-actions]\"),s=document.querySelector(\"[data-sticky-bar]\");a&&d&&\"IntersectionObserver\"in window&&new IntersectionObserver(([e])=>a.classList.toggle(\"is-compact\",!e.isIntersecting),{rootMargin:\"-120px 0px 0px 0px\"}).observe(d);s&&l&&\"IntersectionObserver\"in window&&new IntersectionObserver(([e])=>{const r=!e.isIntersecting&&e.boundingClientRect.top<0;s.classList.toggle(\"is-shown\",r),s.toggleAttribute(\"inert\",!r)},{threshold:0}).observe(l);const t=document.querySelector(\"[data-phones]\");t&&(document.addEventListener(\"click\",e=>{t.open&&!t.contains(e.target)&&(t.open=!1)}),t.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&t.open&&(t.open=!1,t.querySelector(\"summary\")?.focus())}));const n=document.getElementById(\"menu\"),o=document.querySelector(\"[data-menu-open]\");n&&o&&(o.addEventListener(\"click\",()=>{n.showModal(),o.setAttribute(\"aria-expanded\",\"true\")}),n.querySelector(\"[data-menu-close]\")?.addEventListener(\"click\",()=>n.close()),n.addEventListener(\"close\",()=>{o.setAttribute(\"aria-expanded\",\"false\"),o.focus({preventScroll:!0})}),n.querySelectorAll(\"[data-menu-link]\").forEach(e=>e.addEventListener(\"click\",r=>{const c=e.getAttribute(\"href\"),i=c?document.querySelector(c):null;i&&(r.preventDefault(),n.close(),i.scrollIntoView({behavior:window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches?\"auto\":\"smooth\"}),history.replaceState(null,\"\",c))})));"],["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const l=/^[A-HJ-NPR-Z0-9]$/,h={А:\"A\",В:\"B\",Е:\"E\",К:\"K\",М:\"M\",Н:\"H\",О:\"O\",Р:\"P\",С:\"C\",Т:\"T\",Х:\"X\",І:\"I\",У:\"Y\"},c=document.querySelector(\"[data-vin]\"),n=c?.querySelector(\"input\"),d=c?Array.from(c.querySelectorAll(\".vin__cell\")):[],f=document.querySelector(\"[data-vin-go]\"),m=document.querySelector(\"[data-vin-status]\"),y=window.matchMedia(\"(prefers-reduced-motion: reduce)\");function s(t){return t.toUpperCase().replace(/[\\s\\-_.·]/g,\"\").split(\"\").map(e=>h[e]??e).join(\"\").slice(0,17)}function i(t){m&&(m.textContent=t)}function v(t){if(!t)return\"\";const e=t.split(\"\").filter(o=>!l.test(o));return e.some(o=>o===\"I\"||o===\"O\"||o===\"Q\")?\"У VIN немає літер I, O, Q — мабуть, це 1 або 0.\":e.length?\"У VIN лише латинські літери й цифри.\":t.length<17?`Введено ${t.length} з 17.`:\"VIN має 17 знаків — можна надсилати.\"}function g(t){return t.length===17&&t.split(\"\").every(e=>l.test(e))}let p=\"\";function a(t){d.forEach((e,o)=>{const r=t[o]??\"\",u=e.firstElementChild;u&&(u.textContent=r),e.classList.toggle(\"is-bad\",r!==\"\"&&!l.test(r)),e.classList.toggle(\"is-next\",document.activeElement===n&&o===t.length)}),t.length>p.length&&!y.matches&&d[t.length-1]?.animate([{transform:\"scale(1.14)\"},{transform:\"none\"}],{duration:200,easing:\"cubic-bezier(.2,.7,.2,1)\"}),c?.classList.toggle(\"is-complete\",g(t)),p=t}async function E(t){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(t),!0}catch{}try{const e=document.createElement(\"textarea\");e.value=t,e.setAttribute(\"readonly\",\"\"),e.style.position=\"fixed\",e.style.opacity=\"0\",document.body.appendChild(e),e.select();const o=document.execCommand(\"copy\");return e.remove(),o}catch{return!1}}if(c&&n){n.maxLength=25;const t=()=>{const e=s(n.value);n.value!==e&&(n.value=e),a(e),i(v(e))};n.addEventListener(\"input\",t),n.addEventListener(\"focus\",()=>a(s(n.value))),n.addEventListener(\"blur\",()=>a(s(n.value))),n.addEventListener(\"click\",()=>{const e=n.value.length;n.setSelectionRange(e,e)}),t()}f?.addEventListener(\"click\",async t=>{const e=n?s(n.value):\"\",o=f.href;if(t.preventDefault(),g(e)){const r=await E(e);i(r?\"VIN скопійовано. Вставте його в чат Viber.\":`Не вдалося скопіювати. Вставте VIN у чат: ${e}`)}else i(\"Вставте VIN у чат Viber або напишіть марку, модель і рік.\");window.location.href=o});"],["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/components/Makes.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\"[data-makes]\"),d=document.querySelector(\"[data-makes-picked]\"),a=document.querySelector(\"[data-makes-toggle]\");r?.addEventListener(\"click\",e=>{const t=e.target.closest(\"[data-make]\");if(!t)return;const s=t.getAttribute(\"aria-pressed\")===\"true\";r.querySelectorAll(\"[data-make]\").forEach(n=>n.setAttribute(\"aria-pressed\",\"false\")),t.setAttribute(\"aria-pressed\",s?\"false\":\"true\"),d&&(d.textContent=s?\"Оберіть марку.\":`Обрано: ${t.dataset.make}.`)});a?.addEventListener(\"click\",()=>{const e=a.getAttribute(\"aria-expanded\")!==\"true\";a.setAttribute(\"aria-expanded\",String(e)),r?.classList.toggle(\"is-open\",e),a.textContent=e?\"Згорнути марки\":\"Показати всі 30\"});"],["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts","const s=Array.from(document.querySelectorAll(\".future-link__note[aria-hidden]\"));function i(){const n=document.documentElement.clientWidth;for(const t of s)t.classList.remove(\"is-flip-right\",\"is-flip-left\"),t.getBoundingClientRect().right>n-8&&t.classList.add(\"is-flip-right\"),t.getBoundingClientRect().left<8&&(t.classList.remove(\"is-flip-right\"),t.classList.add(\"is-flip-left\"))}i();let e=0;window.addEventListener(\"resize\",()=>{cancelAnimationFrame(e),e=requestAnimationFrame(i)});"],["C:/Users/m515/Desktop/Veon/Bibishop_com_ua/site/src/layouts/Base.astro?astro&type=script&index=1&lang.ts","const t=document.querySelectorAll(\"[data-reveal]\"),i=window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;if(i||!(\"IntersectionObserver\"in window))t.forEach(e=>e.classList.add(\"is-visible\"));else{const e=new IntersectionObserver(s=>{for(const r of s)r.isIntersecting&&(r.target.classList.add(\"is-visible\"),e.unobserve(r.target))},{rootMargin:\"0px 0px -10% 0px\",threshold:.12});t.forEach(s=>e.observe(s))}"]],"assets":["/C:/Program Files/Git/veon-demo-bibishop/file:///C:/Users/m515/Desktop/Veon/Bibishop_com_ua/veon/tmp-base-dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mAEgmYbf1HJCoQ7eeHKtFFtyyTNdw+cbhHDrWMZMWnA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
