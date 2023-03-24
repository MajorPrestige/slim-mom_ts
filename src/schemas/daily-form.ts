import * as yup from 'yup';

const schema = yup.object().shape({
  height: yup
    .number()
    .typeError('Введіть число')
    .required()
    .min(100, 'не менше ніж 100')
    .max(250, 'не більше ніж 250'),
  age: yup
    .number()
    .typeError('Введіть число')
    .required()
    .min(18, 'не менше ніж 18')
    .max(100, 'не більше ніж 100'),
  weight: yup
    .number()
    .typeError('Введіть число')
    .required()
    .min(40, 'не менше ніж 40')
    .max(250, 'не більше ніж 250'),
  desiredWeight: yup
    .number()
    .typeError('Введіть число')
    .required()
    .min(40, 'не менше ніж 40')
    .max(250, 'не більше ніж 250'),
  bloodType: yup.string().required('Оберіть число').required('Оберіть число'),
});

export default schema;