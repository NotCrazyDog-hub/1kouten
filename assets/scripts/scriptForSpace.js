const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      messages: [
        'Você gosta de curiosidades, né?',
        'Sabia que, a cerca de 65 milhões de anos-luz daqui, existem duas galáxias colidindo?',
        'Elas se chamam NGC 4038 e NGC 4039.',
        'Elas eram completamente solitárias.',
        'Mas em algum momento, há cerca de 1 bilhão de anos, uma força invisível começou a unir elas.',
        'Você pode conhecer essa força como "gravidade".',
        'Mas gosto de pensar que é [ALGO MUITO MAIOR] unindo elas no meio da imensidão do universo.',
        'Elas começaram a se aproximar lentamente em uma dança cósmica.',
        'E entre todo esse caos, elas se uniram para criar algo belo...',
        'Um coração.',
        'E quando eu olho para esse lindo desenho...',
        'Eu me lembro da gente.',
        'Parece que [ALGUÉM] sorriu para nós dois lá de cima e decidiu unir a gente, não acha?',
        'Sendo bem sincero, quero construir algo lindo com você.',
        'Mesmo que os cosmos sejam caóticos, quero que nosso amor seja igual essas duas galáxias:',
        'Algo atemporal e inesquecível.',
        'Algo em processo de se tornar um só.',
        'Algo que resista ao tempo e ao espaço.',
        'Algo capaz de iluminar e mostrar a beleza, mesmo na escuridão mais profunda.',
        'Assim como você iluminou o meu mundo e me mostrou a beleza do amor.',
        'Por você, eu atravessaria anos-luz.',
        'E é por isso que...',
        'Depois de [1 ANO] juntos...',
        'Eu quero dizer algo muito especial para você agora:',
        'Anata desu kara, suki da!',
        'Em japonês, isso significa...',
        '"Eu te amo porque você é você"!',
        'Agora, segure firme, estamos prestes a aterrissar no "Coração do Pedro"!',
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
        setTimeout(() => this.showNextMessage(), 5000);
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