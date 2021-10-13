const fs = require(`fs`)

let books = [
    {name:`avi` ,description:`abc`, pages:`150` },
    {name:`bari` ,description:`kroks`, pages:`200` },
    {name:`casa` ,description:`zez`, pages:`400` }
]

const booksJson = JSON.stringify(books)

fs.writeFileSync(`books.txt`,booksJson)

// in JSON
