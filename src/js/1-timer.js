import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDateSelection(selectedDates);
  },
};

const flatpickrInstance = flatpickr('#datetime-picker', options);

document.querySelector('[data-start]').addEventListener('click', startTimer);
disableStartButton();

function handleDateSelection(selectedDates) {
  const userSelectedDate = selectedDates[0];

  if (userSelectedDate < new Date()) {
    showErrorMessage('Please choose a date in the future');
    disableStartButton();
  } else {
    enableStartButton();
  }
}

function startTimer() {
  let userSelectedDate = flatpickrInstance.selectedDates[0];
  const currentTime = Date.now();

  if (!userSelectedDate || userSelectedDate < currentTime) {
    showErrorMessage('Please choose a valid future date');
    return;
  }

  let timeDifference = userSelectedDate - currentTime;
  let timerInterval;

  function updateTimerDisplay() {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    updateElement('[data-days]', days);
    updateElement('[data-hours]', hours);
    updateElement('[data-minutes]', minutes);
    updateElement('[data-seconds]', seconds);

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      showSuccessMessage('Countdown timer has reached the end date.');
      disableStartButton();
      return;
    }

    timeDifference -= 1000;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      disableStartButton();
    }
  }

  updateTimerDisplay();
  timerInterval = setInterval(updateTimerDisplay, 1000);
}

function disableStartButton() {
  updateButtonState(true);
}

function enableStartButton() {
  updateButtonState(false);
}

function updateButtonState(disabled) {
  document.querySelector('[data-start]').disabled = disabled;
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message: message,
  });
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateElement(selector, value) {
  document.querySelector(selector).textContent = addLeadingZero(value);
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     handleDateSelection(selectedDates);
//   },
// };

// const flatpickrInstance = flatpickr('#datetime-picker', options);

// document.querySelector('[data-start]').addEventListener('click', startTimer);
// disableStartButton();

// function handleDateSelection(selectedDates) {
//   const userSelectedDate = selectedDates[0];

//   if (userSelectedDate < new Date()) {
//     showErrorMessage('Please choose a date in the future');
//     disableStartButton();
//   } else {
//     enableStartButton();
//   }
// }

// function startTimer() {
//   const userSelectedDate = flatpickrInstance.selectedDates[0];
//   const currentTime = Date.now();

//   if (!userSelectedDate || userSelectedDate < currentTime) {
//     showErrorMessage('Please choose a valid future date');
//     return;
//   }

//   const timeDifference = userSelectedDate - currentTime;
//   let timerInterval;

//   function updateTimerDisplay() {
//     const { days, hours, minutes, seconds } = convertMs(timeDifference);

//     updateElement('[data-days]', days);
//     updateElement('[data-hours]', hours);
//     updateElement('[data-minutes]', minutes);
//     updateElement('[data-seconds]', seconds);

//     if (timeDifference <= 0) {
//       clearInterval(timerInterval);
//       showSuccessMessage('Countdown timer has reached the end date.');
//       disableStartButton();
//     }

//     timeDifference -= 1000;
//   }

//   updateTimerDisplay();
//   timerInterval = setInterval(updateTimerDisplay, 1000);
// }

// function disableStartButton() {
//   updateButtonState(true);
// }

// function enableStartButton() {
//   updateButtonState(false);
// }

// function updateButtonState(disabled) {
//   document.querySelector('[data-start]').disabled = disabled;
// }

// function showErrorMessage(message) {
//   iziToast.error({
//     title: 'Error',
//     message: message,
//   });
// }

// function showSuccessMessage(message) {
//   iziToast.success({
//     title: 'Success',
//     message: message,
//   });
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function updateElement(selector, value) {
//   document.querySelector(selector).textContent = addLeadingZero(value);
// }

// function addLeadingZero(value) {
//   return value < 10 ? `0${value}` : value;
// }
