const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = seconds * 6 + 90 //90 deg offset is provided
  if (secondsDegrees == 90) {
    secondHand.style.transition = 'none'
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  const minutes = now.getMinutes()
  const minutesDegrees = minutes * 6 + 90 //90 deg offset is provided
  minHand.style.transform = `rotate(${minutesDegrees}deg)`
  const hours = now.getHours()
  const hoursDegrees = 30 * (hours % 12) + minutes / 2 + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

//Setting up the details into span

// let sec = document.getElementsByClassName("sec");
// sec.innerHTML=
