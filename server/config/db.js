import mongoose from "mongoose";


const connectDb = async()=>{
    try {
        const result = mongoose.connect(process.env.MONGO_DB,{
            dbName:'Nexora'
        })
        if(result){
            console.log("MongoDb connected");
        }
    } catch (error) {
        console.log(error.message);
        
    }
}


export default connectDb