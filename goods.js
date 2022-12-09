let goods=[
    {id:1,name:"Fanta",price:"2 AZN",amount:"2 L"},
    {id:2,name:"Cola",price:"2 AZN",amount:"2 L"},
    {id:3,name:"Orbit",price:"0.7AZN",amount:"1 eded"},
    {id:4,name:"Mal eti",price:"14 AZN",amount:"1 kg"},
    {id:5,name:"Qoyun eti",price:"18 AZN",amount:"1kg"},
    {id:6,name:"Corek",price:"0.7AZN",amount:"2 eded"},
    {id:7,name:"Kolbasa",price:"8 AZN",amount:"0.5kg"},
    {id:8,name:"Magnum",price:"2 AZN",amount:"1 eded"},
    {id:9,name:"Pal sud",price:"2 AZN",amount:"1 L"},
    {id:10,name:"Pendir",price:"5 AZN",amount:"3 kg"}
]

const express=require("express");
const app=express();

app.get("/good/:id", function (req, res) {
    const idOfGood = parseInt(req.params.id);
    const good = goods.find((good) => good.id === idOfGood);
    if (!good) {
      res.status(404).send();
    }
    res.status(200).json(good);
});

app.get('/good', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
  });
  

app.listen(3000,function(){
    console.log('Server started');
})