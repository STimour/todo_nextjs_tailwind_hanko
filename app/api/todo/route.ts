import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { prisma } from "@/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const userID = await userIdVerif(req);
      const { title } = req.body;

      if (userID) {
        if (typeof title !== "string" || title.length === 0) {
          throw new Error("That can't be a title");
        }
        await prisma.todo.create({
          data: { userId: userID, title, complete: false },
        });

        return NextResponse.json({ message: "Created Todo" }, { status: 200 });
      } else {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}

export async function userIdVerif(req: NextApiRequest) {
  const token = cookies().get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");

  return payload.sub;
}
