let counterValue = 0;
const btnMinusEl = document.querySelector('[data-action="decrement"]')
const btnPlusEl = document.querySelector('[data-action="increment"]')

const handleBtnMinusClick = ()=> {counterValue -= 1;
    document.getElementById('value').textContent=counterValue}
const handleBtnPlusClick = ()=> {counterValue += 1;
    document.getElementById('value').textContent=counterValue}

btnMinusEl.addEventListener('click', handleBtnMinusClick)
btnPlusEl.addEventListener('click', handleBtnPlusClick)