import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const [daysRef, hoursRef, minutesRef, secondsRef] = document
  .querySelector('.timer')
  .querySelectorAll('.value');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      startBtn.disabled = false;
      startBtn.addEventListener('click', handleClick(selectedDate));
      return;
    }
    Notify.failure('Please choose a date in the future');
  },
};

flatpickr(input, options);

function handleClick(selectedDate) {
  let intervalId = null;
  return function () {
    startBtn.disabled = true;
    input.disabled = true;
    intervalId = setInterval(() => {
      const targetDate = selectedDate - new Date();
      const { days, hours, minutes, seconds } = convertMs(targetDate);

      daysRef.textContent = days.addLeadingZero();
      hoursRef.textContent = hours.addLeadingZero();
      minutesRef.textContent = minutes.addLeadingZero();
      secondsRef.textContent = seconds.addLeadingZero();

      if (targetDate < 1000) {
        clearInterval(intervalId);
        input.disabled = false;
      }
    }, 1000);
  };
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
