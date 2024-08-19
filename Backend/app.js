import express, { request, response } from 'express';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';
import cors from'cors';
import { productRoutes } from './modules/products/routes/product-route.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/',productRoutes);
const promise=createConnection();
promise.then((conInfo)=>{
    console.log('DB connection Established');

    app.listen(process.env.PORT ||4444,err=>{
        if(err){
            console.log('Application Crash ',err);
        }else{
            console.log('Application Up and  Running....');
        }
    }) 
}).catch(err=>{
    console.log("Application cant Up DB is Down");
})