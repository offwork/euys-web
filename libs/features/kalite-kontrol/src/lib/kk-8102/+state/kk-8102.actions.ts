import { ErrorModel, Hat, KkKusurGoruntuleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const hoverKusurTanimBaslik = createAction(
  'Kk8102 Page] hoverKusurTanimBaslik',
  props<{ data: string }>()
);

export const initKusurGoruntuleme = createAction(
  '[Kk8102 Page] initKusurGoruntuleme'
);

export const initKusurGoruntulemeSuccess = createAction(
  '[Kk8102/API] initKusurGoruntulemeSuccess',
  props<{ data: KkKusurGoruntuleme[] }>()
);

export const initKusurGoruntulemeFailure = createAction(
  '[Kk8102/API] initKusurGoruntulemeFailure',
  props<{ error: ErrorModel }>()
);

export const kusurGoruntulemeFilter = createAction(
  '[Kk8102 Page] kusurGoruntulemeFilter',
  props<{ values: string[]; key: string }>()
);

export const filterTemizleyici = createAction('Kk8102 Page] filterTemizleyici');

export const initHatList = createAction('[Kk8102 Page] InitHatList');

export const initHatListSuccess = createAction(
  '[Kk8102/API] InitHatList Success',
  props<{ data: Hat[] }>()
);

export const initHatListFailure = createAction(
  '[Kk8102/API] InitHatList Failure',
  props<{ error: ErrorModel }>()
);
