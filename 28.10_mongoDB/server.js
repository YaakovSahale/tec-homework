const express = require(`express`)
const app = express()
const Mongodb = require(`mongodb`).MongoClient
const url = "mongodb://localhost:27017/blog"
const PORT = 8080

// Mongodb.connect(url, function(err, db) {
//   var dbo = db.db("blog");
//   // dbo.collection("author").find({}).toArray(function(err, result) {
//   //   console.log(result);
//   //   db.close();
//   // });

//   dbo.collection("post").find({}).toArray(function(err, result) {
//     console.log(result);
//     db.close();
//   });


// });

function printcollection(myCollection){
  Mongodb.connect(url, function(err, db) {
  var dbo = db.db("blog");
  dbo.collection(myCollection).find({}).toArray(function(err, result) {
    console.log(result);
    db.close();
  });
});
}

printcollection("post")


app.listen(PORT,()=>{
  console.log(`server listens on port:${PORT}`);
})