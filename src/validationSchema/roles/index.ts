import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  permissions: yup.string().required(),
  user_id: yup.string().nullable(),
});
