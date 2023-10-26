import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  barcode: yup.string().required(),
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
});
