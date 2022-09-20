let counterValue = 0;
const refs = {
    incrementBtnRef: document.querySelector('[data-action = "increment"]'),
    decrementBtnRef: document.querySelector('[data-action = "decrement"]'),
    spanRef: document.querySelector('#value'),
};

refs.incrementBtnRef.addEventListener('click', () => {
    counterValue += Number(refs.incrementBtnRef.textContent);
    refs.spanRef.textContent = String(counterValue);
});

refs.decrementBtnRef.addEventListener('click', () => {
    counterValue += Number(refs.decrementBtnRef.textContent);
    refs.spanRef.textContent = String(counterValue);
});
