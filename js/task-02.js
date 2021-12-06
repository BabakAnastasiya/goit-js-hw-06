const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = ingredients.map((ingredient)=>{
  const ingredientsEl= document.createElement('li');
ingredientsEl.textContent = ingredient;
ingredientsEl.classList.add('item');
return (ingredientsEl);})

const ulEl = document.querySelector('#ingredients');
 ulEl.append(...elements)
 console.log (ulEl)
