const initialState = ''

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return state;
  }
}


// No hay razón por la cual el reducer sea una arrow function y las action creators function declarations. Las dos syntaxis funcionan igual
// export const setSearchTerm = (term) => {
//   return {
//     type: 'searchTerm/setSearchTerm',
//     payload: term
//   }
// }


export function setSearchTerm(term) {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

export function clearSearchTerm() {
  return {
    type: 'searchTerm/clearSearchTerm'
  }
}

export const selectSearchTerm = (state) => state.searchTerm;