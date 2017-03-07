import scaleMaker from '../../src/utils/scale-maker'
import Consts from '../../src/utils/consts'

describe('scale-maker', () => {
  const chromaticScale = Consts.modes.chromatic
  const tonic = Consts.tonics['c']
  const comparison = [ 261.6, 277.2, 293.6, 311.1, 329.6, 349.2, 370, 392, 415.3, 440, 466.1, 493.8, 523.2 ]

  it('should return chromatic scale from middle C', () => {
    expect(scaleMaker(chromaticScale, tonic)).toEqual(comparison)
  })
})
