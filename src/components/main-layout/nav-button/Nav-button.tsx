import { Link } from 'react-router-dom';
import styles from './Nav-button.module.scss';

export interface INavButtonProps {
  //   icon: string;
  title: string;
  to: string;
}

export default function NavButton(props: INavButtonProps) {
  return (
    <Link tabIndex={-1} className={styles.link} to={props.to}>
      <button className={styles.button}>{props.title}</button>
    </Link>
  );
}
