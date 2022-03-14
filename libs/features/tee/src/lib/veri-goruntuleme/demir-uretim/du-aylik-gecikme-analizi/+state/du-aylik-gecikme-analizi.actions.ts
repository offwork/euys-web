import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[DuAylikGecikmeAnalizi Page] Init');

export const loadDuAylikGecikmeAnaliziSuccess = createAction(
  '[DuAylikGecikmeAnalizi/API] Load DuAylikGecikmeAnalizi Success',
  props<{ gecikmeAnalizi: AylikGecikmeAnalizi }>()
);

export const loadDuAylikGecikmeAnaliziFailure = createAction(
  '[DuAylikGecikmeAnalizi/API] Load DuAylikGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadDuAylikGecikmeAnaliziByMonth = createAction(
  '[DuAylikGecikmeAnalizi Page] Load DuAylikGecikmeAnaliziByMonth',
  props<{ yil: number; ay: number }>()
);
