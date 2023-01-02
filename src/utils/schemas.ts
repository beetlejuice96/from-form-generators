import dayjs from 'dayjs';
import * as yup from 'yup';
import CONSTANTS from '../constants';
const { FIELDS } = CONSTANTS;
export const requiredNameSchema = (name: string) =>
  yup.string().required(`${name} requerido.`);

const fieldsSchema = {
  name: yup
    .string()
    .required('este campo es requerido')
    .matches(/^(?:[a-z])(?:[a-z_0-9]+)$/, 'cadena invalida'),
  type: yup
    .string()
    .required('este campo es requerido')
    .oneOf([
      'boolean',
      'date-iso8601',
      'date-time-iso8601',
      'decimal',
      'double',
      'integer',
      'long',
      'object',
      'string',
      'unit',
      'uuid',
    ]),
};

const modelsSchema = {
  name: yup
    .string()
    .required('este campo es requerido')
    .matches(/^(?:[a-z])(?:[a-z_0-9]+)$/, 'cadena invalida'),
  fields: yup
    .array()
    .of(yup.object().shape(fieldsSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
};
export const GeneratorFormSchema = yup.object().shape({
  [FIELDS.name]: requiredNameSchema(FIELDS.name),
  [FIELDS.models]: yup
    .array()
    .of(yup.object().shape(modelsSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
});
