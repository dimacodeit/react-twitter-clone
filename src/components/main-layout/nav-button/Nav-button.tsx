import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './Nav-button.module.scss';

export interface INavButtonProps {
  icon: SvgIconComponent;
  title: string;
  to: string;
}

export default function NavButton(props: INavButtonProps) {
  return (
    <Link tabIndex={-1} className={styles.link} to={props.to}>
      <button className={styles.button}>
        <props.icon
          className={styles.button__icon}
          style={{
            width: '35px',
            height: '35px',
          }}
        />
        {props.title}
      </button>
    </Link>
  );
}
