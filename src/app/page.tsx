import Trusted from "@/components/organisms/Trusted/Trusted";
import LatestContracts from "@/components/organisms/LatestContracts/LatestContracts";

interface HomeProps {
    searchParams: Promise<{ tab?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const { tab } = await searchParams;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                paddingTop: "30px",
            }}
        >
            <Trusted />
            <LatestContracts tabId={tab} />
        </div>
    );
}
