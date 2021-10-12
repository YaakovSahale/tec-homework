const fs = require(`fs`);
const process = require(`process`);
const fileName = process.argv[2];
const str = process.argv[3];

//!.......................1

// fs.writeFileSync(fileName, str)

//!.......................2

// const dataRead = fs.readFileSync(fileName, `utf-8`)
// console.log(dataRead);

//!.......................3

// fs.writeFileSync(fileName, str, {flag:`a`})

// const apenData = fs.appendFileSync(fileName,str)
// console.log(apenData);

//!.......................4

const book = {name : `book1` , pages : 123}
const jsonBook = JSON.stringify(book);

fs.writeFileSync(fileName, jsonBook);

//!.......................5

const readData = fs.readFileSync(fileName,`utf-8`)
const readDataParse = JSON.parse(readData)
console.log(readDataParse);