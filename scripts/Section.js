export default class Section {
    constructor({ item, renderer }, containerSelector) {
      this._item = item;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(item) {
      this._container.append(this._renderer(item));
    }
  
    renderer() {
      this._item.forEach((card) => {
        this.addItem(card);
      });
    }
  
  }