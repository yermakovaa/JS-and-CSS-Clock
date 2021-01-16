const refs = {
  second: document.querySelector('.second-hand'),
  minute: document.querySelector('.minute-hand'),
  hour: document.querySelector('.hour-hand'),
};

const getSeconds = date => (date.getSeconds() / 60) * 360 - 90;

const getMinutes = date =>
  (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6 - 90;

const getHours = date =>
  (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30 - 90;

const setDate = () => {
  const date = new Date();

  refs.second.style.transform = `rotate(${getSeconds(date)}deg)`;
  refs.minute.style.transform = `rotate(${getMinutes(date)}deg)`;
  refs.hour.style.transform = `rotate(${getHours(date)}deg)`;
};

setInterval(setDate, 1000);

setDate();
