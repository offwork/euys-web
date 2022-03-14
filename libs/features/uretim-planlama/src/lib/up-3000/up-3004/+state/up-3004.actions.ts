import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3004 Page] Init');
export const load = createAction(
  '[Up3004 Page] Load',
  props<{ year: number }>()
);

export const del = createAction(
  '[Up3004 Page] Delete',
  props<{ yupTaslak?: YupTaslakAnaModel }>()
);

export const edit = createAction(
  '[Up3004 Page] Edit',
  props<{ yupTaslak: YupTaslakAnaModel }>()
);

export const approve = createAction(
  '[Up3004 Page] Approve',
  props<{ yupTaslak: YupTaslakAnaModel }>()
);

export const disapprove = createAction(
  '[Up3004 Page] Disapprove',
  props<{ yupTaslak: YupTaslakAnaModel }>()
);

export const loadSuccess = createAction(
  '[Up3004/API] Load Success',
  props<{ data: YupTaslakAnaModel[] }>()
);
export const done = createAction('[Up3004/API] Request Success');
export const fail = createAction('[Up3004/API] Request Failure');
