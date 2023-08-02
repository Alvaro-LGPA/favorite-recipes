import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFavoriteRecipes,  removeRecipe } from './favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg' 

export const FavoriteRecipes = () =>{
  
  const favoriteRecipes = useSelector(selectFavoriteRecipes)

 
  const dispatch = useDispatch();
  
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };


  
return (
  <div className="recipes-container">
    {favoriteRecipes.map((recipe) => (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
        onClickHandler={() => onRemoveRecipeHandler(recipe)}
        icon={unfavoriteIconUrl}
        >
        Remove Favorite
        </FavoriteButton>
      </Recipe>
    ))}
  </div>
)

};

// todo esto que sigue es una forma diferente de crear las recetas a como se hace en AllRecipes, pero con el mismo resultado. Así que lo he refactorizado para que ambos sean iguales. No tiene sentido que sean diferentes

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  /* return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  } */