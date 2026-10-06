const L = window.LINKS || {};
document.querySelectorAll("[data-l]").forEach(a => { a.href = L[a.dataset.l] || "#"; if (/^http/.test(a.href)) { a.target = "_blank"; a.rel = "noopener"; } });

const head = document.querySelector(".top"), btn = document.querySelector(".burger");
btn.addEventListener("click", () => { const o = head.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => { head.classList.remove("open"); btn.setAttribute("aria-expanded", false); }));

// нижняя панель ВК/MAX на телефонах: прячем в самом верху и у блока контактов
const dock = document.querySelector(".dock"), hero = document.querySelector(".hero"), contacts = document.querySelector("#contacts");
const state = { hero: true, contacts: false };
const upd = () => dock.classList.toggle("show", !state.hero && !state.contacts);
new IntersectionObserver(e => { state.hero = e[0].isIntersecting; upd(); }).observe(hero);
new IntersectionObserver(e => { state.contacts = e[0].isIntersecting; upd(); }).observe(contacts);

// видео: рамка подстраивается под формат (горизонтальное/вертикальное); если файла нет — заглушка
const wrap = document.querySelector(".vid"), v = wrap.querySelector("video");
v.addEventListener("loadedmetadata", () => {
  const r = v.videoWidth / v.videoHeight;
  wrap.style.aspectRatio = v.videoWidth + "/" + v.videoHeight;
  wrap.style.maxWidth = "min(100%," + (82 * r).toFixed(1) + "svh)";
});
v.addEventListener("error", () => wrap.classList.add("no"), true);
