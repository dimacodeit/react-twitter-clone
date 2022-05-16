import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/AuthSlice';
import Navigation from '../navigation/Navigation';
import styles from './Side-menu.module.scss';

export default function SideMenu() {
  const dispatch = useAppDispatch();
  const { logout } = authSlice.actions;
  // eslint-disable-next-line no-restricted-globals
  const logoutHandler = () => confirm('Are you sure?') && dispatch(logout());
  return (
    <div className={styles.menu}>
      <header className={styles.header}>
        <nav className={styles.nav} style={{ position: 'relative' }}>
          <Navigation />
          <Button onClick={logoutHandler}>logout</Button>
        </nav>
      </header>
    </div>
  );
}
