import allRecipesData from '../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';
export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData': // esto carga todas las recetas en useEffect.
      return action.payload;
    case 'favoriteRecipes/addRecipe': // esto retira la receta que ha sido añadida a favoritos. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteRecipesSlice con diferentes retornos.
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe': // esto devuelve la receta que esta en favoritos a allrecipes. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteRecipesSlice con diferentes retornos
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}

export const selectAllRecipes = state => state.allRecipes;

export const selectFilteredAllRecipes = state => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}
