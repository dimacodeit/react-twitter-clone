import { Button } from '@mui/material';
import { useAppDispatch } from '@Hooks/redux';
import { authSlice } from '@Store/reducers/AuthSlice';
import Navigation from '../navigation/Navigation';
import styles from './Side-menu.module.scss';

export default function SideMenu() {
  const dispatch = useAppDispatch();
  const { signOut } = authSlice.actions;
  const logoutHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure?')) {
      dispatch(signOut());
      localStorage.removeItem('authName');
    }
  };
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
