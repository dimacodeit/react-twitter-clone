import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { SignupForm } from '../login/Login';
import logo from '../../logo.svg';

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
  return (
    <div className="App">
      <nav className="plain-nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
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
