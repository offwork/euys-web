import { TesisGecikme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[CuTarihGecikmeAnalizi Page] Init');

export const loadCuTarihGecikmeAnaliziSuccess = createAction(
  '[CuTarihGecikmeAnalizi/API] Load CuTarihGecikmeAnalizi Success',
  props<{ tesisGecikmeleri: TesisGecikme[] }>()
);

export const loadCuTarihGecikmeAnaliziFailure = createAction(
  '[CuTarihGecikmeAnalizi/API] Load CuTarihGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadCuTarihGecikmeAnalizi = createAction(
  '[CuTarihGecikmeAnalizi Page] Load CuTarihGecikmeAnalizi',
  props<{ baslangic: Date; bitis: Date }>()
);
