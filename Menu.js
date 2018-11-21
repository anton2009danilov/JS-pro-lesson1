class Menu {
  constructor(id, className, items) {
    this.id = id;
    this.className = className;
    this.items = items;
  }

  render() {
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].render()
      }

      if (this.items[i] instanceof SubMenu) {
        result += this.items[i].render();
      }
    }

    let button = `<button id="${this.id}-button">Удалить</button>`;
    result += button + `</ul>`;

    return result
  }

  remove() {
    document.getElementById(`${this.id}-button`).
    addEventListener('click', () => document.getElementById(this.id).remove());
  }
}