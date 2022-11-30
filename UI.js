import Bookstore from './Bookstore.js';

export default class UI {
  static addBook(book) {
    const bookshelf = document.getElementById('bookshelf');
    const ul = document.createElement('ul');
    ul.innerHTML = `
    <span>
    <li>"${book.title}" by</li>
    <li>${book.author}</li>
    </span>
    <button class ="delete" type = "button">Remove</button>
    `;
    bookshelf.appendChild(ul);
  }

  static removeBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.remove();
    }
  }

  static displayBooks() {
    const books = Bookstore.getBooks();
    books.forEach((book) => {
      UI.addBook(book);
    });
  }
}
