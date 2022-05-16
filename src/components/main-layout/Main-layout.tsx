import { Route, Routes } from 'react-router-dom';
import Bookmarks from '../bookmarks/Bookmarks';
import Explore from '../explore/Explore';
import Home from '../home/Home';
import Messages from '../messages/Messages';
import Notifications from '../notifications/Notifications';
import Profile from '../profile/Profile';
import styles from './Main-layout.module.scss';
import SideMenu from './side-menu/Side-menu';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <main>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
