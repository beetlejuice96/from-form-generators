import constants from '../../../constants';
import { Field } from '../../../interfaces/generatorForm/Field';
import { Model } from '../../../interfaces/generatorForm/Model';
import { Resource } from '../../../interfaces/generatorForm/Resource';
export const GeneratorFormConfig = {
  [constants.FIELDS.name]: '',
  [constants.FIELDS.models]: Array<Model>,
  [constants.FIELDS.resources]: Array<Resource>,
};
