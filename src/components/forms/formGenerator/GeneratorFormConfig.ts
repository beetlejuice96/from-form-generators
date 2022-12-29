import constants from '../../../constants';
import { Field } from '../../../interfaces/generatorForm/Field';
export const GeneratorFormConfig = {
  [constants.FIELDS.name]: '',
  [constants.FIELDS.name_model]: '',
  [constants.FIELDS.fields]: Array<Field>,
};
