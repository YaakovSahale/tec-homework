console.log(`app is loading`);

const library_modules = require(`../libraryModules/libraryFunction`)
const fs = require(`fs`);
const process = require(`process`);
const action = process.argv[2];
const name = process.argv[3];
const author = process.argv[4];
const pages = process.argv[5];
const newName = process.argv[6];

let library = [
  { name: `a`, author: `avi korean`, pages: 350 },
  { name: `b`, author: `lital shemesh`, pages: 200 },
  { name: `c`, author: `meni firer`, pages: 420 },
];
console.log(library);

let libraryJson = JSON.stringify(library);
const fileName = `./library_file_sync_array/libraryFile.txt`;

try {
  fs.writeFileSync(fileName, libraryJson);
} catch (error) {
  console.log(`error: the path file doesn't exist`);
  console.log(`error: the data need to be JSON`);
}

const libraryobj = JSON.parse(fs.readFileSync(fileName, `utf-8`));

switch (action) {
  case `add`:
    library_modules.addBook(libraryobj,name,author,pages,fileName)
    // libraryobj.forEach((book) => {
    //   if (book.name == name) {
    //     console.log(`error: the book ${name} already exist`);
    //     return;
    //   }
    // });
    // let newBookJson = JSON.stringify({ name, author, pages });
    // fs.appendFileSync(fileName, newBookJson);
    // console.log(`success: the book ${name} has been added`);
    break;

  case `update`:
    libraryobj.forEach((book) => {
      if (book.name == name) {
        book.name = newName;
        book.author = author;
        book.pages = pages;

        libraryJson = JSON.stringify(libraryobj);
        fs.writeFileSync(fileName, libraryJson);
        console.log(`success: the book ${name} has been updated`);
        return;
      }
    });
    console.log(`error: the book ${name} doesn't exist`);
    break;

  case `delete`:
    libraryobj.forEach((book, i, arr) => {
      if (book.name == name) {
        arr.splice(i, 1);
        libraryJson = JSON.stringify(libraryobj);
        fs.writeFileSync(fileName, libraryJson);
        console.log(`success: the book ${name} has been deleted`);
        console.log(libraryobj);
        return;
      }
    });
    console.log(`error: the book ${name} doesn't exist`);
    break;

  case `getAll`:
    console.log(`success: the library has been showed`);
    console.log(libraryobj);
    break;

  case `search`:
    libraryobj.forEach((book) => {
      if (book.name == name) {
        console.log(`success: the book ${name} has been found`);
        console.log(book);
        return;
      }
    });
    console.log(`error: the book ${name} doesn't exist`);
    break;

  default:
    console.log(`wrong action input`);
    break;
}
