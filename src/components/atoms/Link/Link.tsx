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
        if (!href) {
            event.preventDefault();
            return;
        }

        const anchorId = href.startsWith("/#")
            ? href.slice(2)
            : href.startsWith("#")
              ? href.slice(1)
              : null;

        if (anchorId) {
            event.preventDefault();
            const el = document.getElementById(anchorId);
            if (el) {
                window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
            }
        }
    };
    return (
        <a className={styles.link} onClick={handleClick} href={href}>
            {children}
        </a>
    );
}
