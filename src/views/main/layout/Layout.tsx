import Bookmarks from '@Views/bookmarks/Bookmarks';
import Explore from '@Views/explore/Explore';
import Home from '@Views/home/Home';
import Messages from '@Views/messages/Messages';
import Notifications from '@Views/notifications/Notifications';
import Profile from '@Views/profile/Profile';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Layout.module.scss';
import SideMenu from './side-menu/Side-menu';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </main>
    </div>
  );
}
