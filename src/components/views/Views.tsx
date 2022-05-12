import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { SignupForm } from '../login/Login';
import logo from '../../logo.svg';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/AuthSlice';

export interface IViewsProps {
  submitHandle: Function;
}

export function Views(props: IViewsProps) {
  return (
    <Routes>
      <Route path="/*" element={<MainPageView />} />
      <Route
        path="/login"
        element={<SignupForm submitted={props.submitHandle} />}
      />
    </Routes>
  );
}

function MainPageView() {
  const dispatch = useAppDispatch();
  const { logout } = authSlice.actions;
  // eslint-disable-next-line no-restricted-globals
  const logoutHandler = () => confirm('Are you sure?') && dispatch(logout());
  return (
    <div className="App">
      <nav className="plain-nav" style={{ position: 'relative' }}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Button
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
          }}
          onClick={logoutHandler}
        >
          logout
        </Button>
      </nav>
      <Routes>
        <Route path="/about/*" element={<About />} />
        <Route index element={<MainPage />} />
      </Routes>
    </div>
  );
}

function MainPage() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
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
