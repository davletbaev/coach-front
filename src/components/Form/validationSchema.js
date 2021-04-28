import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Назови своё имя').min(2, 'Тебя правда так зовут?').max(30, 'Тебя правда так зовут?'),
  email: Yup.string().email('Некорректный email').required('Укажи email, чтобы с тобой можно было связаться'),
  phone: Yup.string().matches(/^(\+7|8)\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/, 'Некорректный номер телефона'),
  confirm: Yup.boolean().oneOf([ true ], 'Подтверди согласие с Политикой Конфиденциальности, прежде чем продолжить'),
});

export default validationSchema;