const http = require(`http`);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case `/`:
      res.write('<h1 style="text-align:center;">welcome to home page </h1>');
      break;

    case `/about`:
      res.write('<h1 style="text-align:center;">welcome to about page</h1>');
      break;

    case `/blog`:
      res.write('<h1 style="text-align:center;">welcome to blog page</h1>');
      break;

    case `/blog/post`:
      res.write('<h1 style="text-align:center;">welcome to post page</h1>');

      break;

    default:
        res.writeHead(404)
        res.write(`url not found`)
  }

  res.end()
});

server.listen(1234);
