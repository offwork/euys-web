import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[SicakAylikGecikmeAnalizi Page] Init');

export const loadSicakAylikGecikmeAnaliziSuccess = createAction(
  '[SicakAylikGecikmeAnalizi/API] Load SicakAylikGecikmeAnalizi Success',
  props<{ gecikmeAnalizi: AylikGecikmeAnalizi }>()
);

export const loadSicakAylikGecikmeAnaliziFailure = createAction(
  '[SicakAylikGecikmeAnalizi/API] Load SicakAylikGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadSicakAylikGecikmeAnalizi = createAction(
  '[SicakAylikGecikmeAnalizi Page] Load SicakAylikGecikmeAnalizi',
  props<{ yil: number; ay: number }>()
);
