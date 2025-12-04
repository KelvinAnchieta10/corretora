const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Fecha o menu ao clicar em um link
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

// Ano automático no rodapé
const anoSpan = document.getElementById("anoAtual");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}
