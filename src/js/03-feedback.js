import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[type=email]');
const textarea = document.querySelector('textarea');
const KEY_VALUE = 'feedback-form-state';

UsedSavedLocalStorageData(KEY_VALUE);
input.addEventListener('input', throttle(onSaveToLocalStorageInputValue, 1000));
textarea.addEventListener(
  'input',
  throttle(onSaveToLocalStorageTextareaValue, 1000)
);
form.addEventListener('submit', OnSubmitForm); //reset form and clearLocalStorage

function onSaveToLocalStorageInputValue({ target }) {
  savedLocalStorage(KEY_VALUE, {
    message: textarea.value,
    email: target.value,
  });
}

function onSaveToLocalStorageTextareaValue({ target }) {
  savedLocalStorage(KEY_VALUE, { message: target.value, email: input.value });
}

function savedLocalStorage(key, { email, message }) {
  const saved = JSON.stringify({ email, message });
  localStorage.setItem(key, saved);
}

function UsedSavedLocalStorageData(key) {
  const getLocalKey = localStorage.getItem(key);
  const parseStringToOBject = JSON.parse(getLocalKey);
  if (parseStringToOBject) {
    textarea.value = parseStringToOBject.message;
    input.value = parseStringToOBject.email;
  }
}
function OnSubmitForm(evt) {
  evt.preventDefault();
  evt.target.reset();
  clearLocalStorage(KEY_VALUE);
}

function clearLocalStorage(key) {
  const getLocalStorageValue = localStorage.getItem(key);
  const parseStringToOBject = JSON.parse(getLocalStorageValue);
  console.log(parseStringToOBject);
  localStorage.removeItem(key);
}
