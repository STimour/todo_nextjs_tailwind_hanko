import { NextResponse } from "next/server";
import { prisma } from "@/db";
import { userId } from "@/app/userId";


export async function POST(req: Request) {
  const userID = await userId();
  const { title } = await req.json();

  if (userID) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.todo.create({
      data: {userId: userID, title, complete: false },
    });

    return NextResponse.json({ message: "Created Todo" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}
