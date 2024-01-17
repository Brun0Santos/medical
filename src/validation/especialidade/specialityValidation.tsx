import * as yup from 'yup';

export const specialittValidationSchema = yup.object().shape({
  name: yup.string().trim().required('Nome é um campo obrigatório!').min(5, 'Minímo 5 caracteres!'),

  summary: yup
    .string()
    .trim()
    .required('Resumo é um campo é obrigatório!')
    .min(5, 'Minímo 5 caracteres!'),

  description: yup
    .string()
    .trim()
    .required('Descrição é um campo obrigatório!')
    .min(5, 'Minímo 5 caracteres!'),
});
