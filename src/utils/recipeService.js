import tokenService from './tokenService';

const BOOK_URL = '/api/recipeBooks/';
const ENTRY_URL = '/api/entries/';

const functions = {
    index,
    createRecipeBook,
    createEntry,
    getEntry
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

function createEntry(entry) {
  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(entry)
  };
  return fetch(ENTRY_URL, options).then(res => res.json());  
}

function getEntry(entryId) {
  return fetch(`${ENTRY_URL}${entryId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
  }).then(res => res.json());
}