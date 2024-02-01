import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { completed } = await req.json();

  const todoId = parseInt(id);

  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      complete: completed,
    },
  });
  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const todoId = parseInt(id);
  await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });
  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}
