import { Action } from '@ngrx/store';

import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';
import { PfdmKalinlikCapEntity } from './pfdm-kalinlik-cap.models';
import { State, initialState, reducer } from './pfdm-kalinlik-cap.reducer';

describe('PfdmKalinlikCap Reducer', () => {
  const createPfdmKalinlikCapEntity = (
    id: string,
    name = ''
  ): PfdmKalinlikCapEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid PfdmKalinlikCap actions', () => {
    it('loadPfdmKalinlikCapSuccess should return the list of known PfdmKalinlikCap', () => {
      const pfdmKalinlikCap = [
        createPfdmKalinlikCapEntity('PRODUCT-AAA'),
        createPfdmKalinlikCapEntity('PRODUCT-zzz'),
      ];
      const action = PfdmKalinlikCapActions.loadPfdmKalinlikCapSuccess({
        pfdmKalinlikCap,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
