import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo/Logo';

type LoginForm = {
  login: string;
};

const validate = (values: LoginForm) => {
  const errors: { login?: string } = {};
  if (!values.login) errors.login = 'Введите логин';
  return errors;
};

export function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { login } = authSlice.actions;
  const formik = useFormik<LoginForm>({
    initialValues: {
      login: '',
    },
    validate,
    onSubmit: () => {
      dispatch(login());
      navigate('/');
    },
  });
  return (
    <div className={styles.form__wrapper}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.form__logo}>
          <Logo previewOnly />
        </div>
        <h1>Вход в Твиттер</h1>
        <TextField
          className={styles.form__input}
          id="outlined-basic"
          label="Любой номер телефона, адрес почты"
          variant="outlined"
          name="login"
          onChange={formik.handleChange}
          value={formik.values.login}
          error={!!formik.errors.login}
        />
        <Button
          className={styles.form__button}
          variant="contained"
          type="submit"
        >
          Далее
        </Button>
        <p className={styles.form__tip}>
          Не используется для регистрации, достаточно заполнить инпут
        </p>
      </form>
    </div>
  );
}
