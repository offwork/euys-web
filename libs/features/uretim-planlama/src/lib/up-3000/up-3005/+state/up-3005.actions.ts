import { YupPlanModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Up3005 Page] Load');

export const loadSuccess = createAction(
  '[Up3005/API] Load Success',
  props<{ data: YupPlanModel[] }>()
);

export const fail = createAction('[Up3005/API] Load Failure');
