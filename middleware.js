import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/admin-panel")) {
    if (!token) {
      url.pathname = "/admin-login";
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      console.log("JWT VERIFIED SUCCESS");
    } catch (err) {
      console.log("JWT VERIFY FAILED:", err?.message);
      url.pathname = "/admin-login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-panel/:path*"],
  runtime: "nodejs",         // <-- FIX
};
