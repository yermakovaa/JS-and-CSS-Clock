const refs = {
  second: document.querySelector('.second-hand'),
  minute: document.querySelector('.minute-hand'),
  hour: document.querySelector('.hour-hand'),
  audio: document.querySelector('#audio'),
  btn: document.querySelector('.btn'),
};

const getSeconds = date => (date.getSeconds() / 60) * 360 - 90;

const getMinutes = date =>
  (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6 - 90;

const getHours = date =>
  (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30 - 90;

const playaudioSound = () => {
  refs.btn.classList.toggle('playing');
};

refs.btn.addEventListener('click', playaudioSound);

const setDate = () => {
  const date = new Date();

  refs.second.style.transform = `rotate(${getSeconds(date)}deg)`;
  refs.minute.style.transform = `rotate(${getMinutes(date)}deg)`;
  refs.hour.style.transform = `rotate(${getHours(date)}deg)`;

  if (refs.btn.classList.contains('playing')) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
};

setInterval(setDate, 1000);

setDate();
