<template>
  <div class="keyboard">
    <key v-for="note in scale"
      :key="note"
      v-bind:note="note * multiplier"
      v-on:play="playnote">
    </key>
  </div>
</template>

<script>
  import Key from './Key.vue'
  import Consts from '../utils/Consts'

  export default {
    name: 'keyboard',
    components: {
      Key
    },
    methods: {
      playnote (f) {
        console.log(`Playing ${f}`)
      }
    },
    data () {
      return {
        multiplier: 1,
        scale: Consts.scales.chromatic
      }
    }
  }
</script>

<style lang="sass" scoped>
  .keyboard {
    display: flex;
    height: 20vh;
    width: 100vw;
    background-color: #000;
  }
</style>