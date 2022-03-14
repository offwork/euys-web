import { Action } from '@ngrx/store';

import * as ImalatLotActions from './imalat-lot.actions';
import { ImalatLotEntity } from './imalat-lot.models';
import { State, initialState, reducer } from './imalat-lot.reducer';

describe('ImalatLot Reducer', () => {
  const createImalatLotEntity = (id: string, name = ''): ImalatLotEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ImalatLot actions', () => {
    it('loadImalatLotSuccess should return the list of known ImalatLot', () => {
      const imalatLot = [
        createImalatLotEntity('PRODUCT-AAA'),
        createImalatLotEntity('PRODUCT-zzz'),
      ];
      const action = ImalatLotActions.loadImalatLotSuccess({ imalatLot });

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
