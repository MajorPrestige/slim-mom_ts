import * as yup from 'yup';
const emailRegexp = /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("введіть ім'я")
    .min(3, 'не менше ніж 3 символи')
    .max(12, 'не більше ніж 12 символів'),
  email: yup
    .string()
    .required("введіть електронну пошту")
    .min(3, 'не менше ніж 3 символи')
    .matches(emailRegexp, 'не валідний email'),
  password: yup
    .string()
    .required('введіть пароль')
    .min(8, 'не менше ніж 8 символів')
    .max(100, 'не більше ніж 12 символів'),
});

const schema = {
  registerSchema,
};

export default schema;
