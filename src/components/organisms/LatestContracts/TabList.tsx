"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tab } from "@/types";
import TabItem from "@/components/molecules/TabItem/TabItem";
import styles from "./LatestContracts.module.scss";

interface TabListProps {
    tabs: Tab[];
    activeTabId: string;
}

export default function TabList({ tabs, activeTabId }: TabListProps) {
    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <TabItem
                    key={tab.id}
                    tab={tab}
                    active={tab.id === activeTabId}
                />
            ))}
        </div>
    );
}
