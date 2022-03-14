import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3003 Page] Init');

export const save = createAction(
  '[Up3003 Page] Save Up3003',
  props<{ yupTaslakAnaModel: YupTaslakAnaModel, file : File }>()
);

export const done = createAction('[Up3003/API] Done Up3003');

export const fail = createAction('[Up3003/API] Fail Up3003');
