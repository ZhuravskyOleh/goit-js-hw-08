import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
formEl.addEventListener('input', throttle(handleInput,500));
formEl.addEventListener('submit', handleFormSubmit);

const STORAGE_KEY = "feedback-form-state";

populateForm();

const feedbackForm = {};
function handleInput(event) {
    feedbackForm[event.target.name] = event.target.value;
    const feedbackFormJSON = JSON.stringify(feedbackForm);
    localStorage.setItem(STORAGE_KEY, feedbackFormJSON);
}

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(feedbackForm);
}

function populateForm() {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formData) {
        emailEl.value = formData.email;
        messageEl.value = formData.message;
    }
}

// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');
// const emailEl = formEl.querySelector('input[name="email"]');
// const messageEl = formEl.querySelector('textarea[name="message"]');
// const STORAGE_KEY = "feedback-form-state";

// const feedbackForm = {};

// function handleInput(event) {
//   feedbackForm[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
// }

// function handleFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(feedbackForm);
// }

// function populateForm() {
//   const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (formData) {
//     emailEl.value = formData.email;
//     messageEl.value = formData.message;
//     feedbackForm.email = formData.email;
//     feedbackForm.message = formData.message;
//   }
// }

// formEl.addEventListener('input', throttle(handleInput, 500));
// formEl.addEventListener('submit', handleFormSubmit);

// populateForm();
