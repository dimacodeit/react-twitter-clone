import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/AuthSlice';
import styles from './Side-menu.module.scss';

export interface ISideMenuProps {}

export default function SideMenu(props: ISideMenuProps) {
  const dispatch = useAppDispatch();
  const { logout } = authSlice.actions;
  // eslint-disable-next-line no-restricted-globals
  const logoutHandler = () => confirm('Are you sure?') && dispatch(logout());
  return (
    <header className={styles.header}>
      <nav className={styles.nav} style={{ position: 'relative' }}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Button onClick={logoutHandler}>logout</Button>
      </nav>
    </header>
  );
}
