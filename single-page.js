const currentDate = new Date().toLocaleString();
document.getElementById('current-date').innerHTML = currentDate;

// display the books list when click the button "List"
const bookList = document.getElementById('display-books');
const list = document.getElementById('list-link');
const formContainer = document.getElementById('form-input');

list.addEventListener('click', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

window.addEventListener('load', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.getElementById('new-link');

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.getElementById('contact-link');
const contactInfo = document.getElementById('our-contact');

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});
