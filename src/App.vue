<template>
  <div id="app">
    <keyboard
      v-bind:scale="scale"
      v-on:playnote="play"
      v-on:stopnote="stop"></keyboard>
  </div>
</template>

<script>
import Consts from './utils/consts'
import scaleMaker from './utils/scale-maker'
import Keyboard from './components/Keyboard.vue'
import synth from './synth'

let state = {
  tonic: Consts.tonics['c'],
  mode: Consts.modes.chromatic,
  octaveShift: 0
}

export default {
  name: 'app',
  components: {
    Keyboard
  },
  methods: {
    play (f) {
      synth.play(f)
    },
    stop () {
      synth.stop()
    }
  },
  data () {
    return state
  },
  computed: {
    scale () {
      return scaleMaker(this.mode, this.tonic)
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    background-color: black;
    margin: 0;
    padding: 0;
  }
</style>
