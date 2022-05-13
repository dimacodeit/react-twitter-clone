import { HomeOutlined } from '@mui/icons-material';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/AuthSlice';
import NavButton from '../nav-button/Nav-button';
import styles from './Side-menu.module.scss';

export default function SideMenu() {
  const dispatch = useAppDispatch();
  const { logout } = authSlice.actions;
  // eslint-disable-next-line no-restricted-globals
  const logoutHandler = () => confirm('Are you sure?') && dispatch(logout());
  return (
    <header className={styles.header}>
      <nav className={styles.nav} style={{ position: 'relative' }}>
        <NavButton icon={HomeOutlined} to="home" title="Home" />
        <NavButton icon={TagOutlinedIcon} to="explore" title="Explore" />
        <NavButton
          icon={NotificationsNoneOutlinedIcon}
          to="notifications"
          title="Notifications"
        />
        <NavButton icon={EmailOutlinedIcon} to="messages" title="Messages" />
        <NavButton
          icon={BookmarkBorderOutlinedIcon}
          to="bookmarks"
          title="Bookmarks"
        />
        <NavButton icon={PersonOutlinedIcon} to="profile" title="Profile" />
        <Button onClick={logoutHandler}>logout</Button>
      </nav>
    </header>
  );
}
