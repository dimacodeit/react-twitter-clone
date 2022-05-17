import styles from './Sticky-header.module.scss';

export interface IStickyHeaderProps {
  header: string;
}

export default function StickyHeader(props: IStickyHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{props.header}</h2>
    </div>
  );
}
