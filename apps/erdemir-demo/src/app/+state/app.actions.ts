import { AppConfiguration } from '@euys/core';
import { createAction, props } from '@ngrx/store';

export const setInitialState = createAction(
  '[APP CONFIG] SET_INITIAL_STATE',
  props<{ config: AppConfiguration }>()
);
