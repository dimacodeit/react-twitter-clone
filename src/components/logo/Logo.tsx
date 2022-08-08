import svg from '@Assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
  to?: string;
  previewOnly: boolean;
}

const Logo: FunctionComponent<LogoProps> = ({ previewOnly, to }: LogoProps) => {
  if (previewOnly) { return <img className={styles.logo} src={svg} alt="twitter logo" />; }

  if (to) {
    return (
      <div className={styles.logo__wrap}>
        <Link className={styles.logo__hover} to={to}>
          <img className={styles.logo} src={svg} alt="twitter logo" />
        </Link>
      </div>
    );
  }

  return <div>There is no such pattern</div>;
};

export default Logo;
