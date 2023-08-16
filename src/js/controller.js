import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';
// Making sure old browsers are still supported by our application
import 'core-js/stable'; // For polyfiling everything else
import 'regenerator-runtime'; // For polyfiling async/await
import { async } from 'regenerator-runtime';

const recipeClickHandler = function (e) {
  controlRecipes(resultsView.recipeID);
};

const searchBarHandler = function () {
  controlSearch(searchView.getSearchValue());
};

const paginationHandler = function () {
  model.loadNewRecipesRendered(paginationView.direction);
  resultsView.render(model.state.recipesRendered);
  model.updatePageNum(paginationView.direction);
  paginationView.render(model.state.prevPageNum, model.state.nextPageNum);
};

const updateServingsHandler = function () {
  model.updateServings(model.state.recipe, recipeView.updateServingsTo);
  recipeView.render(model.state.recipe);
};

const bookmarkButtonHandler = function () {
  controlBookmark();
};

const bookmarkListHandler = function (bookmarkedRecipeID) {
  // Get recipe from id
  const bookmarkedRecipe = model.getBookmarkedRecipe(bookmarkedRecipeID);
  recipeView.render(bookmarkedRecipe);
  model.setCurrentRecipe(bookmarkedRecipe);
};

const loadBookmarkedRecipeList = function () {
  model.init();
  bookmarksView.render(model.state.bookmarks);
};

const renderBookmarkListContent = function () {
  if (model.hasNoBookmarks()) {
    bookmarksView.renderMessage();
  } else {
    bookmarksView.render(model.state.bookmarks);
  }
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Upload the recipe data
    await model.uploadRecipe(newRecipe);

    // Render new recipe
    recipeView.render(model.state.recipe);

    // Render spinner
    addRecipeView.renderSpinner();

    // Re render form
    addRecipeView.reRenderForm();

    // Show recipe in bookmark list
    renderBookmarkListContent();
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err.message);
  }
};

// Publisher-Subscriber pattern
const init = function () {
  recipeView.addUpdateServingsHandler(updateServingsHandler);
  resultsView.addRecipeClickedHandler(recipeClickHandler);
  searchView.addEventHandler(searchBarHandler);
  paginationView.addEventHandler(paginationHandler);
  recipeView.addBookmarkButtonHandler(bookmarkButtonHandler);
  bookmarksView.addEventHandler(bookmarkListHandler);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  loadBookmarkedRecipeList();
  renderBookmarkListContent();
};
init();

const controlRecipes = async function (recipeID) {
  try {
    // Rendering a spinner before finish loading info of a recipe on a page
    recipeView.renderSpinner();
    // Loading Recipe
    await model.loadRecipe(recipeID);
    // Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearch = async function (input) {
  try {
    resultsView.renderSpinner();
    // Loading search results
    await model.loadSearchResults(input);
    // Rendering search results
    resultsView.render(model.state.recipesRendered);
    // Rendering Pagination Buttons
    paginationView.render(model.state.prevPageNum, model.state.nextPageNum);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe);
  }
  renderBookmarkListContent();
  recipeView.render(model.state.recipe);
};

if (module.hot) {
  module.hot.accept();
}
