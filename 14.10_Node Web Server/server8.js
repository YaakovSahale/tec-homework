const http = require(`http`);
const fs = require(`fs`);

const products = [
  {
    name: `avocado`,
    price: 1000,
    img: `https://cdn.pixabay.com/photo/2018/03/09/08/04/avocado-3210885_960_720.jpg`,
  },
  {
    name: `banana`,
    price: 2000,
    img: `https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_960_720.png`,
  },
  {
    name: `orange`,
    price: 3000,
    img: `https://cdn.pixabay.com/photo/2012/04/26/12/51/orange-42394_960_720.png`,
  },
];

const productsJson = JSON.stringify(products);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case `/`:
        fs.readFile(`./index.html`, `utf-8`, (err, data)=>{
            if(err){
                res.write(JSON.stringify(err))
                console.log(err);
            }
            else{
                res.write(data)
            }
            res.end()
        })
      break;

    case `/about`:
        fs.readFile(`./about.html`, `utf-8`, (err, data)=>{
            if(err){
                res.write(JSON.stringify(err))
                console.log(err);
            }
            else{
                res.write(data)
            }
            res.end()
        })
      break;

    case `/sales`:
        fs.readFile(`./sales.html`, `utf-8`, (err, data)=>{
            if(err){
                res.write(JSON.stringify(err))
                console.log(err);
            }
            else{
                res.write(data)
            }
            res.end()
        })
      break;

    case `/products`:
        res.write(JSON.stringify(products),(err)=>{
            res.writeHead(404)
            res.write(err)
        })
        console.log("djfhdksjfhkgsdj")
      break;

    case `/product`:
        res.write(JSON.stringify(products[0]),(err)=>{
            res.writeHead(404)
            res.write(err)
        })
      break;

    default:
        res.write(err)
      break;
  }
  res.end()
});


server.listen(2000);
