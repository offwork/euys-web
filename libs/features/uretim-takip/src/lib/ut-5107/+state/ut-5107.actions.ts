import {
  ErrorModel,
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5107 Page] Init');

export const loadUt5107Success = createAction(
  '[Ut5107/API] Load Ut5107 Success',
  props<{ data: UtIsletmeHaddeYagEmulsiyonModel[] }>()
);

export const loadUt5107LogSuccess = createAction(
  '[Ut5107/API] Load Ut5107Log Success',
  props<{ data: UtIsletmeHaddeYagEmulsiyon[] }>()
);
export const loadUt5107Log = createAction(
  '[Ut5107 Page] Load Ut5107Log ',
  props<{ utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyon }>()
);

export const loadUt5107Failure = createAction(
  '[Ut5107/API] Load Ut5107 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5107 Page] Save',
  props<{ utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel }>()
);
export const saveUt5107Success = createAction(
  '[Ut5107/API] Save Ut5107 Success',
  props<{ utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel; code: string }>()
);

export const saveUt5107Failure = createAction(
  '[Ut5107/API] Save Ut5107 Failure',
  props<{ error: ErrorModel }>()
);
