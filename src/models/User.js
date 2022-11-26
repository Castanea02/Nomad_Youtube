import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    location:{type:String},
});


userSchema.pre("save", async function(){//middle ware
    console.log("Pre :" ,this.password);
    this.password = await bcrypt.hash(this.password, 5); //Encrypt Password
    console.log("After :" ,this.password);
});

const User = mongoose.model("User", userSchema);

export default User;