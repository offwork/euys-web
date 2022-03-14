import { Line } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import { StandarHizlar } from './ksyf-standart-hat-hizi.models';

/////////////////     AP ACTIONS     /////////////////
export const loadStandartHizRequest = createAction(
  '[StandartHiz/API] Load Standart Hiz Request',
  props<{ year?: number }>()
);

export const loadStandartHizSuccess = createAction(
  '[StandartHiz/API] Load Standart Hiz Success',
  props<{ standartHiz: StandarHizlar }>()
);

export const loadStandartHizFailure = createAction(
  '[StandartHiz/API] Load Standart Hiz Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const saveStandartHizRequest = createAction(
  '[StandartHiz/API] Save Standart Hiz Request',
  props<{ standarHizlar: StandarHizlar; year?: number }>()
);

export const saveStandartHizSuccess = createAction(
  '[StandartHiz/API] Save Standart Hiz Success',
  props<{ message: string; year: number }>()
);

export const saveStandartHizFailure = createAction(
  '[StandartHiz/API] Save Standart Hiz Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

////////////////     PAGE ACTIONS     ////////////////
export const initStandartHizPage = createAction(
  '[StandartHiz Page] Init Standart Hiz Page'
);

export const updateStandartHizDataGrid = createAction(
  '[StandartHiz Page] Update Standart Hiz Data Grid',
  props<{ change: GridInputChangeModel }>()
);

export const verifyStandartHizDataGrid = createAction(
  '[StandartHiz Page] Verify Standart Hiz Data Grid',
  props<{ key: string }>()
);

////////////////     LINE ACTIONS     ////////////////
export const linesRequestLoad = createAction('[StandartHiz/API] Lines Load');

export const linesRequestSuccess = createAction(
  '[StandartHiz/API] Lines Success',
  props<{ lines: Line[] }>()
);

export const linesRequestFailure = createAction(
  '[StandartHiz/API] Lines Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);
