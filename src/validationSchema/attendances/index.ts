import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  check_in_time: yup.date().nullable(),
  check_out_time: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  event_id: yup.string().nullable(),
});
