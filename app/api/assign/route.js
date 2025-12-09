import { connectDB } from "../../../lib/mongodb";
import jwt from "jsonwebtoken";
import { Record } from "../../../models/Record";

export async function PUT(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }

  const { id, date, time } = await req.json();
  connectDB();
  await Record.findByIdAndUpdate(
    { _id: id },
    { $set: { assignedDate: date, assignedTime: time } },
    { new: true }
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
