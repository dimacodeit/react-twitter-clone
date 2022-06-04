import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import Logo from '@Components/logo/Logo';
import { useAppDispatch } from '@Hooks/redux';
import { signIn } from '@Store/reducers/AuthSlice';
import { FunctionComponent } from 'react';

type LoginForm = {
  login: string;
};

const validate = (values: LoginForm) => {
  const errors: { login?: string } = {};
  if (!values.login) errors.login = 'Введите логин';
  return errors;
};

const SignupForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik<LoginForm>({
    initialValues: {
      login: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(signIn(values.login));
      localStorage.setItem('authName', values.login);
      navigate('/home');
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
};

export default SignupForm;
