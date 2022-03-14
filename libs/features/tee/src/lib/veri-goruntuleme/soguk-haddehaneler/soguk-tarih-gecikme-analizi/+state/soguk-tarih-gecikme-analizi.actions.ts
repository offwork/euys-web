import { TesisGecikme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[SogukTarihGecikmeAnalizi Page] Init');

export const loadSogukTarihGecikmeAnaliziSuccess = createAction(
  '[SogukTarihGecikmeAnalizi/API] Load SogukTarihGecikmeAnalizi Success',
  props<{ tesisGecikmeleri: TesisGecikme[] }>()
);

export const loadSogukTarihGecikmeAnaliziFailure = createAction(
  '[SogukTarihGecikmeAnalizi/API] Load SogukTarihGecikmeAnalizi Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const loadSogukTarihGecikmeAnalizi = createAction(
  '[SogukTarihGecikmeAnalizi Page] Load SogukTarihGecikmeAnalizi Success',
  props<{ baslangic: Date; bitis: Date }>()
);
