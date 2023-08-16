import View from './View';
import icons from '../../img/icons.svg';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  recipeID;

  addRecipeClickedHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const recipe = e.target.closest('.preview').children[0];
      if (!recipe) return;
      this.recipeID = recipe.getAttribute('href').slice(1); // Removing the _ on id
      handler();
    });
  }

  _generateMarkup() {
    let html = ``;
    this._data.forEach(recipe => {
      html += `<li class="preview">
            <a class="preview__link preview__link--active" href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
                <div class="preview__user-generated ${
                  recipe.key ? '' : 'hidden'
                }">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`;
    });

    return html;
  }
}

export default new resultsView();
