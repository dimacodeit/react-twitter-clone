import styles from './Logo.module.scss';
import svg from '@Assets/images/logo.svg';
import { Link } from 'react-router-dom';

export interface ILogoProps {
  to?: string;
  previewOnly: boolean;
  className?: string;
}

export default function Logo(props: ILogoProps) {
  if (props.previewOnly)
    return <img className={styles.logo} src={svg} alt="twitter logo" />;

  if (props.to)
    return (
      <div className={styles.logo__wrap}>
        <Link className={styles.logo__hover} to={props.to}>
          <img className={styles.logo} src={svg} alt="twitter logo" />
        </Link>
      </div>
    );

  return <div>There is no such pattern</div>;
}
