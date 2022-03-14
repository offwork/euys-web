import { ErrorModel, UpHatVerim } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3201 Page] Init');

export const loadUpHatVerimList = createAction(
  '[Up3201 Page] loadUpHatVerimList'
);

export const loadUpHatVerimListSuccess = createAction(
  '[Up3201/API] Load Up3201 Success',
  props<{ upHatVerimList: UpHatVerim[] }>()
);

export const loadUpHatVerimListFailure = createAction(
  '[Up3201/API] Load Up3201 Failure',
  props<{ error: ErrorModel }>()
);

export const saveHatVerim = createAction(
  '[Up3201 Page] saveHatVerim',
  props<{ upHatVerim: UpHatVerim }>()
);

export const saveHatVerimSuccess = createAction(
  '[Up3201/API] Save Up3201 Success',
  props<{ upHatVerim: UpHatVerim }>()
);

export const saveHatVerimFailure = createAction(
  '[Up3201/API] Save Up3201 Failure',
  props<{ error: ErrorModel }>()
);
