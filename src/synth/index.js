import Pizzicato from 'pizzicato'

let osc1 = new Pizzicato.Sound()

export default {
  play (freq) {
    osc1.frequency = freq
    osc1.play()
  },
  stop () {
    osc1.stop()
  }
}
