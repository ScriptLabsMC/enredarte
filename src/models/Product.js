import { Schema, model, models } from "mongoose";

const imgSchema = new Schema({
  url: { type: String, required: true },
  alt: { type: String, default: "" },
});
const ProductSchema = new Schema({
  product_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  image: { type: imgSchema, required: true },
});

export const Product = models.Product || model("Product", ProductSchema);