
const btn = document.querySelector("button");
const hoverArea = document.querySelector("div")
// Efek saat hover
btn.addEventListener("mouseenter", () => {
    anime({
      targets: btn,
      translateX: 250
    });
});

// Efek saat mouse keluar
hoverArea.addEventListener("mouseleave", () => {
    anime({
      targets: btn,
      translateX: 0
    });
});
