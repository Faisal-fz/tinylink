import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // import the singleton

export async function GET() {
  const links = await prisma.link.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(links);
}

export async function POST(request: Request) {
  try {
    const { shortUrl, longUrl } = await request.json();

    if (!shortUrl || !longUrl) {
      return NextResponse.json(
        { error: "shortUrl and longUrl are required" },
        { status: 400 }
      );
    }

    const link = await prisma.link.create({
      data: { shortUrl, longUrl },
    });

    console.log("Created new link:", link);
    return NextResponse.json(link);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid JSON or Server Error" },
      { status: 400 }
    );
  }
}
