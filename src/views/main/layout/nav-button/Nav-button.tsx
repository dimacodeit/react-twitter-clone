import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './Nav-button.module.scss';

export interface INavButtonProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
}

export default function NavButton(props: INavButtonProps) {
  const Icon = props.icon;
  return (
    <Link tabIndex={-1} className={styles.link} to={props.to}>
      <button className={styles.button}>
        <Icon className={styles.button__icon} />
        <label className={styles.button__label}>{props.label}</label>
      </button>
    </Link>
  );
}
