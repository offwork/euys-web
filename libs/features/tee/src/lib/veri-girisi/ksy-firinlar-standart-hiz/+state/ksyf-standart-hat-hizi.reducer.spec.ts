import { KsyfStandartHatHiziEntity } from './ksyf-standart-hat-hizi.models';
import * as KsyfStandartHatHiziActions from './ksyf-standart-hat-hizi.actions';
import { State, initialState, reducer } from './ksyf-standart-hat-hizi.reducer';

describe('KsyfStandartHatHizi Reducer', () => {
  const createKsyfStandartHatHiziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KsyfStandartHatHiziEntity);

  beforeEach(() => {});

  describe('valid KsyfStandartHatHizi actions', () => {
    it('loadKsyfStandartHatHiziSuccess should return set the list of known KsyfStandartHatHizi', () => {
      const ksyfStandartHatHizi = [
        createKsyfStandartHatHiziEntity('PRODUCT-AAA'),
        createKsyfStandartHatHiziEntity('PRODUCT-zzz'),
      ];
      const action = KsyfStandartHatHiziActions.loadKsyfStandartHatHiziSuccess({ ksyfStandartHatHizi });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
