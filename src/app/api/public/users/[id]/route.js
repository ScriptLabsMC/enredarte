import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

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
