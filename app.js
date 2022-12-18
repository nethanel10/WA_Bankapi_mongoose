import express,{json} from 'express' ;
import mongoose from 'mongoose';
import router from "./routes/routes.js";
import dotenv from 'dotenv';
import cors from "cors"
import * as url from 'url'
import path from 'path';
const _dirname=url.fileURLToPath(new URL ('./',import.meta.url))
dotenv.config();
const app=express();
app.use(cors({credentials:true}));

// const corsOrigin ={
//     origin:'http://localhost:3000', //or whatever port your frontend is using
//     credentials:true,            
//     optionSuccessStatus:200
// }
const publicpath=path.join(_dirname,'build')
app.use(express.static(publicpath))


const PORT=process.env.PORT || '7000';
console.log(process.env.PORT)
console.log(PORT)
app.use(json());
  
app.use("/api/bankapi",router);
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'build','index.html'))
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${ PORT}`);
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hrcx4am.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("DB connected successfuly.")
})