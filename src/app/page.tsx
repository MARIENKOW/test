import Trusted from "@/components/organisms/Trusted/Trusted";

export default function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                paddingTop: "30px",
            }}
        >
            <Trusted />
        </div>
    );
}
