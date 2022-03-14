import {
  ErrorModel,
  KkOperatorBilgiGörseller,
  KkOperatorBilgilendirme,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const initOprBilgilendirmeList = createAction(
  '[Kk8104 Page] Init Operator Bilgilendirme List'
);

export const initOprBilgilendirmeListSuccess = createAction(
  '[Kk8104/API] Init Operator Bilgilendirme List Success',
  props<{ kkOprBilgilendirmeList: KkOperatorBilgilendirme[] }>()
);

export const initOprBilgilendirmeListFailure = createAction(
  '[Kk8104/API] Init Operator Bilgilendirme List Failure',
  props<{ error: ErrorModel }>()
);

export const getOprBilgilendirmeData = createAction(
  '[Kk8104 Page] Get Operator Bilgilendirme Data',
  props<{ id: string }>()
);

export const getOprBilgilendirmeDataSuccess = createAction(
  '[Kk8104/API] Get Operator Bilgilendirme Data Success',
  props<{ oprBilgilendirmeData: KkOperatorBilgilendirme }>()
);

export const getOprBilgilendirmeDataFailure = createAction(
  '[Kk8104/API] Get Operator Bilgilendirme Data Failure',
  props<{ error: ErrorModel }>()
);

export const setOprDataLoadedFalse = createAction(
  '[Kk8104 Page] Set Operator Bilgilendirme Data Loaded False'
);

export const updateOprBilgilendirme = createAction(
  '[Kk8104 Page] Update Operator Bilgilendirme',
  props<{ oprBilgilendirme: KkOperatorBilgilendirme }>()
);

export const updateOprBilgilendirmeSuccess = createAction(
  '[Kk8104/API] Update Operator Bilgilendirme Success',
  props<{ oprBilgilendirme: KkOperatorBilgilendirme }>()
);

export const updateOprBilgilendirmeFailure = createAction(
  '[Kk8104/API] Update Operator Bilgilendirme Failure',
  props<{ error: ErrorModel }>()
);

export const deleteOprBilgilendirme = createAction(
  '[Kk8104 Page] Delete Operator Bilgilendirme',
  props<{ id: string; etag: string }>()
);

export const deleteOprBilgilendirmeSuccess = createAction(
  '[Kk8104/API] Delete Operator Bilgilendirme Success',
  props<{ id: string }>()
);

export const deleteOprBilgilendirmeFailure = createAction(
  '[Kk8104/API] Delete Operator Bilgilendirme Failure',
  props<{ error: ErrorModel }>()
);

export const getOprBilgilendirmeGorselList = createAction(
  '[Kk8104 Page] Get Operator Bilgilendirme Gorsel List',
  props<{ idOperatorBilgilendirme: string }>()
);

export const getOprBilgilendirmeGorselListSuccess = createAction(
  '[Kk8104/API] Get Operator Bilgilendirme Gorsel List Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const getOprBilgilendirmeGorselListFailure = createAction(
  '[Kk8104/API] Get Operator Bilgilendirme Gorsel List Failure',
  props<{ error: ErrorModel }>()
);

export const addOprBilgilendirmeGorsel = createAction(
  '[Kk8104 Page] Add Operator Bilgilendirme Gorsel',
  props<{ data: FormData; idOperatorBilgilendirme: string }>()
);

export const addOprBilgilendirmeGorselSuccess = createAction(
  '[Kk8104/API] Add Operator Bilgilendirme Gorsel Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const addOprBilgilendirmeGorselFailure = createAction(
  '[Kk8104/API] Add Operator Bilgilendirme Gorsel Failure',
  props<{ error: ErrorModel }>()
);

export const removeOprBilgilendirmeGorsel = createAction(
  '[Kk8104 Page] Remove Operator Bilgilendirme Gorsel',
  props<{ gorsel: KkOperatorBilgiGörseller }>()
);

export const removeOprBilgilendirmeGorselSuccess = createAction(
  '[Kk8104/API] Remove Operator Bilgilendirme Gorsel Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const removeOprBilgilendirmeGorselFailure = createAction(
  '[Kk8104/API] Remove Operator Bilgilendirme Gorsel Failure',
  props<{ error: ErrorModel }>()
);

export const resetOprBilgiGorselList = createAction(
  '[Kk8104 Page] Reset Operator Bilgilendirme Gorsel List'
);
