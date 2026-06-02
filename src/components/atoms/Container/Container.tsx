import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
