const fs = require(`fs`);

function addBook(libraryobj, name, author, pages, fileName) {
  libraryobj.forEach((book) => {
    if (book.name == name) {
      console.log(`error: the book ${name} already exist`);
      return;
    }
  });
  let newBookJson = JSON.stringify({ name, author, pages });
  fs.appendFileSync(fileName, newBookJson);
  console.log(`success: the book ${name} has been added`);
}

module.exports.addBook = addBook;
