import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email: String,
    password: String
})

const usersModel = mongoose.model("users", usersSchema);

export default usersModel