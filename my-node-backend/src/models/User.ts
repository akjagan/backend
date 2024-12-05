import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for User document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  validatePassword(password: string): Promise<boolean>;
}

// User schema definition
const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Method to validate the password
UserSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  const bcrypt = require("bcrypt");
  return bcrypt.compare(password, this.password);
};

// Pre-save hook for hashing the password
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const bcrypt = require("bcrypt");
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Export the User model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
