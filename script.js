const myLibrary = [];
const modal = document.querySelector(".book-details");
const display = document.querySelector(".lib-container");
const addBookbtn = document.querySelector(".add-card");
const closebtn = document.querySelector(".close-modal");
const submitbtn = document.querySelector(".submit-book");
const bookForm = document.getElementById("book-entry");

class Book {
    constructor(title, author, readingstatus){
        this.Title = title;
        this.Author = author;
        this.Read = readingstatus;
        this.id = crypto.randomUUID();
    }
}

Book.prototype.toggleRead = function() {
  this.Read = !this.Read;
};

bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  const formData = new FormData(bookForm);
  const title = formData.get("book-title");
  const author = formData.get("author");
  const readingstatus = formData.get("status") === "on";
  const book = new Book(title, author, readingstatus);
  myLibrary.push(book);
  bookForm.reset();
  addBookToLibrary(book);
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const parent = event.target.closest('.book');
    if (parent) {
      parent.remove();
      const idx = myLibrary.findIndex(book => book.id === parent.dataset.id);
      myLibrary.splice(idx, 1);
    }
  }
});

addBookbtn.addEventListener('click', enterDetails);
closebtn.addEventListener('click', () => modal.close(undefined));

function addBookToLibrary(book){

  let card = document.createElement("div");
  card.classList.add("book");
  card.dataset.id = book.id;

  let statusMark = document.createElement("label");
  statusMark.classList.add("switch")

  let togglebtn = document.createElement("input");
  togglebtn.setAttribute("type", "checkbox");
  togglebtn.classList.add("toggle-mode");

  let slider = document.createElement("span");
  slider.classList.add("slider");
  slider.classList.add("round");

  statusMark.appendChild(togglebtn);
  statusMark.appendChild(slider);

  let toggletext = document.createElement("p");

  if (book.Read) {
      togglebtn.checked = true;
      toggletext.innerText = "Read";
  } 
  else {
      togglebtn.checked = false;
      toggletext.innerText = "Not Read";
  }

  statusMark.append(togglebtn);
  statusMark.append(slider);

  togglebtn.addEventListener('change', (event) => {

    const targetBook = myLibrary.find(b => b.id === book.id);
    
    if (targetBook) {
        targetBook.toggleRead(); 
        toggletext.innerText = targetBook.Read ? "Read" : "Not Read";
    }
  });

  const titleDisplay = document.createElement("div");
  titleDisplay.classList.add("card-content");
  titleDisplay.textContent = `Title: ${book.Title}`;
  card.appendChild(titleDisplay);

  const authorDisplay = document.createElement("div");
  authorDisplay.classList.add("card-content");
  authorDisplay.textContent = `Author: ${book.Author}`;
  card.appendChild(authorDisplay);

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("switch-content");
  statusContainer.appendChild(toggletext);
  statusContainer.appendChild(statusMark);
  card.appendChild(statusContainer);
  
  const delbtn = document.createElement("button");
  delbtn.textContent = "Remove";
  delbtn.classList.add("delete-btn");
  card.appendChild(delbtn);

  card.append(delbtn);
  display.append(card);
  modal.close();
}

function enterDetails(){
  modal.showModal();
}