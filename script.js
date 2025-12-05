const myLibrary = [];
const modal = document.querySelector(".book-details");
const display = document.querySelector(".lib-container");
const addBookbtn = document.querySelector(".add-card");
const closebtn = document.querySelector(".close-modal");
const submitbtn = document.querySelector(".submit-book");
const bookForm = document.getElementById("book-entry");

bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(bookForm);
    const title = formData.get("book-title");
    const author = formData.get("author");
    const readingstatus = formData.get("status");
    const book = new Book(title, author, readingstatus);
    myLibrary.push(book);
    addBookToLibrary(book);
  });


document.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const parent = event.target.closest('.book');
    if (parent) {
      parent.remove();
    }
  }
});

addBookbtn.addEventListener('click', enterDetails);
closebtn.addEventListener('click', () => modal.close(undefined));

function Book(title, author, readingstatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.Title = title;
    this.Author = author;
    this.Status = readingstatus;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book){
    let card = document.createElement("div");
    card.classList.add("book");
    for(const key in book){
        if(key == 'id')   continue;
        let info = document.createElement("p");
        info.innerText += `${key} : ${book[key]}`;
        card.append(info);
    }
    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    delbtn.classList.add("delete-btn");
    card.append(delbtn);
    display.append(card);
}

// function removeBook(id){
//     const idx = myLibrary.findIndex(book => book.id === id);
//     myLibrary.splice(idx, 1);
// }

function enterDetails(){
    modal.showModal();
}