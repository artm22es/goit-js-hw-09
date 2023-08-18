const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const body = document.querySelector('body')

startBtn.addEventListener('click', handlerStart)
stopBtn.addEventListener('click', handlerStop)


function handlerStart() {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true
    stopBtn.disabled = false

    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}

function handlerStop() {
    startBtn.disabled = false
    stopBtn.disabled = true

    clearInterval(timerId)
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}