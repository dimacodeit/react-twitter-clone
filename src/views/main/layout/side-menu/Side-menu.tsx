import { Button } from '@mui/material';
import { useAppDispatch } from '@Hooks/redux';
import Navigation from '../navigation/Navigation';
import styles from './Side-menu.module.scss';
import ConfirmDialog from '@Components/confirm-dialog/Confirm-dialog';
import { useState } from 'react';
import { signOut } from '@Store/reducers/AuthSlice';

export default function SideMenu() {
  const [isOpen, setOpen] = useState(false);
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
          <Button onClick={() => setOpen(true)}>logout</Button>
        </nav>
      </header>
      <ConfirmDialog
        titleText="Are you sure?"
        isOpen={isOpen}
        onConfirm={confirmLogout}
        onReject={() => setOpen(false)}
      />
    </div>
  );
}
