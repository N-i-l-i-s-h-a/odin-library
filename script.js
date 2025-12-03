const myLibrary = [];
const modal = document.querySelector(".book-details");
const display = document.querySelector(".lib-container");
const addBookbtn = document.querySelector(".new-book");
const closebtn = document.querySelector(".close-modal");
const submitbtn = document.querySelector(".submit-book");

addBookbtn.addEventListener('click', enterDetails);
submitbtn.addEventListener('click', addBookToLibrary);
closebtn.addEventListener('click', () => modal.close(undefined));

function Book(title, author, readingstatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.readingstatus = readingstatus;
}

function addBookToLibrary(){
    const title = document.querySelector("#book-title").value;
    const author = document.querySelector("#author").value;
    const readingstatus = document.querySelector("#status").value;
    const book = new Book(title, author, readingstatus);
    myLibrary.push(book);
    let card = document.createElement("div");
    card.classList.add("card");
    for(const key in book){
        let info = document.createElement("p");
        info.innerText += `${key} : ${book[key]}`;
        card.append(info);
    }
    display.append(card);
}

function removeBook(){

}

function enterDetails(){
    modal.showModal();
}