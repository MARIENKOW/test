"use client";
import styles from "@/components/atoms/Link/Link.module.scss";

export default function Link({
    children,
    href,
}: {
    children: React.ReactNode;
    href?: string;
}) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href) event.preventDefault();
    };
    return (
        <a className={styles.link} onClick={handleClick} href={href}>
            {children}
        </a>
    );
}
