'use strict';

import express from 'express';
import products from './ProductData'

const app = express();

app.get('/api/product',(req,res) =>{
    res.Send(products.item);
});

app.listen(5000,()=>{console.log("server started at http://localhost:5000")})