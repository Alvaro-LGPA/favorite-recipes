# Project: Favorite Recipes
## Project description
**Codecademy** excersise to introduce strategies for managing complex state in React applications using Redux


#### Instructions
1. In the **store.js** file, begin by declaring a new variable called `initialState` and assign to it an empty object.
2. Now let’s add slices to the `initialState` object.
First, add an `allRecipes` property to the `initialState` object with an initial value of an empty array.
This array will be filled once we fetch the data from a database.
3. Next, add a `favoriteRecipes` property to the `initialState` object, also with an initial value of an empty array.
The user will select which recipes to add to this slice as their favorites.
4. Finally, add a `searchTerm` property to the `initialState` object with an initial value of an empty string.
The user will change this value by using a search input field.

```
// Store.js
const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ""
};

```

1. Open up **./data.js** and you will see an array of recipe objects called `allRecipesData` is exported. Back in **store.js**, at the top of the file, this array is imported (later on, you will fetch data from an API rather than importing from a local file).
This array needs to be sent to the store so that it can populate the `state.allRecipes` slice, which is initially empty. This can be done using the `loadData()` action creator.
Complete the function `loadData()` such that it returns an action object with the following properties:
* `type`: The slice being modified is `state.allRecipes` and the action name is `'loadData'`
* `payload`: The `allRecipesData` array.
Remember to use the `‘sliceName/actionName’` pattern for type.

2. Next up is `addRecipe()` which should be dispatched when the user clicks on the ❤️ icon of a particular recipe.
Notice that this function accepts a `recipe` parameter. The `recipe` object then needs to be sent to the store to be added to the `state.favoriteRecipes` slice. For example, this action might be dispatched like so:
```
const exampleRecipe = { 
  id: 4, 
  name: 'Cheeseburger', 
  img: 'img/cheeseburger.jpg'
}
store.dispatch(addRecipe(exampleRecipe));
```
Complete the function called `addRecipe()` such that it returns an action object with the following properties:

* `type`: The slice being modified is `state.favoriteRecipes` and the action name is `'addRecipe'`
* `payload`: The recipe object parameter.

3. The last action creator is `removeRecipe()` which should be dispatched when the user clicks on the 💔 icon of a favorited recipe.
`removeRecipe()` also accepts a `recipe` parameter. The `recipe` object needs to be sent to the store so it knows which recipe to remove from the `state.favoriteRecipes` slice.
Complete the function called `removeRecipe()` such that it returns an action object with the following properties:

* type: The slice being modified is state.favoriteRecipes and the action name is 'removeRecipe'
* payload: The recipe object parameter.


#### Instructions
1. First up is the `searchTerm/setSearchTerm` action. This action will be dispatched with a payload whose value is the term to be set as the new value for `state.searchTerm`.
Within the `switch` statement of r`ecipesReducer()`, fix the case that handles the `'searchTerm/setSearchTerm'` action type.
For this case, the reducer should return a new state object with an updated `searchTerm` slice set to the new term provided by `action.payload`.
If done correctly, the second state printed to the console should show the search term set to `"cheese"`.

1. Now, let’s fix the case for the `favoriteRecipes/addRecipe` action type. This action will be dispatched with a payload whose value is the recipe object to be added to the `state.favoriteRecipes` array.
For this action type, the reducer should return a new state object with an updated `favoriteRecipes` slice.
The new value should be a new array that includes all the previously added values in addition to the new recipe (from `action.payload`) added to the end.
Remember, you must not mutate the incoming state object or the original `state.favoriteRecipes` array!

1. The final case to fix is for the `favoriteRecipes/removeRecipe` action type. This action will be dispatched with a payload whose value is the recipe object to be removed from the `state.favoriteRecipes` array.
For this case, the reducer should return a new state object with an updated `favoriteRecipes` slice.
The `favoriteRecipes` slice should be a new array that includes all the existing values from `state.favoriteRecipes` except for the recipe from `action.payload`.
We recommend that you use the `.filter()` array method and filter out the element whose `'id'` matches the recipe from action.payload.


#### Instructions
1. Currently, the default `favoriteRecipes` value for `favoriteRecipesReducer()` is the string `'REPLACE_ME'`. Let’s fix that.
First, declare a variable named `initialFavoriteRecipes` and assign it to an empty array (`[]`).
Then, assign the default `favoriteRecipes` value for `favoriteRecipesReducer()` to `initialFavoriteRecipes`.

1. Next, complete the `favoriteRecipesReducer` such that it immutably updates the `state.favoriteRecipes` slice in response to the following `action.type` cases:
   * `'favoriteRecipes/addRecipe'`: Return a new array with all of the prior values of `favoriteRecipes` with the `action.payload` value added to the end.
   * `'favoriteRecipes/removeRecipe'`: Return a new array with all of the prior values of `favoriteRecipes` with the `action.payload` value removed.
   * `default`: Return `favoriteRecipes` unchanged.

2. Well done! Now that you have the `favoriteRecipesReducer()` completed, you can use it within the `rootReducer` to update the `state.favoriteRecipes` slice.
Within `rootReducer()`, add a `favoriteRecipes` property to the `nextState` object.
Then, call `favoriteRecipesReducer()`, passing its slice of state and the action as arguments, and store the result as the value for `nextState.favoriteRecipes`.


#### Instructions
1. First, at the top of **store.js**, import `combineReducers` from the redux library.
2. `combineReducers()` accepts an object of reducers as its argument. Let’s create one!
At the bottom of **store.js**, create a variable called `reducers`. Assign to it an object with three properties: `allRecipes`, `favoriteRecipes`, `searchTerm`. Each property should be assigned its associated slice reducer.
3. Now, declare another variable called `rootReducer`. Call `combineReducers()` with the reducers object as an argument and assign the returned value to `rootReducer`.
4. Finally, pass the `rootReducer` to the `createStore()` function and save the returned value in a new variable called store.

#### Instructions
1. The reducers object passed to `combineReducers()` should contain the slice reducers responsible for updating the various slices of the `store`‘s state. In the prior lesson, those slice reducers all existed in the same file. Now, you need to import them.
At the top of the **store.js** file, import the following values from their respective files:
`allRecipesReducer`
`favoriteRecipesReducer`
`searchTermReducer`
2. Excellent! Now that you have imported the slice reducers, you use them to construct the `reducers` object to be passed to `combineReducers()`.
Within the `reducers` object, add three `key:value` pairs where each `key` is the name of a slice and each `value` is the slice reducer responsible for managing that slice’s state.

3. Now that you have the `reducers` object, you can create the store using a combination of the `combineReducers()` and `createStore()` Redux functions.
You are going to do this all in one line of code!
First call `combineReducers()` with reducers as an argument.
Then, pass the entire `combineReducers(reducers)` function call as an argument to `createStore()`.
Finally, store the value returned by `createStore()` in a new variable called store.
4. Well done! You’ve reconnected all of the slice reducers from separate files back into the `store` within **src/app/store.js**. In the next exercise, you’ll learn how to build on this application structure by incorporating React components and dispatching actions from them. To do this, the store needs to be available to other parts of the application.
Export the `store` value from **src/app/store.js**.

```
import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js"
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice.js"
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js"
const reducers = {
  // Add the slice properties here
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}

// Declare the store here.

export const store = createStore(combineReducers(reducers));


```

#### Instructions
1. In order to pass the store‘s current state and its dispatch method to the `<App />` component, the `store` must first be imported into the **index.js** file.
At the top of **index.js**, import the store from **store.js**.

2. Next, get the current state of the store and pass it to the `<App />` component as a prop called `state`.
Note: You won’t see anything rendered until the next checkpoint!
3. The `<App />` component isn’t rendering yet because it is expecting to receive a `dispatch` method.
Pass the `store.dispatch` method to the `<App />` component as a prop called dispatch.
If done correctly, you should see the `<FavoriteRecipes />` and `<AllRecipes />` components rendered (without data, for now)!

4. Why is the recipe data not being rendered? Remember that the `state.allRecipes` slice begins as an empty array and the data is only loaded AFTER the user opens the page. This data fetch is happening but render isn’t subscribed to changes to the store yet!
At the bottom of `index.js`, use `store.subscribe()` to subscribe the render function to the store such that each time the store‘s state changes, the entire `<App />` will be re-rendered.

#### Instructions

1. Open up the **App.js** file.
First, import the `FavoriteRecipes` component from the **FavoriteRecipes.js** file.

2. Now, you can add in the `<FavoriteRecipes />` component to the `<App />` component’s structure. Like the other two components, you will need to pass the `dispatch` method to the component as a prop.
The slice data passed to `<FavoriteRecipes />` will need to be filtered first based on the value of `state.searchTerm`. The filtered version of `state.favoriteRecipes` has been created for you and stored in the variable `visibleFavoriteRecipes`.
Within the return statement of the `<App />` component, in the space below the `<h2>Favorite Recipes</h2>` element, add in a `<FavoriteRecipes />` component. You should then pass along the following props:
* `favoriteRecipes`: the `visibleFavoriteRecipes` value
* `dispatch`: the `dispatch` method from the `store`.
If you complete this step correctly, you should see a blank square rendered under the “Favorite Recipes” header.
3. Open up the **FavoriteRecipes.js** file. The job of any presentational component in a Redux app is twofold:
1. Render the data for their associated slice of state.
1. Dispatch actions in response to user interaction within the component.
To do these two things, `<FavoriteRecipes />` was given two props: `favoriteRecipes` and `dispatch`.
At the top of `FavoriteRecipes()`, extract these two values from the props parameter.
4. Now that the `FavoriteRecipes()` component has access to the `favoriteRecipes` slice of state, you can render its data instead of the blank box! Take a look at the return statement:

```
return (
  <div className="recipes-container">
    {['REPLACE_ME'].map(createRecipeComponent)}
  </div>
);
```
Replace the entire `['REPLACE_ME']` array with the `favoriteRecipes` prop value.

If done correctly, every recipe object within `favoriteRecipes` will be mapped to a `<Recipe />` component and be rendered (try it out!).

5. The `<FavoriteRecipes />` component wants to dispatch an action to the store within `onRemoveRecipeHandler()`, but where are the action creators to help create those actions?
Remember, they have been moved to, and exported from, the **favoriteRecipesSlice.js** file!
At the top of **FavoriteRecipes.js**, import the action creator function, `removeRecipe`.

6. Finally, the `removeRecipe()` action creator accepts a `recipe` argument.
Within `onRemoveRecipeHandler()`, which receives a `recipe` parameter, dispatch a `removeRecipe()` action with `recipe` as an argument.