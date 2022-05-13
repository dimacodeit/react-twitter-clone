import { Link, Outlet, Route, Routes } from 'react-router-dom';
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
          <Route path="about/*" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function About() {
  return (
    <>
      <h1>About page</h1>
      <Link to="nested">go nest</Link>
      <Routes>
        <Route path="/nested" element={<AboutNest />} />
      </Routes>
      <div className="outlet-nest">
        <Outlet />
      </div>
    </>
  );
}

function AboutNest() {
  return (
    <>
      <p>Nested route</p>
      <Link to="..">get back</Link>
    </>
  );
}
