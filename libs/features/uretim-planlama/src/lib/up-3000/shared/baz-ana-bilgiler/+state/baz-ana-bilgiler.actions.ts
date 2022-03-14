import { ErrorModel, UpYupBazAna } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[BazAnaBilgiler Page] Init');

export const filter = createAction(
  '[BazAnaBilgiler Page] Filter',
  props<{ year: string }>()
);

export const loadSuccess = createAction(
  '[BazAnaBilgiler/API] Load Success',
  props<{ data: UpYupBazAna[] }>()
);

export const loadFailure = createAction(
  '[BazAnaBilgiler/API] Load Failure',
  props<{ error: ErrorModel }>()
);
