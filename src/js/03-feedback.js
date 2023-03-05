import throttle from 'lodash.throttle';

const formEl= document.querySelector('.feedback-form');
const KEY = "feedback-form-state";

const formData = {};


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput (event) {
formData[event.target.name] = event.target.value;

localStorage.setItem(KEY, JSON.stringify(formData));
};

function onFormSubmit (event) {
	event.preventDefault();
   event.currentTarget.reset();
	localStorage.removeItem(KEY);
};

function populateForm () {
   const savedMessage = JSON.parse(localStorage.getItem(KEY));
	const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea');
   if (savedMessage) {
     email.value = savedMessage.email;
	  message.value = savedMessage.message;
	}
};

populateForm();
