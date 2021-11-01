const mongoDB = require(`mongodb`);
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
const mongoURL = "mongodb://localhost:27017/jsonplaceholder";

function getAll(req, res) {
  MongoClient.connect(mongoURL, (err, db) => {
    if (err) throw err;
    const dbHolder = db.db(`jsonplaceholder`);
    dbHolder
      .collection(`todos`)
      .find({})
      .toArray((err, todos) => {
        if (err) throw console.log(err);
        console.log(todos);
        res.send(todos).status(201);
        db.close();
      });
  });
}

function getOne(req, res) {
  MongoClient.connect(mongoURL, (err, db) => {
    if (err) throw err;
    const id = req.params.id;
    const dbHolder = db.db(`jsonplaceholder`);
    dbHolder.collection(`todos`).findOne({ _id: ObjectId(id) }, (err, doc) => {
      if (err) throw err;
      if (id === ``) {
        res.send(400);
      }
      if (!doc) {
        res.status(404);
      }
      res.send(doc);
    });
  });
}

function postDoc(req, res) {
  MongoClient.connect(mongoURL, (err, db) => {
    if (err) throw err;
    const object = req.body;
    const dbHolder = db.db(`jsonplaceholder`);
    dbHolder.collection(`todos`).insertOne(object, (err, todos) => {
      if (err) throw console.log(err);
      res.send(todos);
    });
  });
}

function deleteDoc(req, res) {
  MongoClient.connect(mongoURL, (err, db) => {
    if (err) throw err;
    const id = req.params.id;
    const dbHolder = db.db(`jsonplaceholder`);
    dbHolder
      .collection(`todos`)
      .deleteOne({ _id: ObjectId(id) }, (err, doc) => {
        if (err) throw err;
        if (doc.deletedCount == 0) {
          res.status(404);
        }
        console.log(doc);
        res.send(doc);
      });
  });
}

function patchDoc(req, res) {
  MongoClient.connect(mongoURL, (err, db) => {
    if (err) throw err;
    const id = req.params.id;
    const patch = req.body;
    const dbHolder = db.db(`jsonplaceholder`);
    dbHolder
      .collection(`todos`)
      .updateOne({ _id: ObjectId(id) }, { $set: patch }, (err, res) => {
        if (err) throw err;

        console.log(res);
      });
  });
}

module.exports = { getAll, getOne, postDoc, deleteDoc, patchDoc };
