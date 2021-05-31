const inputs = document.querySelectorAll('input')

function updateStyle() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  )
}

inputs.forEach((input) => input.addEventListener('input', updateStyle))
// input event is triggered each time any change is made to the input elements
