import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[SogukAylikGecikmeAnalizi Page] Init');

export const loadSogukAylikGecikmeAnaliziSuccess = createAction(
  '[SogukAylikGecikmeAnalizi/API] Load SogukAylikGecikmeAnalizi Success',
  props<{ gecikmeAnalizi: AylikGecikmeAnalizi }>()
);

export const loadSogukAylikGecikmeAnaliziFailure = createAction(
  '[SogukAylikGecikmeAnalizi/API] Load SogukAylikGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadSogukAylikGecikmeAnalizi = createAction(
  '[SogukAylikGecikmeAnalizi Page] Load SogukAylikGecikmeAnalizi',
  props<{ yil: number; ay: number }>()
);
