
import express from 'express';
import data from './ProductData.js'

 const app = express();

app.get("/product/", (req, res) => {
    res.send(data.products);
})

app.listen(5000, () => {console.log("server started at http://localhost:5000")})