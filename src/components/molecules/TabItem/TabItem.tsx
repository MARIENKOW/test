"use client";

import Image from "next/image";
import { Tab } from "@/types";
import styles from "./TabItem.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TabItemProps {
    tab: Tab;
    active: boolean;
    // onClick: (id: string) => void;
}

export default function TabItem({
    tab,
    active,
    // onClick
}: TabItemProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleTabClick(e: React.MouseEvent<HTMLButtonElement>) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", tab.id);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <button
            className={`${styles.tabItem} ${active ? styles["tabItem--active"] : ""}`}
            onClick={handleTabClick}
        >
            <span className={styles.tabItem__icon}>
                <Image
                    src={`/latest/${active ? "selected" : "unselected"}/${tab.icon}`}
                    alt={tab.name}
                    width={22}
                    height={22}
                    style={{ objectFit: "contain" }}
                />
            </span>
            <span className={styles.tabItem__text}>{tab.name}</span>
        </button>
    );
}
