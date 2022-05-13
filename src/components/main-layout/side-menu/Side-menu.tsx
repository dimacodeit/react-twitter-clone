import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/AuthSlice';
import NavButton from '../nav-button/Nav-button';
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
        <NavButton to="home" title="Home" />
        <NavButton to="explore" title="Explore" />
        <NavButton to="notifications" title="Notifications" />
        <NavButton to="messages" title="Messages" />
        <NavButton to="bookmarks" title="Bookmarks" />
        <NavButton to="profile" title="Profile" />
        <Button onClick={logoutHandler}>logout</Button>
      </nav>
    </header>
  );
}
