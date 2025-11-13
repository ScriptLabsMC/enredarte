import { connectDB } from "./mongodb";
import { User } from "@/models/User";
import { Product } from "@/models/Product";

export async function getUserCart(userId) {
  await connectDB();

  const user = await User.findOne({ user_id: userId });
  if (!user) throw new Error("[Cart Lib] Usuario no enconrado");

  const productIds = user.cart.map((i) => i.item_id);
  const products = await Product.find({ product_id: { $in: productIds } });

  return {
    products: user.cart.map((i) => {
      const data = products.find((p) => p.product_id === i.item_id);
      return { data: data || null, count: i.quantity };
    }),
  };
}
