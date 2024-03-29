import { jwtVerify, createRemoteJWKSet } from "jose";
import { NextRequest, NextResponse } from "next/server";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL

export default async function middleware(req: NextRequest) {
  const hanko = req.cookies.get("hanko")?.value;

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApi}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jwtVerify(hanko!, JWKS);
    console.log(verifiedJWT);
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", req.url));
}
}
export const config = {
    matcher: ["/todo"],
  };
  