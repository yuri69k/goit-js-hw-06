function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsRef = document.querySelector('input');

const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

controlsRef.value = '1';
boxesRef.style.paddingTop = '10px';

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = String(30 + 10 * i) + 'px';
        box.style.height = String(30 + 10 * i) + 'px';
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '3px';
        box.style.boxShadow = '3px 3px 3px 0px rgba(0,0,0,0.5)';
        boxes.push(box);
    }

    boxesRef.append(...boxes);
}

function destroyBoxes() {
    const boxes = [...boxesRef.children];
    for (const box of boxes) box.remove();
}

btnCreateRef.addEventListener('click', () => {
    let amount = 0;
    amount = Number(controlsRef.value);
    createBoxes(amount);
});

btnDestroyRef.addEventListener('click', () => {
    destroyBoxes();
});
