import { Explore } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import styles from './Main-layout.module.scss';
import SideMenu from './side-menu/Side-menu';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <main>
        <Routes>
          <Route
            path="home"
            element={
              <div>
                <h1>Home</h1>
                Илюх доверстай
              </div>
            }
          />
          <Route path="explore/*" element={<Explore />} />
        </Routes>
      </main>
    </div>
  );
}
