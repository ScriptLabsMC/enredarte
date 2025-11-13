import mongoose, { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  item_id: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const UserSchema = new Schema({
  user_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  cart: { type: [itemSchema], default: [] },
});

export const User = models.User || model("User", UserSchema);