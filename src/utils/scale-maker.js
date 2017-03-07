const a = 1.059463094359

function processMode (mode) {
  let halfsteps = 0
  return mode.map((val) => {
    halfsteps += val
    return halfsteps
  })
}

export default function scaleMaker (mode, root = 440) {
  if (!Array.isArray(mode) || mode.length <= 0) {
    throw new Error('Please provide an array of intervals for array')
  }

  let scale = processMode(mode)
          .map((val) => Math.round(((root * Math.pow(a, val)) * 10)) / 10)

  scale.unshift(root)

  return scale
}
