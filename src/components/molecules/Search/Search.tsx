"use client";

import Button from "@/components/atoms/Button/Button";
import { useState } from "react";
import styles from "@/components/molecules/Search/search.module.scss";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [text, setText] = useState<string>(searchParams.get("query") ?? "");

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (text.trim().length === 0) return;

        const params = new URLSearchParams(searchParams.toString());
        if (params.get("query") === text) return;

        params.set("query", text.trim());
        if (pathname === "/search") {
            router.replace(`/search?${params.toString()}`);
        } else {
            router.push(`/search?${params.toString()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
            <div style={{ padding: "0px 20px" }}>
                <Image
                    alt="searchIcon"
                    width={20}
                    height={20}
                    src={"/main/search/search.png"}
                />
            </div>
            <input
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                className={styles.input}
                type="text"
            />
            <Button type="submit">Search</Button>
        </form>
    );
}
