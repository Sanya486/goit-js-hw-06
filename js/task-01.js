const refs = {
    listEl: document.querySelector('#categories'),
    listItemEl: document.querySelectorAll('#categories > .item'),
};

console.log('Number of categories:', refs.listItemEl.length);
refs.listItemEl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});





