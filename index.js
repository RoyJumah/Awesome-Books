import Book from './Book.js';
import UI from './UI.js';
import Bookstore from './Bookstore.js';
document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  UI.addBook(book);
  Bookstore.addBook(book);
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
});

document.getElementById('bookshelf').addEventListener('click', event => {
  UI.removeBook(event.target);
  const title =
    event.target.previousElementSibling.previousElementSibling.textContent.replace(
      /[^a-z0-9]/gi
    );
  console.log(title);
  Bookstore.removeBook(title);
});
