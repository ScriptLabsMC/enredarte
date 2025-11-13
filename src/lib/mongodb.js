import mongoose from "mongoose";

const uri = process.env.MONGO_URI;
if (!uri) throw new Error("Falta MONGO_URI en .env");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

global.mongoose = cached;
