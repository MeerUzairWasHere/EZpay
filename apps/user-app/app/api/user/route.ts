import db from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const user = await db.user.create({
    data: {
      email: "meeruzairwashere@gmail.com",
      name: "Meer Uzair",
    },
  });
  return NextResponse.json(
    {
      user,
    },
    { status: 200 }
  );
};
