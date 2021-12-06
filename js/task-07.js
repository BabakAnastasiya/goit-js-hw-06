
const refs = {
    inputEl : document.querySelector ('#font-size-control'),
    textEl : document.querySelector ('#text')
}
const {inputEl, textEl} = refs;

const changeFontSizeText = (event) => {
    textEl.style.fontSize = `${inputEl.value}px`
}

inputEl.addEventListener ('input', changeFontSizeText)