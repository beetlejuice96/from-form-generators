import { Model } from './Model';
import { Resource } from './Resource';

export interface RequestGeneratorDto {
  name: string;
  models: Model[];
  generators: string[];
  resources: Resource[];
}
