<template>
  <div class="key" v-on:click='freqChange'></div>
</template>

<script>
  export default {
    name: 'Key',
    props: ['note'],
    methods: {
      freqChange () {
        this.$emit('freqChange', this.note)
      }
    }
  }
</script>

<style lang="sass" scoped>
  $color: hsl(45, 76%, 60%);

  .key {
    width: 0;
    flex-grow: 1;
    margin: 4px;
    border-radius: 1vw;
    border: 2px solid $color;

    transition: background-color .25s ease;

    &:active {
      background-color: $color;
    }
  }
</style>