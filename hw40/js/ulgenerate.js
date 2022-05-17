'use strict';
void function () {
    let mainUl = document.querySelector('.main-ul');

    let formData = localStorage.getItem('formData');

    if (!formData) throw new Error('no user data');

    formData = JSON.parse(formData);

    for (let key in formData) {
        let li = document.createElement('li');
        li.className = 'user-properties';
        li.innerHTML = `${key}: ${formData[key]}`;
        mainUl.append(li);
    }

}()

