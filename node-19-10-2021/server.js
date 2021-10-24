const express = require(`express`);
const app = express();
const path = require(`path`);
const exphbs = require(`express-handlebars`);
const axios =  require("axios");
const PORT = 8080;

app.use(express.static(path.join(__dirname,`public`)));

app.set(`view engine`, `hbs`);
app.engine(`hbs`, exphbs({
  // layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: `main`,
  extname:`hbs`
}));

app.get(`/`, (req, res) => {
  res.render("home", {
    title: `home page`,
  });
});

app.get(`/about`, (req, res) => {
  res.render("about",{
    title: `about`,
  });
});

app.get(`/error`, (req, res) => {
  res.render("error",{
    title: `error`,
  });
});

app.get(`/help`, (req, res) => {
  res.render("help",{
    title: `help`,
  });
});

app.get(`/location_found`, (req, res) => {
  res.render("location_found",{
    title: `location found`,
  });
});




let userCity = `Haifa`
const API_KEY = `dbb41d0d918eaf828404805e464a9fd2`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}`
let coords

axios
.get(url)
.then((res) => {
  if (res.status === 200) {
    console.log(`got success`);
    coords = res.data.coord
    console.log(coords);
    }
  })
  .catch((error) =>{
    console.log(`got error`);
    console.log(error);
  }); 








app.listen(PORT, () => {
  console.log(`server is listens on port ${PORT}`);
});
