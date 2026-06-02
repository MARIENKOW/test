import { NextRequest, NextResponse } from "next/server";
import { contracts } from "@/data/contracts";

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => ({}));
    const { query, tabId } = body as { query?: string; tabId?: string };

    let result = contracts;

    if (tabId) {
        result = result.filter((c) => c.tabId === tabId);
    }

    if (query) {
        const q = query.toLowerCase();
        result = result.filter(
            (c) =>
                c.title.toLowerCase().includes(q) ||
                c.company.toLowerCase().includes(q) ||
                c.description.toLowerCase().includes(q)
        );
    }

    return NextResponse.json(result);
}
