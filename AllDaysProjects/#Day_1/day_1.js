window.addEventListener('keydown', playSound)
function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return //this means when there is no audio simply come out of function altogether
  audio.currentTime = 0
  audio.play()
  //   console.log(key)
  key.classList.add('playing')
}
function removeTransition(e) {
  if (e.propertyName != 'transform') return //all of this is not transformed
  this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
