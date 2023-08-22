import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const btn = form.querySelector('button');
const { delay, step, amount } = form.elements;

form.addEventListener('submit', handleSubmit);

function handleRes({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function handleRej({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function handleSubmit(evt) {
  evt.preventDefault();
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, (amountValue - 1) * stepValue + delayValue);

  Array(Number(amountValue))
    .fill(null)
    .forEach((_, idx) => {
      createPromise(idx + 1, delayValue)
        .then(handleRes)
        .catch(handleRej);
      delayValue += stepValue;
    });
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
