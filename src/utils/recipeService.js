import tokenService from './tokenService';

const BOOK_URL = '/api/recipeBooks/';
// put recipe book entires URL here

const functions = {
    index,
    createRecipeBook,
}

export default functions

function index() {
    return fetch(BOOK_URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json());
}
  
function createRecipeBook(user) {
    console.log("recipeService user: " + user)
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(user)
    };
    return fetch(BOOK_URL, options).then(res => res.json());
}