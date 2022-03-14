import { PfdmKalinlikCapEntity } from './pfdm-kalinlik-cap.models';
import {
  pfdmKalinlikCapAdapter,
  PfdmKalinlikCapPartialState,
  initialState,
} from './pfdm-kalinlik-cap.reducer';
import * as PfdmKalinlikCapSelectors from './pfdm-kalinlik-cap.selectors';

describe('PfdmKalinlikCap Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPfdmKalinlikCapId = (it: PfdmKalinlikCapEntity) => it.id;
  const createPfdmKalinlikCapEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PfdmKalinlikCapEntity);

  let state: PfdmKalinlikCapPartialState;

  beforeEach(() => {
    state = {
      pfdmKalinlikCap: pfdmKalinlikCapAdapter.setAll(
        [
          createPfdmKalinlikCapEntity('PRODUCT-AAA'),
          createPfdmKalinlikCapEntity('PRODUCT-BBB'),
          createPfdmKalinlikCapEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('PfdmKalinlikCap Selectors', () => {
    it('getAllPfdmKalinlikCap() should return the list of PfdmKalinlikCap', () => {
      const results = PfdmKalinlikCapSelectors.getAllPfdmKalinlikCap(state);
      const selId = getPfdmKalinlikCapId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PfdmKalinlikCapSelectors.getSelected(
        state
      ) as PfdmKalinlikCapEntity;
      const selId = getPfdmKalinlikCapId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPfdmKalinlikCapLoaded() should return the current "loaded" status', () => {
      const result = PfdmKalinlikCapSelectors.getPfdmKalinlikCapLoaded(state);

      expect(result).toBe(true);
    });

    it('getPfdmKalinlikCapError() should return the current "error" state', () => {
      const result = PfdmKalinlikCapSelectors.getPfdmKalinlikCapError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
