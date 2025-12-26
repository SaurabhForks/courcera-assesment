import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  // const requestHeader = new Headers(request.headers);
  const requestHeader = await headers();
  console.log(requestHeader.get("authorization"));

  //getting cookies using headers
  const theme = requestHeader.get("theme") || "no-theme";
  console.log("Theme is ", theme);

  // Setting cookie
  const cookieStore = await cookies();
  cookieStore.set("name", "sauraabhtomar");

  // Getting cookie
  console.log("Cookies ", cookieStore.get("name"));

  //we can also set cookie using response headers
  return new Response("<h1>Respose from GET profile route</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "set-cookie": "name=sauraabhtomar;",
    },
  });
}
