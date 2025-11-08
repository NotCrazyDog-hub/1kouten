const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      messages: [
        "Olá, meu amor ❤️",
        "A viagem começou...",
        "Estamos indo rumo ao coração de Pedro 💫"
      ],
      currentMessageIndex: 0,
      currentMessage: ""
    };
  },
  mounted() {
    const overlay = document.getElementById("overlay");
    const dialog = document.getElementById("dialog");
    if (!overlay || !dialog) {
      console.error("Elementos #overlay ou #dialog não encontrados!");
      return;
    }

    overlay.style.transition = "opacity 3s ease";
    dialog.style.transition = "opacity 1s ease";

    setTimeout(() => {
      overlay.style.opacity = 0;

      setTimeout(() => {
        dialog.style.opacity = 1;
        this.showNextMessage();
      }, 3000);
    }, 500);
  },
  methods: {
    showNextMessage() {
      if (this.currentMessageIndex < this.messages.length) {
        this.currentMessage = this.messages[this.currentMessageIndex];
        this.currentMessageIndex++;
        setTimeout(() => this.showNextMessage(), 3500);
      } 
      else {
        const overlay = document.getElementById("overlay");
        const dialog = document.getElementById("dialog");

        dialog.style.opacity = 0;
        overlay.style.transition = "opacity 2.5s ease";
        overlay.style.opacity = 1;

        setTimeout(() => {
          window.location.href = "planet.html";
        }, 2700);
      }
    }
  }
});

app.mount("#app");