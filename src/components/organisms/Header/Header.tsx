import styles from "@/components/organisms/Header/Header.module.scss";
import Image from "next/image";
import Container from "@/components/atoms/Container/Container";
import Link from "@/components/atoms/Link/Link";
import ButtonOutlined from "@/components/atoms/ButtonOutlined/ButtonOutlined";

export function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Image
                        width={170}
                        height={35}
                        alt="Logo"
                        src={"/Logo.png"}
                    />
                    <nav className={styles.header__nav}>
                        <Link>Home</Link>
                        <Link>How It Works</Link>
                        <Link>Latest Contracts Post</Link>
                    </nav>
                    <div
                        style={{
                            display: "flex",
                            gap: "25px",
                            alignItems: "center",
                        }}
                    >
                        <Link>Login</Link>
                        <ButtonOutlined>Sign Up</ButtonOutlined>
                    </div>
                </div>
            </Container>
        </div>
    );
}
