import express,{json} from 'express' ;
import mongoose from 'mongoose';
import router from "./routes/routes.js";
import dotenv from 'dotenv';
dotenv.config();
const app=express();
const PORT=process.env.PORT || '7000';
console.log(process.env.PORT)
console.log(PORT)
app.use(json());
app.use("/api/bankapi",router);
app.listen(PORT,()=>{
    console.log(`server is running on port ${ PORT}`);
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hrcx4am.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("DB connected successfuly.")
})