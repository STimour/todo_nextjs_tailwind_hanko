import { cookies } from "next/headers";
import * as jose from "jose";

export async function userId() {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");
  
    return payload.sub;
  }