import './App.scss';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Views } from './components/views/Views';

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

  return <Views submitHandle={submitHandle} />;
}

export default App;
