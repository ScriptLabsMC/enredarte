import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import isAdmin from "@/lib/isAdmin";

export async function GET() {
  await connectDB();
  const users = await User.find({}, "-password");
  return NextResponse.json(users);
}

export async function POST(req) {
  await connectDB();
  if (!isAdmin(req))
    return NextResponse.json(
      { error: "Acceso no autorizado" },
      { status: 403 }
    );

  try {
    const data = await req.json();
    if (!data.user_id || !data.name || !data.email || !data.password)
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );

    const existing = await User.findOne({ email: data.email });
    if (existing)
      return NextResponse.json(
        { error: "El usuario ya existe" },
        { status: 400 }
      );

    const user = await User.create(data);
    return NextResponse.json({ user }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
