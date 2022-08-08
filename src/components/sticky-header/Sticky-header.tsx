import { FunctionComponent } from 'react';
import styles from './Sticky-header.module.scss';

interface StickyHeaderProps {
  header: string;
}

const StickyHeader: FunctionComponent<StickyHeaderProps> = (
  { header }: StickyHeaderProps,
) => (
  <div className={styles.header}>
    <h2 className={styles.header__title}>{header}</h2>
  </div>
);

export default StickyHeader;
