const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (s) => {

  let hours = Math.floor(s / 360);
  let minutes = Math.floor((s - hours * 360) / 60);
  let seconds = (s - hours * 360) - minutes * 60;

  timerEl.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
 
  const id = setInterval(() => {
    if (minutes === 0 && hours === 0 && seconds === 0) {
      clearInterval(id);
    } else if (minutes === 0 && seconds === 0) {
      hours--;
    } else if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    timerEl.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, 1000);
};

inputEl.addEventListener('input', () => {
  inputEl.value=isNaN(parseInt(inputEl.value))?'':parseInt(inputEl.value);
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  createTimerAnimator(seconds);

  inputEl.value = '';
});
