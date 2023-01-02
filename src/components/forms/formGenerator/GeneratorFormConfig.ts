import constants from '../../../constants';
import { Field } from '../../../interfaces/generatorForm/Field';
import { Model } from '../../../interfaces/generatorForm/Model';
export const GeneratorFormConfig = {
  [constants.FIELDS.name]: '',
  [constants.FIELDS.models]: Array<Model>,
};
