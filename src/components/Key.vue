<template>
  <div class="key" v-on:click='play'></div>
</template>

<script>
  export default {
    name: 'Key',
    props: ['note'],
    methods: {
      play () {
        this.$emit('play', this.note)
      }
    }
  }
</script>

<style scoped>
  .key {
    width: 0;
    flex-grow: 1;
    margin: 4px;
    background-color: hsl(45, 76%, 60%);
  }
</style>