const listEl = document.querySelector('#categories');
const listItemsEl = document.querySelectorAll('#categories > .item')


const titleArray = [];
const numbersArray = []
listItemsEl.forEach(item => titleArray.push(item.firstElementChild.textContent) );
listItemsEl.forEach(item => numbersArray.push(item.lastElementChild.children.length))

console.log('Number of categories:', listEl.children.length);
for (let i = 0; i < titleArray.length; i++){
    console.log('Category:', titleArray[i]);
    console.log('Elements:', numbersArray[i]);
}





