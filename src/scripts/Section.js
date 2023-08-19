export default class Section {
    constructor({ item, renderer }, containerSelector) {
      this._item = item;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(item) {
      this._container.prepend(item);
    }
  
    renderer() {
      this._item.forEach(this._renderer)
    }

    addItemDefault(item) {
      this._container.append(item)
    }
  
  }