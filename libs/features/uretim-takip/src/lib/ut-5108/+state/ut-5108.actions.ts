import {
  ErrorModel,
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5108 Page] Init');

export const loadUt5108Success = createAction(
  '[Ut5108/API] Load Ut5108 Success',
  props<{ data: UtIsletmeHaddeYagEmulsiyonModel[] }>()
);

export const loadUt5108LogSuccess = createAction(
  '[Ut5108/API] Load Ut5108Log Success',
  props<{ data: UtIsletmeHaddeYagEmulsiyon[] }>()
);
export const loadUt5108Log = createAction(
  '[Ut5108 Page] Load Ut5108Log ',
  props<{ utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyon }>()
);

export const loadUt5108Failure = createAction(
  '[Ut5108/API] Load Ut5108 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Ut5108 Page] Save',
  props<{ utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel }>()
);
export const saveUt5108Success = createAction(
  '[Ut5108/API] Save Ut5108 Success',
  props<{
    utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel;
    code: string;
  }>()
);

export const saveUt5108Failure = createAction(
  '[Ut5108/API] Save Ut5108 Failure',
  props<{ error: ErrorModel }>()
);
