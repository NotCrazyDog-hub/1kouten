const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      fuelX: 0,
      fuelY: 0,
      dragging: false,
      startMouseX: 0,
      startMouseY: 0,
      startFuelX: 0,
      startFuelY: 0,
      showFuel: true,
      message: "Arraste o combustível até o foguete!",
      countdown: 10,
      countdownActive: false,
      sequenceRunning: false,
      countdownIntervalId: null
    };
  },
  methods: {
    startDrag(event) {
      if (this.sequenceRunning) return;
      this.dragging = true;
      this.startMouseX = event.clientX;
      this.startMouseY = event.clientY;
      this.startFuelX = this.fuelX;
      this.startFuelY = this.fuelY;

      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);
    },

    onDrag(event) {
      if (this.dragging) {
        this.fuelX = this.startFuelX + (event.clientX - this.startMouseX);
        this.fuelY = this.startFuelY + (event.clientY - this.startMouseY);
      }
    },

    stopDrag() {
      if (this.sequenceRunning) {
        this.dragging = false;
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("mouseup", this.stopDrag);
        return;
      }

      this.dragging = false;
      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);

      const rocket = document.getElementById("rocket");
      const rocketRect = rocket.getBoundingClientRect();
      const fuel = document.getElementById("fuel");
      if (!fuel) return;
      const fuelRect = fuel.getBoundingClientRect();

      if (
        fuelRect.right > rocketRect.left &&
        fuelRect.left < rocketRect.right &&
        fuelRect.bottom > rocketRect.top &&
        fuelRect.top < rocketRect.bottom
      ) {
        this.sequenceRunning = true;

        if (this.$refs && this.$refs.rocketSound) {
          try {
            this.$refs.rocketSound.pause();
            this.$refs.rocketSound.currentTime = 0;
            this.$refs.rocketSound.play().catch(() => {});
          } catch (e) {}
        }

        this.showFuel = false;

        setTimeout(() => {
          this.startCountdown();
        }, 1000);
      }
    },

    startCountdown() {
      if (this.countdownActive) return;
      this.countdownActive = true;
      this.countdown = 10;
      this.message = this.countdown;

      this.countdownIntervalId = setInterval(() => {
        this.countdown -= 1;

        if (this.countdown >= 0) {
          this.message = this.countdown;
        }

        if (this.countdown < 0) {
          clearInterval(this.countdownIntervalId);
          this.countdownIntervalId = null;
          this.launchRocket();
        }
      }, 980);
    },

    launchRocket() {
      const rocket = document.getElementById("rocket");

      if (!rocket) return;

      rocket.src = "../assets/images/rocket_start.png";

      setTimeout(() => {
        rocket.style.transition = "bottom 3s linear";
        rocket.style.bottom = "120vh";
        rocket.style.width = "390px";
        rocket.style.height = "auto";
    }, 500);

      setTimeout(() => {
        this.message = "Segure firme, a viagem será bem longa... ";
      }, 2000);

      setTimeout(() => {
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.style.opacity = 1;

        setTimeout(() => {
          window.location.href = "pages/space.html";
        }, 2000);
      }, 4000);
    }
  }
});

app.mount("#app");