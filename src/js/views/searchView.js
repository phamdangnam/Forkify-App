class SearchView {
  _searchButton = document.querySelector('.search__btn');
  _searchField = document.querySelector('.search__field');

  addEventHandler(handler) {
    this._searchButton.addEventListener('click', e => {
      const button = e.target.closest('.search__btn');
      if (!button) return;
      handler();
      e.preventDefault();
      const searchField = e.target.previousElementSibling;
      searchField.value = '';
    });
  }

  getSearchValue() {
    return this._searchField.value;
  }
}

export default new SearchView();
