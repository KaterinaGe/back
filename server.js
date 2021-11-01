import express from 'express'

const port = 8000;

const app = express()

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/products", (req,res) => {
    const products = [
      {
        id: 1,
        name: "hammer",
      },
      {
        id: 2,
        name: "screwdriver",
      },
      ,
      {
        id: 3,
        name: "wrench",
      },
    ];
 
   res.json(products);
 })
app.listen(port, () => console.log(`Example app listening on port ${port}!`));