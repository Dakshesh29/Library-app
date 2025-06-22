const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('book-modal');
const form = document.getElementById('book-form');
const bookContainer = document.getElementById('book-container');

function openModal() {
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  form.reset(); 
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const book = {
    title,
    author,
    pages,
    read,
  };

  addBookToUI(book);

  closeModal();
});


function addBookToUI(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');

  card.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read Yet'}</p>
  `;

  bookContainer.appendChild(card);
}
