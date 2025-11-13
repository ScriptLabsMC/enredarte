import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import isAdmin from "@/lib/isAdmin";

export async function GET(_, { params }) {
  await connectDB();
  const user = await User.findOne({ user_id: params.id }, "-password");
  if (!user)
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  return NextResponse.json(user);
}

export async function DELETE(req, { params }) {
  await connectDB();
  if (!isAdmin(req))
    return NextResponse.json(
      { error: "Acceso no autorizado" },
      { status: 403 }
    );

  try {
    const deleted = await User.findOneAndDelete({ user_id: params.id });
    if (!deleted)
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    return NextResponse.json({ message: "Usuario eliminado correctamente" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
