const refs = {
    input: document.querySelector('#font-size-control'),
    nameLabel: document.querySelector('#text'),
};

refs.input.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    let fs = event.currentTarget.value + 'px';

    refs.nameLabel.style.fontSize = fs;
}
