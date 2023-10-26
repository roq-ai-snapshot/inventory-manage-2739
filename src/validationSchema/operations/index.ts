import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable().required(),
  order_id: yup.string().nullable().required(),
});
