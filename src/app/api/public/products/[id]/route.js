import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET(_, { params }) {
  await connectDB();
  const product = await Product.findOne({ product_id: params.id });
  if (!product)
    return NextResponse.json(
      { error: "Producto no encontrado" },
      { status: 404 }
    );
  return NextResponse.json(product);
}
