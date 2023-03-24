import * as yup from 'yup';
const emailRegexp = /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Введіть ім'я")
    .min(3, 'Не менше ніж 3 символи')
    .max(12, 'Не більше ніж 12 символів'),
  email: yup
    .string()
    .required("Введіть електронну пошту")
    .min(3, 'Не менше ніж 3 символи')
    .matches(emailRegexp, 'Невалідна адреса'),
  password: yup
    .string()
    .required('Введіть пароль')
    .min(8, 'Не менше ніж 8 символів')
    .max(100, 'Не більше ніж 12 символів'),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Введіть електронну пошту")
    .min(3, 'Не менше ніж 3 символи')
    .matches(emailRegexp, 'Невалідна адреса'),
  password: yup
    .string()
    .required('Введіть пароль')
    .min(8, 'Не менше ніж 8 символів')
    .max(100, 'Не більше ніж 12 символів'),
});

const schema = {
  registerSchema,
  loginSchema
};

export default schema;
