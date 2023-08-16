import { async } from 'regenerator-runtime';
import { getJSON, sendJSON } from './helpers';
import { RECIPES_PER_PAGE, ERROR_NUM, API_URL, API_KEY } from './config';

export const state = {
  recipe: {},
  search: [],
  recipesRendered: [],
  bookmarks: [],
  firstRecipeRenderedIndex: 0,
  prevPageNum: ERROR_NUM,
  nextPageNum: 2,
  maxPageNum: 0,

  updateRecipesRenderedArray(index) {
    this.recipesRendered = this.search.slice(index, index + RECIPES_PER_PAGE);
  },

  refreshRecipesRenderedArray() {
    this.firstRecipeRenderedIndex = 0;
    this.updateRecipesRenderedArray(this.firstRecipeRenderedIndex);
  },

  refreshPaginationNumbers() {
    this.prevPageNum = ERROR_NUM;
    if (this.search.length <= 10) {
      this.nextPageNum = ERROR_NUM;
    } else {
      this.nextPageNum = 2;
    }
  },
};

export const setCurrentRecipe = function (recipe) {
  state.recipe = recipe;
};

export const loadRecipe = async function (recipeID) {
  try {
    // Only promises returned from fetch() needs to be parsed to a JS object with json()
    // Return values of async functions do not need to be parsed with json() as they are already JS objects and we can access obj.data right away
    const data = await getJSON(`${API_URL}/${recipeID}?key=${API_KEY}`);
    const { recipe } = data.data;
    setCurrentRecipe(recipe);

    if (
      state.bookmarks.some(bookmarkedRecipe => bookmarkedRecipe.id === recipeID)
    ) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadSearchResults = async function (input) {
  try {
    const data = await getJSON(`${API_URL}?search=${input}&key=${API_KEY}`);
    if (data.results === 0) throw new Error();
    const { recipes } = data.data;
    state.search = recipes;
    state.refreshRecipesRenderedArray();
    state.refreshPaginationNumbers();
    calcMaxPageNum();
  } catch (err) {
    throw err;
  }
};

// Pagination Methods
export const loadNewRecipesRendered = function (direction) {
  if (direction === 'next') {
    if (!onLastResultsPage()) {
      state.firstRecipeRenderedIndex += RECIPES_PER_PAGE;
    } else {
      state.firstRecipeRenderedIndex = 0;
    }
  } else if (direction === 'prev') {
    if (!onFirstResultsPage()) {
      state.firstRecipeRenderedIndex -= RECIPES_PER_PAGE;
    } else {
      state.firstRecipeRenderedIndex = calcMaxFirstRecipeRenderedIndex();
    }
  }
  state.updateRecipesRenderedArray(state.firstRecipeRenderedIndex);
};

export const onLastResultsPage = function () {
  const newFirstRecipeRenderedIndex =
    state.firstRecipeRenderedIndex + RECIPES_PER_PAGE;
  const lastRecipeIndex = state.search.length - 1;
  return newFirstRecipeRenderedIndex > lastRecipeIndex;
};

export const onFirstResultsPage = function () {
  const newFirstRecipeRenderedIndex =
    state.firstRecipeRenderedIndex - RECIPES_PER_PAGE;
  const firstRecipeIndex = 0;
  return newFirstRecipeRenderedIndex < firstRecipeIndex;
};

export const updatePageNum = function (direction) {
  if (direction === 'next') {
    if (!onLastResultsPage()) {
      state.nextPageNum += 1;
      state.prevPageNum === ERROR_NUM
        ? (state.prevPageNum = 1)
        : (state.prevPageNum += 1);
    } else {
      state.nextPageNum = ERROR_NUM;
      state.prevPageNum === ERROR_NUM
        ? (state.prevPageNum = 1)
        : (state.prevPageNum += 1);
    }
  } else if (direction === 'prev') {
    if (!onFirstResultsPage()) {
      state.nextPageNum === ERROR_NUM
        ? (state.nextPageNum = state.maxPageNum)
        : (state.nextPageNum -= 1);
      state.prevPageNum -= 1;
    } else {
      state.nextPageNum === ERROR_NUM
        ? (state.nextPageNum = state.maxPageNum)
        : (state.nextPageNum -= 1);
      state.prevPageNum = ERROR_NUM;
    }
  }
};

const calcMaxPageNum = function () {
  state.maxPageNum = Math.trunc(state.search.length / 10) + 1;
};

const calcMaxFirstRecipeRenderedIndex = function () {
  return Math.trunc((state.search.length - 1) / 10) * 10;
};

export const updateServings = function (recipe, updateServingsTo) {
  if (updateServingsTo == 0) return;
  const currentServings = recipe.servings;
  const multiplier = updateServingsTo / currentServings;
  recipe.ingredients.forEach(ingredient => {
    ingredient.quantity *= multiplier;
    if (ingredient.quantity == 0) ingredient.quantity = null;
  });
  recipe.servings = updateServingsTo;
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const deleteBookmark = function (recipe) {
  const recipeIndex = state.bookmarks.findIndex(el => el.id === recipe.id);
  state.bookmarks.splice(recipeIndex, 1);

  state.recipe.bookmarked = false;
  persistBookmarks();
};

export const getBookmarkedRecipe = function (bookmarkedRecipeID) {
  return state.bookmarks.find(recipe => recipe.id === bookmarkedRecipeID);
};

export const hasNoBookmarks = function () {
  return state.bookmarks.length === 0;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingredients = ing[1].split(',').map(el => el.trim());
        if (ingredients.length !== 3) {
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );
        }

        const [quantity, unit, description] = ingredients;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      ingredients,
    };
    const data = await sendJSON(`${API_URL}?key=${API_KEY}`, recipe);
    const { recipe: myRecipe } = data.data;
    setCurrentRecipe(myRecipe);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
