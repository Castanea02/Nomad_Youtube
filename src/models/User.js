import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Number, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: { type: String },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }], //model Video connect
});

userSchema.pre("save", async function () {
  //middle ware
  if (this.ismodified("password")) {
    //비밀번호 수정시에만.
    this.password = await bcrypt.hash(this.password, 5); //Encrypt Password
  }
});

const User = mongoose.model("User", userSchema);

export default User;
