import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Main-layout.module.scss';
import SideMenu from './side-menu/Side-menu';

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <main>
        <Routes>
          <Route index element={<div>home</div>} />
        </Routes>
      </main>
    </div>
  );
}
