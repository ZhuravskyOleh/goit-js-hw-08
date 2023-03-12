import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(handleInput,500));
formEl.addEventListener('submit', handleFormSubmit);

const STORAGE_KEY = "feedback-form-state";

populateForm();

let feedbackForm = {};

function handleInput({target}) {
    feedbackForm[target.name] = target.value;
    const feedbackFormJSON = JSON.stringify(feedbackForm);
    localStorage.setItem(STORAGE_KEY, feedbackFormJSON);
}

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(feedbackForm);
    feedbackForm = {};
    
}


function populateForm() {
    const feedbackForm = localStorage.getItem(STORAGE_KEY);

    if (feedbackForm === null) {
        return;
    }
     try {
            const feedbackFormJS = JSON.parse(feedbackForm);
            const data = Object.entries(feedbackFormJS);
            data.forEach(([name,value]) => {
                formEl.elements[name].value = value;
            })
        } catch (error) {
            console.log("not valid JSON");
        }
}

   
