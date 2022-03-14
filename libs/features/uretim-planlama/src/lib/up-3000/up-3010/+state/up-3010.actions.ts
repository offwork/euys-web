import { YupAylikAnaModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3010 Page] Init');
export const save = createAction(
  '[Up3010 Page] Save',
  props<{ yupAylikAnaModel: YupAylikAnaModel }>()
);

export const success = createAction('[Up3010/API] Load Up3010 Success');

export const fail = createAction('[Up3010/API] Load Up3010 Failure');
