import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import connectDb from './config/db.js';
import mainRouter from './routes/router.js';
import User from './models/userModel.js';

const app = express();
connectDb();
app.use(cors())
app.use(express.json());
const PORT  = process.env.PORT;
app.use((req,res,next)=>{
    console.log(req.url + " " + req.method);
    next();
})

app.use('/api',mainRouter)
app.get('/test', async(req,res)=>{
    const testUser = new User({
        email:'testUser@email.in',
        password:'testUser'
    })

    try {
        await testUser.save();
        console.log("user save sussfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
})
app.get('/',(req,res)=>{
    res.status(200).send("server is running good");
})

app.listen(PORT,()=>{
    console.log("Server is running on port "+ PORT);
    
})