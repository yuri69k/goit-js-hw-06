const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.querySelector('ul#ingredients');
const makeTagLi = ingredients =>
    ingredients.map(ingredient => {
        const productEl = document.createElement('li');
        productEl.classList.add('item');
        productEl.textContent = ingredient;

        return productEl;
    });

const elements = makeTagLi(ingredients);

list.append(...elements);
