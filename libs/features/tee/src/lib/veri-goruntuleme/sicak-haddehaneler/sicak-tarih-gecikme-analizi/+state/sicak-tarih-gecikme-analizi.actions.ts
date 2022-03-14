import { TesisGecikme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[SicakTarihGecikmeAnalizi Page] Init');

export const loadSicakTarihGecikmeAnaliziSuccess = createAction(
  '[SicakTarihGecikmeAnalizi/API] Load SicakTarihGecikmeAnalizi Success',
  props<{ tesisGecikmeleri: TesisGecikme[] }>()
);

export const loadSicakTarihGecikmeAnaliziFailure = createAction(
  '[SicakTarihGecikmeAnalizi/API] Load SicakTarihGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadSicakTarihGecikmeAnalizi = createAction(
  '[SicakTarihGecikmeAnalizi Page] Load SicakTarihGecikmeAnalizi',
  props<{ baslangic: Date; bitis: Date }>()
);
