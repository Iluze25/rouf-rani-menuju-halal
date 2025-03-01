document.getElementById("goToAbout").addEventListener("click", function() {
    anime({
        targets: "h1",
        opacity: [1, 0],
        duration: 500,
        easing: "easeInOutQuad",
        complete: function() {
            window.location.href = "https://www.facebook.com/rouf.abatasa"; // Pindah halaman
        }
    });
});
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
