import { Router } from "express";
import{
    Addnewuser,
    Readuser,
    loadUsers,
    updateCredit,
    deposit,
    transfer,
} from "../controllers/controllers.js"

const router = Router();

router.get("/users", async (req,res)=>{
    const users = await loadUsers()
    res.status(200).json(users)
});

router.post("/users/add", async (req,res)=>{
    try{
const createuser= await Addnewuser(req.body);
res.status(201).json(createuser)
    }

    catch(err){
        res.status(400).json({error:err.message})
    }

})

router.get("/users/:id", async(req,res)=>{

    try{
        const user = await Readuser(req.params.id)
        res.status(200).json(user)
    }

    catch(err){
        res.status(400).json({error:err.message})

    }
})

router.put("/users/:id/credit", async (req,res)=>{
    const {id}=req.params;
    const {newCredit} = req.body
    if(!newCredit) return res.status(400).send("empty newCredit field.")
    try{
        const user = await updateCredit(id,newCredit)
        res.status(200).json(user)
    }

    catch(err){
        res.status(400).json({error:err.message})
    }
})

router.put("/users/:id/deposit", async (req,res)=>{
    const {id}=req.params;
    const {amount} = req.body
    if(!amount) return res.status(400).send("empty amount field.")
    try{
        const user = await deposit(id,amount)
        res.status(200).json(user)
    }

    catch(err){
        res.status(400).json({error:err.message})
    }
})

router.put("/users/transfer/:from/:to", async (req,res)=>{
    const {from, to}=req.params;
    const {amount} = req.body
    if(!amount || !from || !to) return res.status(400).send("empty field. try again.")
    try{
        const user = await transfer(from, to, amount)
        res.status(200).json(user)
    }

    catch(err){
        res.status(400).json({error:err.message})
    }
})

export default router;