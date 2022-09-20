//
console.log(
    `Number of categories: ${document.querySelectorAll('.item').length}`,
);
console.log(' ');

const categories = document.querySelectorAll('.item');
for (const category of categories) {
    const children = [...category.children];

    for (const child of children) {
        if (child.tagName === 'H2') {
            console.log(`Category: ${child.textContent}`);
        }

        if (child.tagName === 'UL') {
            console.log(`Elements: ${child.children.length}`);
            // console.log(child.children);
        }
    }
    console.log(' ');
}
