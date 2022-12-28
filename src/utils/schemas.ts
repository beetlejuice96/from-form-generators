import dayjs from 'dayjs';
import * as yup from 'yup';
import CONSTANTS from '../constants';
const { FIELDS } = CONSTANTS;
export const requiredNameSchema = yup.string().required('nombre requerido.');

export const GeneratorFormSchema = yup.object().shape({
  [FIELDS.name]: requiredNameSchema,
});
