import dayjs from 'dayjs';
import * as yup from 'yup';
import CONSTANTS from '../constants';
const { FIELDS } = CONSTANTS;
export const requiredNameSchema = (name: string) =>
  yup.string().required(`${name} requerido.`);

export const GeneratorFormSchema = yup.object().shape({
  [FIELDS.name]: requiredNameSchema(FIELDS.name),
  [FIELDS.name_model]: requiredNameSchema(FIELDS.name_model),
});
