<template>
  <h1>The Javascript Lottery</h1>
  <h3>Click the button to draw a number.</h3>
  <button @click="play">Let's Play!</button>
  <h3>Your Number: {{ number }}</h3>
  <h6>^ Any number in the 1 to 1000 range wins!</h6>
</template>

<script>
import { ref } from "vue";
import { game } from "../lib/game.js";

export default {
  name: 'HelloWorld',
  setup() {
    const number = ref(0);

    const play = () => game(number);

    return {
      play,
      number
    }
  }
}
</script>

<style scoped>
button {
  width: 10rem;
  height: 5rem;
}

button:active {
  background: rgba(0, 128, 200, 0.5);
}
</style>