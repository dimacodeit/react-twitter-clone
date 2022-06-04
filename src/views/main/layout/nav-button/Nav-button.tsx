import { SvgIconComponent } from '@mui/icons-material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav-button.module.scss';

export interface INavButtonProps {}

interface NavButtonProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
  icon: Icon,
  to,
  label,
}: NavButtonProps) => {
  return (
    <Link tabIndex={-1} className={styles.link} to={to}>
      <button className={styles.button}>
        <Icon className={styles.button__icon} />
        <label className={styles.button__label}>{label}</label>
      </button>
    </Link>
  );
};

export default NavButton;
