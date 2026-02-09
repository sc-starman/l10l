import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch("https://app.lucky10.io/api/rounds/public", {
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream request failed", status: response.status },
        { status: 502 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
