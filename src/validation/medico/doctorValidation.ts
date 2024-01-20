import * as yup from 'yup';

export const doctortValidationSchema = yup.object().shape({
  name: yup.string().trim().required('Nome é um campo obrigatório!').min(3, 'Minímo 3 caracteres!'),

  crm: yup.string().trim().required('CRM é um campo é obrigatório!').min(6, 'Minímo 6 caracteres!'),

  description: yup
    .string()
    .trim()
    .required('Descrição é um campo obrigatório!')
    .min(5, 'Minímo 5 caracteres!'),

  gender: yup.string(),

  email: yup
    .string()
    .trim()
    .email()
    .required('E-mail é um campo obrigatório!')
    .min(5, 'Minímo 5 caracteres!'),

  cpf: yup
    .string()
    .trim()
    .required('CPF é um campo obrigatório!')
    .min(11, 'CPF são 11 caracteres!'),
});
