import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import svg from '../../assets/svg/logo.svg';

export function SignupForm(props: any) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      if (values.email) props.submitted();
    },
  });
  return (
    <div className={styles.form__wrapper}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <img className={styles.form__logo} src={svg} alt="twitter logo" />
        <h1>Вход в Твиттер [dev]</h1>
        <TextField
          className={styles.form__input}
          id="outlined-basic"
          label="Любой номер телефона, адрес почты"
          variant="outlined"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
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
