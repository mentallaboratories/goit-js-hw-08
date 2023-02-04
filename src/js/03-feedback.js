//import { ref } from 'joi';
import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};


const formData = {};


refs.form.addEventListener('input', throttle(onFormInput,500));
refs.form.addEventListener('submit', onFormSubmit)

populateForm();

function onFormInput(evt){
    

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData))


}


function onFormSubmit(evt){
    evt.preventDefault();

    evt.currentTarget.reset();
    


    console.log('fdata', formData);

    localStorage.removeItem('feedback-form-state');


}


function populateForm(){
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if(savedFormData){

        refs.email.value = savedFormData.email;
        refs.message.value = savedFormData.message;
    }

}