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

    setTimeout(() => {
      overlay.style.opacity = 0;

      setTimeout(() => {
        this.startLanding(rocket, flag, dialog);
      }, 2000);
    }, 500);
  },
  methods: {
    startLanding(rocket, flag, dialog) {
      rocket.style.bottom = "9vh";

      setTimeout(() => {
        rocket.style.transition = "none";

        setTimeout(() => {
          rocket.style.transition = "opacity 1s ease";
          rocket.style.opacity = 0;

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

        setTimeout(() => {
          flag.src = "../assets/images/flag.png";
          flag.style.opacity = 1;

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
