import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  login: yup
    .string()
    .trim()
    .required('Login é um campo obrigatório!')
    .min(3, 'Minímo 3 caracteres!'),

  password: yup
    .string()
    .trim()
    .required('Password é um campo é obrigatório!')
    .min(5, 'Minímo 5 caracteres!'),
});
