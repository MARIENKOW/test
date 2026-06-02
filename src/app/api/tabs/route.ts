import { NextResponse } from "next/server";
import { tabs } from "@/data/tabs";

export async function POST() {
    return NextResponse.json(tabs);
}
