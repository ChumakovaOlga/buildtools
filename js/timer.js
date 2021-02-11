

const timerInput = document.getElementById("time");
const buttonRun = document.getElementById("button1");
const buttonStop =  document.getElementById("button2")
const timerShow = document.getElementById("timer");
const engine = new Audio('./audio/beep.wav');
const car = new Audio('./audio/the-end.wav');

buttonRun.addEventListener('click', function() {
  timeMinut = parseInt(timerInput.value) * 60

})
buttonStop.addEventListener('click', function() {
   timeMinut = clearInterval(timer)
    engine.play();

})

timer = setInterval(function () {
    seconds = timeMinut % 60
    minutes = timeMinut / 60%60
    hour = timeMinut / 60 /60%60
    if (timeMinut <= 0) {
        timeMinut = clearInterval(timer)
        car.play();
    }
    else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

