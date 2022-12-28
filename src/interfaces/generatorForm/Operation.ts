import { QueryParam } from './QueryParam';

export interface Operation {
  method: string;
  path: string;
  queryParams: QueryParam[];
  responses: any[];
}
