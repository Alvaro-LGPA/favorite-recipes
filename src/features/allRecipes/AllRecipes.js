import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from './allRecipesSlice'

import React, { useEffect } from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = (props) => {
  
  const { allRecipes, dispatch } = props;

// BRANC REMOVING-USEEFFECT: Commenting out all useEffect logic since apparently it is not needed if initializing state with allRecipesData

  // const onFirstRender = () => { // solo funciona como callback function. Poniendo dispatch(loadData()) como primer argumento de use effect() no funciona. creo que useEffect sôlo acepta como primer argumente una callbackFunction
  //   dispatch(loadData()); 
  // }
  // useEffect(onFirstRender, [dispatch])
  
  const onAddRecipeHandler = (recipe) => { // añade receta a favoritos y retira receta de allRecipes. Una acción para dos reducers.
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};


