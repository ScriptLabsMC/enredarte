import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { Product } from "@/models/Product";
import isAdmin from "@/lib/isAdmin";

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

export async function POST(req, { params }) {
  await connectDB();
  if (!isAdmin(req))
    return NextResponse.json(
      { error: "Acceso no autorizado" },
      { status: 403 }
    );

  try {
    const data = await req.json();
    const { item_id, quantity } = data;
    if (!item_id || !quantity)
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });

    const user = await User.findOne({ user_id: params.user_id });
    if (!user)
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );

    const existing = user.cart.find((i) => i.item_id === item_id);
    if (existing) existing.quantity += quantity;
    else user.cart.push({ item_id, quantity });

    await user.save();
    return NextResponse.json({ message: "Producto agregado al carrito" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  if (!isAdmin(req))
    return NextResponse.json(
      { error: "Acceso no autorizado" },
      { status: 403 }
    );

  try {
    const data = await req.json();
    const { item_id } = data;
    const user = await User.findOne({ user_id: params.user_id });
    if (!user)
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );

    user.cart = user.cart.filter((i) => i.item_id !== item_id);
    await user.save();
    return NextResponse.json({ message: "Producto eliminado del carrito" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
