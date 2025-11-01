const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            message: "Arraste o combustível para seu foguete!"
        }
    }
})

app.mount('#app')