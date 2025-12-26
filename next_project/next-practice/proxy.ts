import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // if (request.nextUrl.pathname === "/dashboard") {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }

  //setting a cookie and custom header for whole site
  const res = NextResponse.next();
  const theme = request.cookies.get("theme");
  if (!theme) {
    res.cookies.set("theme", "light");
  }

  // custom header setting up
  res.headers.set("x-hello-from-proxy", "hello world");
  return res;
}

// export const config = {
//   matcher: "/dashboard",
// };
