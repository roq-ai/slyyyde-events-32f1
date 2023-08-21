import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  subscription_date: yup.date().required(),
  status: yup.boolean().required(),
  expiry_date: yup.date().nullable(),
  user_id: yup.string().nullable(),
  event_id: yup.string().nullable(),
});
