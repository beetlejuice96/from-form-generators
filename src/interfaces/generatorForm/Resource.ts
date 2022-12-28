import { Operation } from './Operation';

export interface Resource {
  type: string;
  operations: Operation[];
}
