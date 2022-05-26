import { Button } from '@mui/material';
import { useAppDispatch } from '@Hooks/redux';
import { authSlice } from '@Store/reducers/AuthSlice';
import Navigation from '../navigation/Navigation';
import styles from './Side-menu.module.scss';
import ConfirmDialog from '@Components/confirm-dialog/Confirm-dialog';
import { useState } from 'react';

export default function SideMenu() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { signOut } = authSlice.actions;

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
