/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import { KatsayiModel } from './katsayi-giris.models';

/////////////////     AP ACTIONS     /////////////////
export const loadCoefficientInputRequest = createAction(
  '[KatsayiGris/API] Load Katsayi Request',
  props<{ year?: number; previousYear?: boolean }>()
);

export const loadCoefficientInputSuccess = createAction(
  '[KatsayiGris/API] Load Katsayi Success',
  props<{ coefficients: KatsayiModel[] }>()
);

export const loadCoefficientInputFailure = createAction(
  '[KatsayiGris/API] Load Katsayi Failure',
  props<{ error: any }>()
);

export const saveCoefficientInputRequest = createAction(
  '[KatsayiGris/API] Save Katsayi Request',
  props<{
    coefficients?: KatsayiModel[];
    year?: number;
    previousYear?: boolean;
  }>()
);

export const saveCoefficientInputSuccess = createAction(
  '[KatsayiGris/API] Save Katsayi Success',
  props<{ message: string; year?: number; previousYear?: boolean }>()
);

export const saveCoefficientInputFailure = createAction(
  '[KatsayiGris/API] Save Katsayi Failure',
  props<{ error: any }>()
);

////////////////     PAGE ACTIONS     ////////////////
export const initCoefficientPage = createAction(
  '[KatsayiGris Page] Init Katsayi Page'
);

export const updateCoefficientDataGrid = createAction(
  '[KatsayiGris Page] Update Katsayi Data Grid',
  props<{ group: GridInputChangeModel }>()
);

export const verifyCoefficientDataGrid = createAction(
  '[KatsayiGris Page] Verify Katsayi Data Grid',
  props<{ key: string }>()
);
