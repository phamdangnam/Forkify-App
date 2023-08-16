import View from './View';
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  addEventHandler(handler) {
    document.querySelector('.bookmarks').addEventListener('click', e => {
      const preview = e.target.closest('.preview');
      if (!preview) return;
      const bookmarkedRecipeID = preview
        .querySelector('a')
        .getAttribute('href')
        .slice(1);
      handler(bookmarkedRecipeID);
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
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`;
    });
    return html;
  }
}

export default new BookmarksView();
