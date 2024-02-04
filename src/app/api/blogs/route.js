import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Hello, Next.js!" });
};

export const POST = () => {};

export const PUT = () => {};

export const PATCH = () => {};
export const DELETE = () => {};
