export const isProdMode = process.env.NODE_ENV === 'production';

export const envRoute = isProdMode
  ? 'https://tryexpress.vercel.app/api/'
  : 'http://localhost:3000/api/';
