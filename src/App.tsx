import './App.scss';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { Views } from './components/views/Views';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { authSlice } from './store/reducers/AuthSlice';

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const { login } = authSlice.actions;
  const navigate = useNavigate();
  const submitHandle = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
    else navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <Views submitHandle={submitHandle} />;
}

export default App;
