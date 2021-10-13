const fs = require(`fs`);

const books = fs.readFileSync(`books.txt`, `utf-8`);
let booksObj = JSON.parse(books);

let min = booksObj[0].pages;
let minBook 
booksObj.forEach((element,index) => {
    if(element.pages < min){
        min = element.pages
        minBook = element.name
    }
});

console.log(`the book: ${minBook} have the lowest pages: ${min}`);



