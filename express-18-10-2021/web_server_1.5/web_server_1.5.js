console.log(`app is loading...`);
const express = require(`express`);
const app = express();
const path = require(`path`)
const PORT = 8080;

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname,`index.html`))
});

app.get(`/about`,(req, res) => {
    res.sendFile(path.join(__dirname,`about.html`))
})

app.get(`/contact`, (req, res) => {
    res.send(__dirname, `contact.html`)
})

app.get(`/courses`, (req, res) => {
    res.sendFile(path.join(__dirname, `courses.html`))
})

app.get(`/events`, (req,res) => {
    res.sendFile(path.join(__dirname, `events.html`))
})

app.get(`/mentoring`, (req, res) => {
    res.sendFile(path.join(`mentoring.html`))
})

app.get(`/testimonials`, (req, res) => {
    res.sendFile(path.join(__dirname,`testimonials.html` ))
})


app.listen(PORT)