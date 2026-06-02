import Image from "next/image";
import styles from "@/components/organisms/Trusted/Trusted.module.scss";
import Container from "@/components/atoms/Container/Container";

const logos = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

export default function Trusted() {
    return (
        <div className={styles.trusted}>
            <Container>
                <h2 className={styles.trusted__title}>
                    Trusted by top data-driven teams
                </h2>
            </Container>
            <div className={styles.trusted__inner}>
                <div className={styles.trusted__track}>
                    {logos.map((file) => (
                        <div key={file} className={styles.trusted__item}>
                            <img
                                src={`/trusted/${file}`}
                                alt={file.replace(".png", "")}
                                width={140}
                                loading="lazy"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
