import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongo DB Connected successfully ${conn.connection.host}`)

    }catch(err){
        console.log(`MonoDB Connection error :${err}`);
        console.log(process.env.MONGODB_URL);
    }
}