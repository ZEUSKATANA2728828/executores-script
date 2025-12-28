const aviso = document.getElementById("aviso");
const countEl = document.getElementById("count");
const toast = document.getElementById("toast");

if (localStorage.getItem("aceito")) {
  aviso.style.display = "none";
}

let downloads = localStorage.getItem("downloads") || 0;
countEl.textContent = downloads;

function aceitar() {
  localStorage.setItem("aceito", "true");
  aviso.style.display = "none";
}

function recusar() {
  window.location.href = "https://www.google.com";
}

function baixar() {
  downloads++;
  localStorage.setItem("downloads", downloads);
  countEl.textContent = downloads;

  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 2000);

  setTimeout(() => {
    window.open("https://fgd8.short.gy/DELTA", "_blank");
  }, 800);
}
