import { Line } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';
import { HedefFiiliDegerlerModel } from './hedef-fiili-grafik.models';

export const init = createAction('[HedefFiiliGrafik Page] Init');

export const loadHedefFiiliGrafik = createAction(
  '[HedefFiiliGrafik Page] Load HedefFiiliGrafik',
  props<{ yil: number; hatKodu: string }>()
);

export const loadHedefFiiliGrafikSuccess = createAction(
  '[HedefFiiliGrafik/API] Load HedefFiiliGrafik Success',
  props<{ hedefFiiliGrafik: HedefFiiliDegerlerModel }>()
);

export const loadHedefFiiliGrafikFailure = createAction(
  '[HedefFiiliGrafik/API] Load HedefFiiliGrafik Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);

export const linesRequestLoad = createAction(
  '[HedefFiiliGrafik/API] Lines Load'
);

export const linesRequestSuccess = createAction(
  '[HedefFiiliGrafik/API] Lines Success',
  props<{ lines: Line[] }>()
);

export const linesRequestFailure = createAction(
  '[HedefFiiliGrafik/API] Lines Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);
