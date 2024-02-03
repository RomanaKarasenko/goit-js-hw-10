// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function showToast(type, delay) {
  if (type === 'fulfilled') {
    iziToast.show({
      title: '✅ Fulfilled promise',
      message: `in ${delay}ms`,
      position: 'topLeft',
    });
  } else {
    iziToast.show({
      title: '❌ Rejected promise',
      message: `in ${delay}ms`,
      position: 'topLeft',
    });
  }
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = this.elements['delay'];
  const stateInput = this.elements['state'];

  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(result => {
      showToast('fulfilled', result);
    })
    .catch(result => {
      showToast('rejected', result);
    });
});
