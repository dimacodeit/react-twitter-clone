import './App.scss';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { Views } from './components/views/Views';
import { useAppSelector } from './hooks/redux';

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);

  return <Views />;
}

export default App;
