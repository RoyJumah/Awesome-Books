import Book from './Book.js';
import UI from './UI.js';
import Bookstore from './Bookstore.js';

const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  UI.addBook(book);
  Bookstore.addBook(book);

  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
});

document.getElementById('bookshelf').addEventListener('click', event => {
  const title =
    event.target.previousElementSibling.previousElementSibling.textContent.replace(
      /[^a-z0-9]/gi,
      ''
    );
  console.log(title);
  Bookstore.removeBook(title);
  UI.removeBook(event.target);
});
