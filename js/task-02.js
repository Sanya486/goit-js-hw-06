const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const firstIngredient = document.createElement('li');
firstIngredient.classList.add('item');
firstIngredient.textContent = ingredients[0];

const secoondIngredient = document.createElement('li');
secoondIngredient.classList.add('item');
secoondIngredient.textContent = ingredients[1];

const thirdIngredient = document.createElement('li');
thirdIngredient.classList.add('item');
thirdIngredient.textContent = ingredients[2];

const fourthIngredient = document.createElement('li');
fourthIngredient.classList.add('item');
fourthIngredient.textContent = ingredients[3];

const fifthIngredient = document.createElement('li');
fifthIngredient.classList.add('item');
fifthIngredient.textContent = ingredients[4];

const sixthIngredient = document.createElement('li');
sixthIngredient.classList.add('item');
sixthIngredient.textContent = ingredients[5];


listEl.append(firstIngredient, secoondIngredient, thirdIngredient, fourthIngredient, fifthIngredient, sixthIngredient);