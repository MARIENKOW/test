import Container from "@/components/atoms/Container/Container";
import Icon from "@/components/atoms/Icon/Icon";
import Logo from "@/components/atoms/Logo";
import styles from "@/components/organisms/Footer/Footer.module.scss";
import Link from "next/link";

export function Footer() {
    return (
        <Container>
            <footer className={styles.footer}>
                <div className={styles.footer__main}>
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <div style={{ display: "flex", gap: "16px" }}>
                        <Icon
                            width={15}
                            height={15}
                            alt="X-Icon"
                            src={"/footer/Vector.png"}
                        />

                        <Icon
                            width={32}
                            height={32}
                            alt="X-Icon"
                            src={"/footer/linked.png"}
                        />
                        <Icon
                            width={32}
                            height={32}
                            alt="X-Icon"
                            src={"/footer/inst.png"}
                        />
                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    © 2025— Copyright
                </div>
            </footer>
        </Container>
    );
}
