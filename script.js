let library = [];

const temp = document.querySelector(".book");
const bookshelf = document.querySelector("#bookshelf");
let idBook = library.length;
function Book(title, author) {
  this.id = idBook;
  this.title = title;
  this.author = author;
  idBook += 1;
}


function AddBook() {
  event.preventDefault();
  const formAddBook = document.forms.AddBook;
  const bookData = new FormData(formAddBook);
  const bookTitle = bookData.get("title");
  const bookAuthor = bookData.get("author");
  formAddBook.reset();
  SaveBook(bookTitle, bookAuthor);
}

function DeleteBook(id) {
  library = library.filter((book) => book.id !== id);
  localStorage.library = JSON.stringify(library);
  ReloadLibrary();
}
function DisplayBook(book) {
  const clon = temp.content.cloneNode(true);
  clon.querySelectorAll("p")[0].innerHTML = "BOOK NAME: " + book.title;
  clon.querySelectorAll("p")[1].innerHTML = "AUTHOR NAME: " + book.author;
  clon.querySelector("button").addEventListener("click", () => {
    DeleteBook(book.id);
  });
  bookshelf.appendChild(clon);
}

ReloadLibrary();
