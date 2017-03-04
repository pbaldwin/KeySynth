  <template>
  <div id="app">
    <keyboard></keyboard>
  </div>
</template>

<script>
import Keyboard from './components/Keyboard.vue'

export default {
  name: 'app',
  components: {
    Keyboard
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
