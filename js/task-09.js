function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let color = '#fff';
const refs = {
    body: document.body,
    span: document.querySelector('.color'),
    btn: document.querySelector('.change-color'),
};
refs.btn.addEventListener('click', event => {
    refs.body.style.backgroundColor = getRandomHexColor();
    color = getRandomHexColor();
    refs.span.textContent = color;
});
