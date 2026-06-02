import Image from "next/image";
import Badge from "@/components/atoms/Badge/Badge";
import { Contract } from "@/types";
import styles from "./ContractCard.module.scss";

interface ContractCardProps {
    contract: Contract;
}

export default function ContractCard({ contract }: ContractCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <Image
                    src={contract.logo}
                    alt={contract.title}
                    width={32}
                    height={32}
                    className={styles.card__logo}
                />
            </div>

            <span className={styles.card__title}>{contract.title}</span>

            <p className={styles.card__price}>
                {contract.price}{" "}
                <span className={styles.card__priceUnit}>
                    / {contract.priceUnit}
                </span>
            </p>

            <p className={styles.card__duration}>
                <span className={styles.card__clockIcon}>⏱</span>
                {contract.duration}
            </p>

            <div className={styles.card__badges}>
                {contract.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
                {contract.verified && (
                    <Badge variant="verified">Verified</Badge>
                )}
            </div>

            <p className={styles.card__description}>{contract.description}</p>

            <span className={styles.card__arrow}>
                <Image alt="arrow" width={25} height={20} src={'/contract/Vector.png'}  />
            </span>
        </div>
    );
}
