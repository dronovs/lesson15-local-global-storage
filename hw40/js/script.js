'use strict';

void function () {
    const submitForm = document.querySelector('#form');
    const localStorageSubmitData = 'formData';
    let inputsSelectors = 'input, select, textarea';

    submitForm.addEventListener('submit', event => {
        event.preventDefault();

        let inputs = event.target.querySelectorAll(inputsSelectors);
        console.log(inputs);
        inputs = Array.from(inputs);
        console.log(inputs);

        let inputsData = inputs.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
            },{})

        console.log(inputsData);

        inputsData = JSON.stringify(inputsData);
        console.log(inputsData);

        localStorage.setItem(localStorageSubmitData, inputsData);

        // console.log(localStorage.getItem(localStorageSubmitData));
    })

    document.addEventListener('DOMContentLoaded', () => {
        let userData = localStorage.getItem(localStorageSubmitData);
        if (!userData) return;
        console.log(userData);

        userData = JSON.parse(userData);
        console.log(userData);

        let inputs = submitForm.querySelectorAll(inputsSelectors);
        inputs = Array.from(inputs);

        inputs.forEach(item => {
            try {
                item.value = userData[item.name];
            } catch (err) {
                console.dir(err);
            }
        })

    })
}()

