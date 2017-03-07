<template>
  <div class="keyboard">
    <key v-for="note in scale"
      :key="note"
      v-bind:note="note * multiplier"
      v-on:freqChange="playnote"
      v-on:stop="stop">
    </key>
  </div>
</template>

<script>
  import Key from './Key.vue'

  export default {
    name: 'keyboard',
    components: {
      Key
    },
    methods: {
      playnote (f) {
        this.$emit('playnote', f)
      },
      stop () {
        this.$emit('stopnote')
      }
    },
    props: ['scale'],
    data () {
      return {
        multiplier: 1
      }
    }
  }
</script>

<style lang="sass" scoped>
  .keyboard {
    display: flex;
    height: 20vh;
    width: 100vw;
  }
</style>