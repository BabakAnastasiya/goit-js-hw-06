
const itemsEl = document.querySelectorAll('.item');
console.log ('Number of categories:', itemsEl.length);

itemsEl.forEach (element => {
    console.log ('Category:', element.querySelector('h2').textContent);
    console.log ('Elements:', element.querySelectorAll('li').length)
})
