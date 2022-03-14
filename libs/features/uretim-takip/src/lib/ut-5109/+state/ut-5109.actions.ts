import { ErrorModel, UtMerkezHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut5109 Page] Init');

export const loadUt5109Success = createAction(
  '[Ut5109/API] Load Ut5109 Success',
  props<{ data: UtMerkezHaddeYagEmulsiyonModel[] }>()
);

export const loadUt5109Failure = createAction(
  '[Ut5109/API] Load Ut5109 Failure',
  props<{ error: ErrorModel }>()
);

//loglar
export const loadUt5109Loglar = createAction(
  '[Ut5109 Page] Load Ut5109Loglar ',
  props<{ utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel }>()
);
export const loadUt5109LoglarSuccess = createAction(
  '[Ut5109/API] Load Ut5109Loglar Success',
  props<{ data: UtMerkezHaddeYagEmulsiyonModel[] }>()
);

export const loadUt5109LoglarFailure = createAction(
  '[Ut5109/API] Load Ut5109Loglar Failure',
  props<{ error: ErrorModel }>()
);

//save
export const save = createAction(
  '[Ut5109 Page] Save',
  props<{ utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel }>()
);

export const saveUt5109Success = createAction(
  '[Ut5109/API] Save Ut5109 Success',
  props<{ utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel; code: string; message:string }>()
);

export const saveUt5109Failure = createAction(
  '[Ut5109/API] Save Ut5109 Failure',
  props<{ error: ErrorModel }>()
);

//update
export const update = createAction(
  '[Ut5109 Page] Update',
  props<{ utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel }>()
);

export const updateUt5109Success = createAction(
  '[Ut5109/API] Update Ut5109 Success',
  props<{ utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel; code: string; message:string }>()
);

export const updateUt5109Failure = createAction(
  '[Ut5109/API] Update Ut5109 Failure',
  props<{ error: ErrorModel }>()
);
