import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[CuAylikGecikmeAnalizi Page] Init');

export const loadCuAylikGecikmeAnaliziSuccess = createAction(
  '[CuAylikGecikmeAnalizi/API] Load CuAylikGecikmeAnalizi Success',
  props<{ gecikmeAnalizi: AylikGecikmeAnalizi }>()
);

export const loadCuAylikGecikmeAnaliziFailure = createAction(
  '[CuAylikGecikmeAnalizi/API] Load CuAylikGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadCuAylikGecikmeAnaliziByMonth = createAction(
  '[CuAylikGecikmeAnalizi Page] Load CuAylikGecikmeAnaliziByMonth',
  props<{ yil: number; ay: number }>()
);
