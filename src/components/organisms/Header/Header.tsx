"use client";

import styles from "@/components/organisms/Header/Header.module.scss";
import Container from "@/components/atoms/Container/Container";
import NavLink from "@/components/atoms/Link/Link";
import ButtonOutlined from "@/components/atoms/ButtonOutlined/ButtonOutlined";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/atoms/Button/Button";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Link href="/">
                        <Logo />
                    </Link>

                    <nav className={styles.header__nav}>
                        <NavLink>Home</NavLink>
                        <NavLink>How It Works</NavLink>
                        <NavLink>Latest Contracts Post</NavLink>
                        <NavLink>People Loved us!</NavLink>
                    </nav>

                    <div className={styles.header__actions}>
                        <NavLink>Login</NavLink>
                        <ButtonOutlined>Sign Up</ButtonOutlined>
                    </div>

                    <button
                        className={styles.header__burger}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </Container>

            {menuOpen && (
                <div className={styles.header__drawer}>
                    <NavLink>Home</NavLink>
                    <NavLink>How It Works</NavLink>
                    <NavLink>Latest Contracts Post</NavLink>
                    <NavLink>People Loved us!</NavLink>
                    <ButtonOutlined>Login</ButtonOutlined>
                    <Button>Sign Up</Button>
                </div>
            )}
        </header>
    );
}
