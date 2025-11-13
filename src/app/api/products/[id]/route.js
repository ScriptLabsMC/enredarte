import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { isAdmin } from "@/lib/isAdmin";

export async function GET(_, { params }) {
  await connectDB();

  try {
    const product = await Product.findOne({ product_id: params.id });
    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Producto no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
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

export async function PATCH(req, { params }) {
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
    const updated = await Product.findOneAndUpdate(
      { product_id: params.id },
      data,
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          message: "Producto no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Producto actualizado correctamente",
      data: updated,
    });
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

export async function DELETE(req, { params }) {
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
    const deleted = await Product.findOneAndDelete({ product_id: params.id });
    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          message: "Producto no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Producto eliminado correctamente",
    });
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
