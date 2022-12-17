import {User} from '../models/user.js'

const Addnewuser= async (userData)=>{
    const newUser = new User({
        ...userData
    })
    const savedUser = await newUser.save()
    return savedUser
}

const Readuser= async (id)=>{
    const user = await User.findOne({_id: id})
    return user
}

const loadUsers= async ()=>{
    const users = await User.find()
    return users
}

const deposit = async (id, amount) => {
    const user = await User.findOne({_id: id})
    const lastAmount = user.cash
    const updatedUser = await User.updateOne({_id: id}, {cash: lastAmount + amount})
    return updatedUser
}

const transfer = async (from, to, amount) => {
    const srcUser = await User.findOne({_id: from})
    const targetUser = await User.findOne({_id: to})
    const canTransfer = srcUser.cash + srcUser.credit >= amount
    if(!canTransfer) return "not enough money to transfer."
    const updatedSrc = await User.updateOne({_id: from}, {cash: srcUser.cash - amount})
    const updatedTarget = await User.updateOne({_id: to}, {cash: targetUser.cash + amount})
    return {updatedSrc, updatedTarget}
}

const updateCredit = async (id, newCredit) => {
    const updatedUser = await User.updateOne({_id: id}, {credit: newCredit})
    return updatedUser
}

export {Addnewuser,Readuser,deposit, updateCredit, transfer, loadUsers};
