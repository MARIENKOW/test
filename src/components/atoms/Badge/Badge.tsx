import styles from "./Badge.module.scss";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "verified"|'info';
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[`badge--${variant}`]}`}>
            {children}
        </span>
    );
}
