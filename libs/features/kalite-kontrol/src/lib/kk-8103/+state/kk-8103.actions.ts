import {
  Urun,
  ErrorModel,
  Celik,
  GnUretimMusteriGenelModel,
  KkOperatorBilgilendirme,
  KkOperatorBilgiGörseller,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const initMusteriList = createAction('[Kk8103 Page] InitMusteriList');

export const initMusteriListSuccess = createAction(
  '[Kk8103/API] InitMusteriList Success',
  props<{ data: GnUretimMusteriGenelModel[] }>()
);

export const initMusteriListFailure = createAction(
  '[Kk8103/API] InitMusteriList Failure',
  props<{ error: ErrorModel }>()
);

export const saveOprBilgi = createAction(
  '[Kk8103 Page] Save Operator Bilgilendirme',
  props<{ oprBilgiKayit: KkOperatorBilgilendirme }>()
);

export const saveOprBilgiSuccess = createAction(
  '[Kk8103/API] Save Operator Bilgilendirme Sucess',
  props<{ oprBilgiKayit: KkOperatorBilgilendirme }>()
);

export const saveOprBilgiFailure = createAction(
  '[Kk8103/API] Save Operator Bilgilendirme Failure',
  props<{ error: ErrorModel }>()
);

export const initUrunList = createAction('[Kk8103 Page] InitUrunList');

export const initUrunListSuccess = createAction(
  '[Kk8103/API] InitUrunList Success',
  props<{ data: Urun[] }>()
);

export const initUrunListFailure = createAction(
  '[Kk8103/API] InitUrunList Failure',
  props<{ error: ErrorModel }>()
);

export const initKaliteList = createAction('[Kk8103 Page] InitKaliteList');

export const initKaliteListSuccess = createAction(
  '[Kk8103/API] InitKaliteList Success',
  props<{ data: Celik[] }>()
);

export const initKaliteListFailure = createAction(
  '[Kk8103/API] InitKaliteList Failure',
  props<{ error: ErrorModel }>()
);

export const resetOprBilgi = createAction(
  '[Kk8103/Page] Reset Oprerator Bilgilendirme'
);

export const getOprBilgilendirmeGorselList = createAction(
  '[Kk8103 Page] Get Operator Bilgilendirme Gorsel List',
  props<{ idOperatorBilgilendirme: string }>()
);

export const getOprBilgilendirmeGorselListSuccess = createAction(
  '[Kk8103/API] Get Operator Bilgilendirme Gorsel List Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const getOprBilgilendirmeGorselListFailure = createAction(
  '[Kk8103/API] Get Operator Bilgilendirme Gorsel List Failure',
  props<{ error: ErrorModel }>()
);

export const addOprBilgilendirmeGorsel = createAction(
  '[Kk8103 Page] Add Operator Bilgilendirme Gorsel',
  props<{ data: FormData; idOperatorBilgilendirme: string }>()
);

export const addOprBilgilendirmeGorselSuccess = createAction(
  '[Kk8103/API] Add Operator Bilgilendirme Gorsel Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const addOprBilgilendirmeGorselFailure = createAction(
  '[Kk8103/API] Add Operator Bilgilendirme Gorsel Failure',
  props<{ error: ErrorModel }>()
);

export const removeOprBilgilendirmeGorsel = createAction(
  '[Kk8103 Page] Remove Operator Bilgilendirme Gorsel',
  props<{ gorsel: KkOperatorBilgiGörseller }>()
);

export const removeOprBilgilendirmeGorselSuccess = createAction(
  '[Kk8103/API] Remove Operator Bilgilendirme Gorsel Success',
  props<{ operatorGorselList: KkOperatorBilgiGörseller[] }>()
);

export const removeOprBilgilendirmeGorselFailure = createAction(
  '[Kk8103/API] Remove Operator Bilgilendirme Gorsel Failure',
  props<{ error: ErrorModel }>()
);

export const resetOprBilgiGorselList = createAction(
  '[Kk8103 Page] Reset Operator Bilgilendirme Gorsel List'
);
