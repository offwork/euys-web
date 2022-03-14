import { YupGunlukPlanBilgileriModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Up3020 Page] Init');

export const save = createAction(
  '[Up3020 Page] Save Up3020',
  props<{ yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel }>()
);

export const saveSuccess = createAction(
  '[Up3020/API] Save Up3020 Success',
  props<{ dublicate: boolean; updateRecord: YupGunlukPlanBilgileriModel }>()
);

export const saveFailure = createAction('[Up3020/API] Save Up3020 Failure');
