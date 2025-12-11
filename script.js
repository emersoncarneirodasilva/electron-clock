let is24h = true;
let currentTheme = "dark";

const timeEl = document.getElementById("time");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const timezoneEl = document.getElementById("timezone");
const formatBtn = document.getElementById("toggle-format");
const themeBtn = document.getElementById("toggle-theme");
const closeBtn = document.getElementById("close-btn");

const updateClock = () => {
  const tz = timezoneEl.value;
  const now = new Date();

  const formatterTime = new Intl.DateTimeFormat("pt-BR", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24h,
  });

  const parts = formatterTime.formatToParts(now);

  const h = parts.find((p) => p.type === "hour").value;
  const m = parts.find((p) => p.type === "minute").value;
  const s = parts.find((p) => p.type === "second").value;
  const ampm = parts.find((p) => p.type === "dayPeriod")?.value || "";

  timeEl.textContent = `${h}:${m}:${s}`;
  ampmEl.textContent = is24h ? "" : ampm.toUpperCase();

  const formatterDate = new Intl.DateTimeFormat("pt-BR", {
    timeZone: tz,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  dateEl.textContent = formatterDate.format(now);
};

setInterval(updateClock, 1000);
updateClock();

/* Alternar formato */
formatBtn.onclick = () => {
  is24h = !is24h;
  formatBtn.textContent = `Formato: ${is24h ? "24h" : "12h"}`;
  updateClock();
};

/* Alternar tema */
themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  themeBtn.textContent = `Tema: ${currentTheme}`;
};

/* Fechar app */
closeBtn.onclick = () => {
  window.api.closeApp();
};
