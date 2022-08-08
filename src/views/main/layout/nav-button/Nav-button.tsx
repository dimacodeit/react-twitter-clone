import { SvgIconComponent } from '@mui/icons-material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav-button.module.scss';

interface NavButtonProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
  icon: Icon,
  to,
  label,
}: NavButtonProps) => (
  <Link tabIndex={-1} className={styles.link} to={to}>
    <button type="button" className={styles.button}>
      <Icon className={styles.button__icon} />
      <span className={styles.button__label}>{label}</span>
    </button>
  </Link>
);

export default NavButton;
