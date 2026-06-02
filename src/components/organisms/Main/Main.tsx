import Container from "@/components/atoms/Container/Container";
import Search from "@/components/molecules/Search/Search";
import { Header } from "@/components/organisms/Header/Header";
import styles from "@/components/organisms/Main/Main.module.scss";

export default function Main() {
    return (
        <div className={styles.main}>
            <Header />
            <Container>
                <div className={styles.main__inner}>
                    <h1 className={styles.main__title}>Run Your Business</h1>
                    <p className={styles.main__subtitle}>
                        Find better suppliers. Secure real contracts. Build
                        lasting partnerships.
                    </p>
                    <Search />
                    <span className={styles.main__text}>
                        480.000+ Available Contracts Listed
                    </span>
                </div>
            </Container>
        </div>
    );
}
