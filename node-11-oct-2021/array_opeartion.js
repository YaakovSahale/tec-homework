// const process = require(`process`)
// const bookNameCMD = process.argv[2]

// const books = []

// const book1 ={name: `batman`, pages: 342}
// const book2 ={name: `superman`, pages: 28}
// const book3 ={name: `venom`, pages: 102}

// books.push(book1,book2,book3)
// console.log(books);

//!................................2

// const bookIndex = books.findIndex((book)=>{return bookNameCMD == book.name})

// if(bookIndex != -1){
//     console.log(books[bookIndex].pages);
// }
// else{
//     console.log(`book wasn't found`);
// }

//!.........................3

// if(bookIndex != -1){
//     books[bookIndex].pages += 100;
//     console.log(books);
// }
// else{
//     console.log(`book wasn't found`);
// }

//!.........................4

// if(bookIndex != -1){
//     books.splice(bookIndex,1)
//     console.log(books);
// }
// else{
//     console.log(`book wasn't found`);
// }

//!.........................5

const process = require(`process`)
const numCMD = process.argv[2]

const arrayOfNUms = [10,20,30,20]

arrayOfNUms.filter((num,i,arr)=>{
    if (num == numCMD) {
    arr[i]++
    }
})

console.log(arrayOfNUms);
