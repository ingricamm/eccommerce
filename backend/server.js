import express from 'express';
import config from './config.js';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import userRoutes from './routes/userRoutes.js'
import productRoute from './routes/productRoute.js'
import orderRoute from './routes/orderRoute.js'

dotenv.config();

const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    //useCreateIndex: true,

})
.then(db => console.log('db is conected'))
.catch((error) => console.log(error.reason))


 const app = express();
 
 
app.use(express.json());
app.use(express.urlencoded({extended: true} ));
app.use('/api/users', userRoutes);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

//  //PRODUCTOS PARA EL HOMEPAGE
// app.get("/api/products/", (req, res) => {
//     res.send(data.products);
// })

// //CARGAR DETALLES DE PRODUCTO
// app.get("/api/products/:id", (req, res) => {
//     const productId=req.params.id
//     const product= data.products.find(item => item.id ===productId)
//     if (product)
//         res.send(product);
//     else
//         res.status(404).send({msg:'Product Not Found.'})


// })

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
// app.listen(5000, () => {console.log("server started at http://localhost:5000")})