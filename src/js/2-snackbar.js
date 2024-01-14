'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const snackbarButton = document.querySelector('[data-show-snackbar]');
  const form = document.querySelector('form');

  if (snackbarButton) {
    snackbarButton.addEventListener('click', function () {});
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const delay = parseInt(this.elements.delay.value, 10);
      const state = this.elements.state.value;

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          state === 'fulfilled' ? resolve(delay) : reject(delay);
        }, delay);
      });

      promise.then(
        delay =>
          showSnackbar(
            'Success',
            `✅ Fulfilled promise in ${delay}ms`,
            '#59A10D'
          ),
        delay =>
          showSnackbar('Error', `❌ Rejected promise in ${delay}ms`, '#EF4040')
      );
    });
  }

  function showSnackbar(title, message, backgroundColor) {
    const toastOptions = {
      title: title,
      message: message,
      backgroundColor: backgroundColor,
    };

    iziToast.show(toastOptions);
  }
});
