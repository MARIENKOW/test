import { Contract } from "@/types";
import ContractCard from "@/components/molecules/ContractCard/ContractCard";
import Container from "@/components/atoms/Container/Container";
import styles from "./search.module.scss";

interface SearchPageProps {
    searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { query } = await searchParams;

    let data: Contract[] | null = null;
    let error: null | unknown = null;

    try {
        data = await fetch(`http://localhost:3000/api/search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query ?? "" }),
        }).then((r) => r.json());
    } catch (e) {
        error = e || true;
    }

    if (error) return "Error...";

    return (
        <Container>
            <h2 className={styles.search__title}>Search Result</h2>
            <div className={styles.search}>
                {data && data.length > 0 ? (
                    <div className={styles.search__grid}>
                        {data.map((contract) => (
                            <ContractCard
                                key={contract.id}
                                contract={contract}
                            />
                        ))}
                    </div>
                ) : query ? (
                    <p className={styles.search__empty}>
                        No contracts found matching &quot;{query}&quot;
                    </p>
                ) : null}
            </div>
        </Container>
    );
}
