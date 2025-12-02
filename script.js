const myLibrary = [];
const display = document.querySelector(".lib-container");
const card = document.createElement("div");
const addBookbtn = document.querySelector(".new-book");

addBookbtn.addEventListener('click', enterDetails);
card.classList.add("card");


function Book() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    let name = this.name;
    let author = this.author;
    let status = this.status;
}

function addBookToLibrary(name, author, status){
    const book = new Book(name, author, status);
    myLibrary.push(book);
    displayBook();
}

function displayBook(){
    for(let book in myLibrary){
        for(const key in book){
            card.innerText += `${key} : ${book[key]}`;
        }
    }
}

function removeBook(){

}

function enterDetails(){
    const modal = document.querySelector(".book-details");
    modal.showModal();
}