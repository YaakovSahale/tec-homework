const express = require(`express`);
const app = express();
const PORT = 8080;
const utils = require(`./utils`);

app.use(express.json());

app.get("/todos", (req, res) => {
  utils.getAll(req, res);
});

app.get(`/todos/:id`, (req, res) => {
  utils.getOne(req, res);
});

app.post(`/todos`, (req, res) => {
  utils.postDoc(req, res);
});

app.delete(`/todos/:id`, (req, res) => {
  utils.deleteDoc(req, res);
});

app.patch(`/todos/:id`, (req, res) => {
  utils.patchDoc(req, res);
});



app.listen(PORT, () => {
  console.log(`app is listens on port: ${PORT}`);
});
