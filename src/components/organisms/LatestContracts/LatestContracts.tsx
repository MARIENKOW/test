import { Tab, Contract } from "@/types";
import { tabs as defaultTabId } from "@/data/tabs";
import ContractCard from "@/components/molecules/ContractCard/ContractCard";
import Container from "@/components/atoms/Container/Container";
import TabList from "./TabList";
import styles from "./LatestContracts.module.scss";

interface LatestContractsProps {
    tabId?: string;
}

export default async function LatestContracts({ tabId }: LatestContractsProps) {
    const activeTabId = tabId ?? defaultTabId[0].id;

    const [tabs, contracts]: [Tab[], Contract[]] = await Promise.all([
        fetch(`http://localhost:3000/api/tabs`, { method: "POST" }).then((r) =>
            r.json(),
        ),
        fetch(`http://localhost:3000/api/contracts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tabId: activeTabId }),
        }).then((r) => r.json()),
    ]);

    return (
        <div className={styles.latest}>
            <Container>
                <div style={{ marginBottom: "40px" }}>
                    <h2 className={styles.latest__title}>
                        Latest Contracts Post
                    </h2>
                    <p className={styles.latest__subtitle}>
                        Search and connect with the right companies faster
                    </p>
                </div>
            </Container>

            <TabList tabs={tabs} activeTabId={activeTabId} />

            <div className={styles.latest__track}>
                {contracts.map((contract) => (
                    <ContractCard key={contract.id} contract={contract} />
                ))}
            </div>
        </div>
    );
}
