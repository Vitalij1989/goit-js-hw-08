import { throttle } from 'lodash';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(updateLocalStorage, 500));
form.addEventListener('submit', handSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
parseLocalStorage();
function updateLocalStorage(e) {
  const fiendName = e.target.name;
  formData[fiendName] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function parseLocalStorage() {
  const actualDate = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (actualDate) {
    email.value = actualDate.email || '';
    message.value = actualDate.message || '';
  }
}
function handSubmit(e) {
  e.preventDefaut();
  const { email, message } = e.currentTarget.elemennts;
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
