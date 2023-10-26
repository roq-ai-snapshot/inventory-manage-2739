import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  phone: yup.string().nullable(),
  name: yup.string().required(),
});
