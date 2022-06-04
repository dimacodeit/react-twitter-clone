import Bookmarks from '@Views/bookmarks/Bookmarks';
import Explore from '@Views/explore/Explore';
import Home from '@Views/home/Home';
import Messages from '@Views/messages/Messages';
import Notifications from '@Views/notifications/Notifications';
import Profile from '@Views/profile/Profile';
import { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Layout.module.scss';
import SideMenu from './side-menu/Side-menu';

const Layout: FunctionComponent = () => (
  <div className={styles.wrapper}>
    <div className={styles.layout}>
      <SideMenu />
      <main className={`${styles.main} page-layout`}>
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
  </div>
);

export default Layout;
