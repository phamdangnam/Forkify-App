import icons from '../../img/icons.svg';

export default class View {
  _data;
  message;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered
   * @returns {undefined}
   */

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const html = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderMessage(message = this._message) {
    const html = `
    <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
    console.log('a');
  }

  renderError(message = this._errorMessage) {
    const html = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSpinner() {
    const html = `
    <div class="spinner">
        <svg>
         <use href="${icons}#icon-loader"></use>
        </svg>
     </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', html);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
