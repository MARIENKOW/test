import { NextRequest, NextResponse } from "next/server";
import { contracts } from "@/data/contracts";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { tabId } = body as { tabId?: string };

    const result = tabId
        ? contracts.filter((c) => c.tabId === tabId)
        : contracts;

    return NextResponse.json(result);
}
