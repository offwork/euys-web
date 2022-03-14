import { TesisGecikme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[DuTarihGecikmeAnalizi Page] Init');

export const loadDuTarihGecikmeAnaliziSuccess = createAction(
  '[DuTarihGecikmeAnalizi/API] Load DuTarihGecikmeAnalizi Success',
  props<{ tesisGecikmeleri: TesisGecikme[] }>()
);

export const loadDuTarihGecikmeAnaliziFailure = createAction(
  '[DuTarihGecikmeAnalizi/API] Load DuTarihGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadDuTarihGecikmeAnalizi = createAction(
  '[DuTarihGecikmeAnalizi Page] Load DuTarihGecikmeAnalizi',
  props<{ baslangic: Date; bitis: Date }>()
);
