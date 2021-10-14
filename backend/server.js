import express from 'express';
import data from './ProductData.js';
import config from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'


dotenv.config();

const mongodbUrl= config.MONGODB_URL;

mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.catch((error) => console.log(error.reason))


 const app = express();

app.use("api/users", userRoutes)

 //PRODUCTOS PARA EL HOMEPAGE
app.get("/api/products/", (req, res) => {
    res.send(data.products);
})

//CARGAR DETALLES DE PRODUCTO
app.get("/api/products/:id", (req, res) => {
    const productId=req.params.id
    const product= data.products.find(item => item.id ===productId)
    if (product)
        res.send(product);
    else
        res.status(404).send({msg:'Product Not Found.'})


})


app.listen(5000, () => {console.log("server started at http://localhost:5000")})