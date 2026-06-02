import Badge from "@/components/atoms/Badge/Badge";
import Container from "@/components/atoms/Container/Container";
import styles from "@/components/organisms/HowItWorks/HowItWorks.module.scss";

export default function HowItWorks() {
    return (
        <div className={styles.how}>
            <Container>
                <h2 className={styles.how__title}>How It Works</h2>
                <p className={styles.how__subtitle}>
                    Applying for an agreement/contract
                </p>
                <div className={styles.how__list}>
                    <article
                        style={{ backgroundImage: 'url("/how/1.png")' }}
                        className={styles.how__item}
                    >
                        <Badge variant="info">Step 1</Badge>
                        <p className={styles.how__item__name}>
                            Search Contracts
                        </p>
                        <span className={styles.how__item__description}>
                            Search for other Business owners or individuals
                            looking to create a contract or agreement.
                        </span>
                    </article>
                    <article
                        style={{ backgroundImage: 'url("/how/2.png")' }}
                        className={styles.how__item}
                    >
                        <Badge variant="info">Step 2</Badge>
                        <p className={styles.how__item__name}>
                            Apply For Agreement
                        </p>
                        <span className={styles.how__item__description}>
                            Establish what you and your party want to get out of
                            this agreement.
                        </span>
                    </article>
                    <article
                        style={{ backgroundImage: 'url("/how/3.png")' }}
                        className={styles.how__item}
                    >
                        <Badge variant="info">Step 3</Badge>
                        <p className={styles.how__item__name}>
                            Agreement period
                        </p>
                        <span className={styles.how__item__description}>
                            Determine the length of your contract. All contracts
                            can be saved to be reused.
                        </span>
                    </article>
                </div>
            </Container>
        </div>
    );
}
