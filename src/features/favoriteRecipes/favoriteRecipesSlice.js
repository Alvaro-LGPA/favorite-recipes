const initialState = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe': // esto añade la receta a favoritos. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteRecipesSlice con diferentes retornos.
      return [...favoriteRecipes, action.payload]
    case 'favoriteRecipes/removeRecipe': // esto retira la receta de favoritos. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteSlice con diferentes retornos
      return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
    default:
      return favoriteRecipes;
  }
}

export function addRecipe(recipe) {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  }
}