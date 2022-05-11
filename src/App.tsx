import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { SignupForm } from './components/login/Login';

function App() {
  const [sub, setSub] = useState(false);
  const navigate = useNavigate();
  const submitHandle = () => {
    setSub(true);
    navigate('/');
  };

  useEffect(() => {
    if (!sub) navigate('/login');
  }, [navigate, sub]);

  return (
    <>
      <nav className="plain-nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={<SignupForm submitted={submitHandle} />}
        />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </>
  );
}

function MainPage() {
  return (
    <div className="App">
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

export default App;
