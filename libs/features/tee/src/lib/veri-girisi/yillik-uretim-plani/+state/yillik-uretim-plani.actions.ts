import { createAction, props } from '@ngrx/store';
import { YillikUretimPlaniItem } from './yillik-uretim-plani.models';

export const init = createAction('[YillikUretimPlani Page] Init');

export const loadYillikUretimPlaniSuccess = createAction(
  '[YillikUretimPlani/API] Load YillikUretimPlani Success',
  props<{ yillikUretimPlani: YillikUretimPlaniItem[] }>()
);

export const loadYillikUretimPlaniFailure = createAction(
  '[YillikUretimPlani/API] Load YillikUretimPlani Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadPlanlar = createAction('[YillikUretimPlani Page] Load YillikUretimPlani', props<{ yil: number }>());
