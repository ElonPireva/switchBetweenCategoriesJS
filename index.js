const getCategories = document.querySelectorAll('.categories'); // grab html elements

for(let i = 0; i < getCategories.length; i++){ // loop through elements
    getCategories[i].addEventListener('click', () => { 
        const getId = getCategories[i].id; // grab id after event
        const getTags = document.querySelectorAll('.tag');
        getId === '1' ? getTags[0].style.display = 'block' : getTags[0].style.display = 'none';
        getId === '2' ? getTags[1].style.display = 'block' : getTags[1].style.display = 'none';
        getId === '3' ? getTags[2].style.display = 'block' : getTags[2].style.display = 'none';
    })
}