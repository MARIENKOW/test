import styles from "@/components/atoms/Icon/Icon.module.scss";
import Image from "next/image";

type IconProps = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

export default function Icon({ src, alt, width, height }: IconProps) {
    return (
        <div className={styles.icon}>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    );
}
