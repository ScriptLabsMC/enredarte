import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { Product } from "@/models/Product";

export async function GET(_, { params }) {
  await connectDB();
  const user = await User.findOne({ user_id: params.user_id });
  if (!user)
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );

  const detailedCart = await Promise.all(
    user.cart.map(async (item) => {
      const product = await Product.findOne({ product_id: item.item_id });
      return { data: product, count: item.quantity };
    })
  );

  return NextResponse.json({ cart: detailedCart });
}
