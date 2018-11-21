class SubMenu extends Menu{
  constructor(id, className, items) {
    super (id, className, items);
  }

  render() {
    let result = `<li class="${this.className}" id="${this.id}">`;
    // let result = '';
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].render();
      }
    }

    // let button = `<button id="${this.id}-button">Удалить</button>`;
    // result += button + `</li>`;

    result += `</li>`;

    return result;
  }

  // remove() {
  //   return super.remove();
  // }
}