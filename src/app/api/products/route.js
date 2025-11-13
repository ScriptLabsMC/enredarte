import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { isAdmin } from "@/lib/isAdmin";

export async function GET(req) {
  await connectDB();

  try {
    const products = await Product.find();
    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: e.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      {
        success: false,
        message: "No autorizado",
      },
      { status: 401 }
    );
  }

  await connectDB();

  try {
    const data = await req.json();
    const required = [
      "product_id",
      "name",
      "price",
      "description",
      "category",
      "image",
    ];

    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          {
            success: false,
            message: `Falta el campo obligatorio: ${field}`,
          },
          { status: 400 }
        );
      }
    }

    const existing = await Product.findOne({ product_id: data.product_id });
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "El product_id ya está siendo usado",
        },
        { status: 400 }
      );
    }

    const product = await Product.create(data);
    return NextResponse.json(
      {
        success: true,
        message: "Producto creado correctamente",
        data: product,
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: e.message,
      },
      { status: 400 }
    );
  }
}
