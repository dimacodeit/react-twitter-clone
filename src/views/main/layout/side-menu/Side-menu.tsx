import { Button } from '@mui/material';
import { useAppDispatch } from '@Hooks/redux';
import ConfirmDialog from '@Components/confirm-dialog/Confirm-dialog';
import { FunctionComponent, useState } from 'react';
import { signOut } from '@Store/reducers/AuthSlice';
import TweetDialog from '@Components/tweet-dialog/Tweet-dialog';
import Navigation from '../navigation/Navigation';
import styles from './Side-menu.module.scss';

const SideMenu: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const [tweetOpen, setTweetOpen] = useState(false);
  const dispatch = useAppDispatch();

  const confirmLogout = () => {
    dispatch(signOut());
    localStorage.removeItem('authName');
  };

  return (
    <div className={styles.menu}>
      <header className={styles.header}>
        <nav className={styles.nav} style={{ position: 'relative' }}>
          <Navigation />
          <Button onClick={() => setTweetOpen(true)}>Tweet</Button>
          <Button onClick={() => setOpen(true)}>logout</Button>
        </nav>
      </header>
      <ConfirmDialog
        titleText="Are you sure?"
        isOpen={isOpen}
        onConfirm={confirmLogout}
        onReject={() => setOpen(false)}
      />
      <TweetDialog open={tweetOpen} onClose={() => setTweetOpen(false)} />
    </div>
  );
};

export default SideMenu;
