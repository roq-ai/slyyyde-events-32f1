import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  location: yup.string().required(),
  date_time: yup.date().required(),
  organizer_id: yup.string().nullable(),
  platform_id: yup.string().nullable(),
});
