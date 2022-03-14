import { createAction, props } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import { Kapasite } from './kapasiteler.models';

/////////////////     AP ACTIONS     /////////////////
export const loadKapasitelerRequest = createAction(
  '[Kapasiteler/API] Load Kapasiteler Request',
  props<{ year?: number; oncekiYil?: boolean }>()
);

export const loadKapasitelerSuccess = createAction(
  '[Kapasiteler/API] Load Kapasiteler Success',
  props<{ kapasite: Kapasite }>()
);

export const loadKapasitelerFailure = createAction(
  '[Kapasiteler/API] Load Kapasiteler Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const saveKapasitelerRequest = createAction(
  '[Kapasiteler/API] Save Kapasiteler Request',
  props<{ kapasite: Kapasite; year?: number; oncekiYil?: boolean }>()
);

export const saveKapasitelerSuccess = createAction(
  '[Kapasiteler/API] Save Kapasiteler Success',
  props<{ message: string; year: number; oncekiYil?: boolean }>()
);

export const saveKapasitelerFailure = createAction(
  '[Kapasiteler/API] Save Kapasiteler Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

////////////////     PAGE ACTIONS     ////////////////
export const initKapasitelerPage = createAction(
  '[Kapasiteler Page] Init Kapasiteler Page'
);

export const updateKapasitelerDataGrid = createAction(
  '[Kapasiteler Page] Update Kapasiteler Data Grid',
  props<{ change: GridInputChangeModel }>()
);

export const verifyKapasitelerDataGrid = createAction(
  '[Kapasiteler Page] Verify Kapasiteler Data Grid',
  props<{ key: string }>()
);
