export const field = {
  username: {
    name: 'username',
    type: 'text',
    placeholder: 'Імʼя*',
    title: 'Назва має складатися не менше, ніж з 3 символів',
  },
  email: {
    name: 'email',
    type: 'text',
    placeholder: 'Електронна пошта*',
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль*',
    title: 'Пароль має бути не менше 8 символів',
  },
  height: {
    name: 'height',
    type: 'text',
    placeholder: 'Зріст*',
    title: 'Введіть дійсне ціле число від 100 до 250.',
  },
  age: {
    name: 'age',
    type: 'text',
    placeholder: 'Вік*',
    title: 'Введіть дійсне число від 18 до 100.',
  },
  weight: {
    name: 'weight',
    type: 'text',
    placeholder: 'Поточна вага*',
    title: 'Введіть дійсне ціле число від 20 до 250.',
  },
  desiredWeight: {
    name: 'desiredWeight',
    type: 'text',
    placeholder: 'Бажана вага*',
    title: 'Введіть дійсне ціле число від 20 до 500.',
  },
  bloodType: {
    name: 'blodtype',
    type: 'text',
    placeholder: 'Група крові*',
    disabled: true,
  },
  filter: {
    type: 'text',
    name: 'filter',
    placeholder: 'Фільтрувати за назвою',
  },
};
