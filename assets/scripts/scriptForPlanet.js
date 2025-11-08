const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    const overlay = document.getElementById("overlay");
    const rocket = document.getElementById("rocket");
    const flag = document.getElementById("flag");
    const dialog = document.getElementById("dialog");

    // Começa escuro → clareia
    setTimeout(() => {
      overlay.style.opacity = 0;

      // Depois que clarear, inicia pouso
      setTimeout(() => {
        this.startLanding(rocket, flag, dialog);
      }, 2000);
    }, 500);
  },
  methods: {
    startLanding(rocket, flag, dialog) {
      // Foguete desce
      rocket.style.bottom = "9vh";

      // Quando encostar no solo (3s depois)
      setTimeout(() => {
        rocket.style.transition = "none";

        setTimeout(() => {
          rocket.style.transition = "opacity 1s ease";
          rocket.style.opacity = 0;

          // 🔥 Agora o preload acontece no lugar certo
          const newRocketImg = new Image();
          newRocketImg.src = "../assets/images/rocket.png";
          newRocketImg.onload = () => {
            setTimeout(() => {
              rocket.src = newRocketImg.src;
              rocket.style.width = "450px";
              rocket.style.height = "auto";
              rocket.style.bottom = "12vh";
              rocket.style.opacity = 1;
            }, 800);
          };
        }, 600);

        // Mostra bandeira só depois da troca visual do foguete
        setTimeout(() => {
          flag.src = "../assets/images/flag.png";
          flag.style.opacity = 1;

          // 💖 Mensagem só depois da bandeira aparecer
          setTimeout(() => {
            dialog.style.opacity = 1;
            this.message = "Você conquistou o Coração do Pedro";
          }, 1200);
        }, 2000);
      }, 3000);
    }
  }
});

app.mount("#app");