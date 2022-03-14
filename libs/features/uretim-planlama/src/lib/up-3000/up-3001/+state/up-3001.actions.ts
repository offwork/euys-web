import { YupBazAnaBilgileri } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3001 Page] Init');

export const save = createAction(
  '[Up3001 Page] Save Up3001',
  props<{ yupBazAnaBilgileri: YupBazAnaBilgileri; file: File }>()
);

export const done = createAction('[Up3001/API] Done Up3001');

export const fail = createAction('[Up3001/API] Fail Up3001');
