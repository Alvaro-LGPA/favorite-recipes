import allRecipesData from '../../data.js'


// onLoad() not needed anymore. State has been initialized with initialstate=allRecipesData
// export const loadData = () => {
//   return {
//     type: 'allRecipes/loadData',
//     payload: allRecipesData
//   }
// }

const initialState = allRecipesData; // BRANCH REMOVING USE EFFECT!!: initializing state so useEffect is not needed
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    
    // action not needed anymore. State has been initialized with initialstate=allRecipesData
    // case 'allRecipes/loadData': 
    //   return action.payload;
    
    case 'favoriteRecipes/addRecipe': // esto retira la receta que ha sido añadida a favoritos. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteRecipesSlice con diferentes retornos.
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe': // esto devuelve la receta que esta en favoritos a allrecipes. Esta acción se despacha al mismo tiempo a allRecipesSlice y a favoriteRecipesSlice con diferentes retornos
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}
