import dotenv from 'dotenv';

dotenv.config();


export default{
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://ingricamm:i4zcF11EdEQBfeWz@cluster0.j9fmx.mongodb.net/ecommerce?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}