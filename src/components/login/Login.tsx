import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import svg from '../../assets/svg/logo.svg';

type LoginForm = {
  login: string;
};

const validate = (values: LoginForm) => {
  const errors: { login?: string } = {};
  if (!values.login) errors.login = 'Введите логин';
  return errors;
};

export function SignupForm(props: any) {
  const formik = useFormik<LoginForm>({
    initialValues: {
      login: '',
    },
    validate,
    onSubmit: () => props.submitted(),
  });
  return (
    <div className={styles.form__wrapper}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <img className={styles.form__logo} src={svg} alt="twitter logo" />
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
