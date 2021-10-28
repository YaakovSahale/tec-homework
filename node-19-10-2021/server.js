const express = require(`express`);
const app = express();
const path = require(`path`);
const exphbs = require(`express-handlebars`);
const axios = require("axios");
const PORT = 8080;

app.use(express.static(path.join(__dirname, `public`)));

app.set(`view engine`, `hbs`);
app.engine(
  `hbs`,
  exphbs({
    // layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: `main`,
    extname: `hbs`,
  })
);

app.get(`/`, (req, res) => {
  res.render("home", {
    title: `home page`,
  });
});

app.get(`/about`, (req, res) => {
  res.render("about", {
    title: `about`,
  });
});

app.get(`/error`, (req, res) => {
  res.render("error", {
    title: `error`,
  });
});

app.get(`/help`, (req, res) => {
  res.render("help", {
    title: `help`,
  });
});

app.get(`/location_found`, (req, res) => {
  if (req.query.city) {
    const API_KEY = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          console.log(`got success`);
          coords = res.data.coord.lat;
          console.log(coords);
          res.render("location_found", {
            title: `location found`,
            lat: latitude,
            lon: longitude,
          });
        }
      })
      .catch((error) => {
        console.log(`got error`);
        console.log(error);
      });
  }
});

app.listen(PORT, () => {
  console.log(`server is listens on port ${PORT}`);
});
