import { createAction, props } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import { Hedef } from './hedefler.models';

/////////////////     API ACTIONS     /////////////////
export const loadHedeflerRequest = createAction(
  '[Hedefler/API] Load Hedefler Request',
  props<{ year?: number }>()
);

export const loadHedeflerSuccess = createAction(
  '[Hedefler/API] Load Hedefler Success',
  props<{ hedefler: Hedef[] }>()
);

export const loadHedeflerFailure = createAction(
  '[Hedefler/API] Load Hedefler Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const saveHedeflerRequest = createAction(
  '[Hedefler/API] Save Hedefler Request',
  props<{ hedefler: Hedef[]; year?: number }>()
);

export const saveHedeflerSuccess = createAction(
  '[Hedefler/API] Save Hedefler Success',
  props<{ message: string; year: number }>()
);

export const saveHedeflerFailure = createAction(
  '[Hedefler/API] Save Hedefler Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const updateHedeflerRequest = createAction(
  '[Hedefler/API] Update Hedefler Request',
  props<{ hedefler: Hedef[]; year?: number }>()
);

export const updateHedeflerSuccess = createAction(
  '[Hedefler/API] Update Hedefler Success',
  props<{ message: string; year: number }>()
);

export const updateHedeflerFailure = createAction(
  '[Hedefler/API] Update Hedefler Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

////////////////     PAGE ACTIONS     ////////////////
export const initHedeflerPage = createAction(
  '[Hedefler Page] Init Hedefler Page'
);

export const updateHedeflerDataGrid = createAction(
  '[Hedefler Page] Update Hedefler Data Grid',
  props<{ change: GridInputChangeModel }>()
);

export const verifyHedeflerDataGrid = createAction(
  '[Hedefler Page] Verify Hedefler Data Grid'
);
