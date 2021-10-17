const http = require(`http`)

const cars = [
    {model: `mazda`, year: 2000, price: 10500},
    {model: `reno`, year: 2020, price: 30100},
    {model: `subaru`, year: 1980, price: 5000}
]

const carsJson = JSON.stringify(cars)

const server = http.createServer((req, res)=>{
    if(req.url == `/` || req.url == `/cars`){
        res.write(carsJson)
        res.end()
    }
    else{
        res.write(`wrong url input`)
    }
})

server.listen(8000)