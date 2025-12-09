import {connectDB} from "../../../lib/mongodb";
import jwt from "jsonwebtoken";
import { Admin } from "@/models/Admin";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  // const client = await clientPromise;
  // const db = client.db("mission_library");

  connectDB()

  const admin = await Admin.findOne({ email });

  if (!admin || admin.password !== password) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  const token = jwt.sign(
    {
      id: admin._id,
      email: admin.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return new Response(JSON.stringify({ success: true }), {
  status: 200,
  headers: {
    "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
  },
});
}



export async function GET() {
  // Clear the cookie by setting it expired
  const response = NextResponse.json({ success: true, message: "Logged out" });
  
  // Set cookie to empty and expire it immediately
  response.cookies.set({
    name: "token",
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0,
  });

  return response;
}

