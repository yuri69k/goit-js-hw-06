const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onExaminationInput);

function onExaminationInput(event) {
    const box = event.currentTarget;

    if (Number(box.getAttribute('data-length')) === Number(box.value.length)) {
        box.classList.add('valid');
        box.classList.remove('invalid');
    } else {
        box.classList.add('invalid');
        box.classList.remove('valid');
    }
}
