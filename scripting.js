console.log("Welcome to my libraray website");

// constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;
  tableBody.innerHTML += uiString;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let massage = document.getElementById("massage");
  massage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message!</strong> ${displayMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
setTimeout(function(){
  massage.innerHTML = ''
}, 2000);
};

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormsubmit);

function libraryFormsubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("Fiction");
  let programing = document.getElementById("Programing");
  let operatingsystem = document.getElementById("operetingsystem");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programing.checked) {
    type = programing.value;
  } else if (operatingsystem.checked) {
    type = operatingsystem.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success', 'Your book is successfully added');
  } else {
    // show error
    display.show('danger', 'Sorry u can not add this book');
  }
  e.preventDefault();
}
