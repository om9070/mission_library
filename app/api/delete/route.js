import  {connectDB}  from '../../../lib/mongodb';
import jwt from "jsonwebtoken";
import { Record } from "../../../models/Record";

export async function DELETE(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
  }

  const { id } = await req.json();
  connectDB()
  await Record.findByIdAndDelete({ _id: id });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
