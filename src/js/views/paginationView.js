import { ERROR_NUM } from '../config';
import icons from '../../img/icons.svg';

class PaginationView {
  _parentElement = document.querySelector('.pagination');
  direction;

  addEventHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const button = e.target.closest('.btn--inline');
      if (!button) return;
      this.direction =
        button.classList.contains('pagination__btn--next') === true
          ? 'next'
          : 'prev';
      handler();
    });
  }

  render(prevPageNum, nextPageNum) {
    const html = this._generateMarkup(prevPageNum, nextPageNum);
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup(prevPageNum, nextPageNum) {
    let prevButtonHTML;
    let nextButtonHTML;
    if (prevPageNum === ERROR_NUM) {
      prevButtonHTML = '';
    } else {
      prevButtonHTML = `
          <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${prevPageNum}</span>
          </button>`;
    }
    if (nextPageNum === ERROR_NUM) {
      nextButtonHTML = '';
    } else {
      nextButtonHTML = `Page ${nextPageNum}`;
      nextButtonHTML = `
          <button class="btn--inline pagination__btn--next">
            <span>Page ${nextPageNum}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    const html = `${prevButtonHTML}
                  ${nextButtonHTML}`;
    return html;
  }
}

export default new PaginationView();
