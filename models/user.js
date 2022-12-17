import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    cash: {
        type: Number,
        default: 0
    },
    credit: {
        type: Number,
        default: 0
    }
})

export const User = mongoose.model('user', userSchema)

