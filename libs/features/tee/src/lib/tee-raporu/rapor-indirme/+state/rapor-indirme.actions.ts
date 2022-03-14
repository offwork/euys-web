import { createAction, props } from '@ngrx/store';
import { RaporIndirmeEntity } from './rapor-indirme.models';

export const init = createAction('[RaporIndirme Page] Init');

export const loadRaporIndirmeSuccess = createAction(
  '[RaporIndirme/API] Load RaporIndirme Success',
  props<{ raporIndirme: RaporIndirmeEntity[] }>()
);

export const loadRaporIndirmeFailure = createAction(
  '[RaporIndirme/API] Load RaporIndirme Failure',
  props<{ error: any }>()
);
