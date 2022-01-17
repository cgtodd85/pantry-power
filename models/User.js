import mongoose from "mongoose";
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({});

// username: {
//     type: String,
//     trim: true,
//     required: "Username is required",
//   },
//   password: {
//     type: String,
//     trim: true,
//     required: "password is required!",
//     validate: [({ length }) => length >= 4, "Password should be longer"],
//   },
//   userCreated: {
//     type: Date,
//     default: Date.now,
//   },
// });

// userSchema.pre("save", function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   try {
//     const hashedPassword = bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//     next();
//   } catch (err) {
//     return next(err);
//   }

// userSchema.pre("updateOne", function (next) {
//   const update = this.getUpdate().$set;
//   if (!update.password) {
//     return next();
//   }
//   try {
//     const hashedPassword = bcrypt.hash(update.password, 10);
//     update.password = hashedPassword;
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

// userSchema.methods.comparePassword = function (pass) {
//   return bcrypt.compareSync(pass, this.password);
// };

const User = mongoose.model("User", userSchema);

export default User;
