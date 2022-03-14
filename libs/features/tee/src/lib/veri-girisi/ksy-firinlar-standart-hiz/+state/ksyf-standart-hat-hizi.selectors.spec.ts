import { KsyfStandartHatHiziEntity } from './ksyf-standart-hat-hizi.models';
import { State, ksyfStandartHatHiziAdapter, initialState } from './ksyf-standart-hat-hizi.reducer';
import * as KsyfStandartHatHiziSelectors from './ksyf-standart-hat-hizi.selectors';

describe('KsyfStandartHatHizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKsyfStandartHatHiziId = (it) => it['id'];
  const createKsyfStandartHatHiziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KsyfStandartHatHiziEntity);

  let state;

  beforeEach(() => {
    state = {
      ksyfStandartHatHizi: ksyfStandartHatHiziAdapter.setAll(
        [
          createKsyfStandartHatHiziEntity('PRODUCT-AAA'),
          createKsyfStandartHatHiziEntity('PRODUCT-BBB'),
          createKsyfStandartHatHiziEntity('PRODUCT-CCC'),
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

  describe('KsyfStandartHatHizi Selectors', () => {
    it('getAllKsyfStandartHatHizi() should return the list of KsyfStandartHatHizi', () => {
      const results = KsyfStandartHatHiziSelectors.getAllKsyfStandartHatHizi(state);
      const selId = getKsyfStandartHatHiziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = KsyfStandartHatHiziSelectors.getSelected(state);
      const selId = getKsyfStandartHatHiziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getKsyfStandartHatHiziLoaded() should return the current 'loaded' status", () => {
      const result = KsyfStandartHatHiziSelectors.getKsyfStandartHatHiziLoaded(state);

      expect(result).toBe(true);
    });

    it("getKsyfStandartHatHiziError() should return the current 'error' state", () => {
      const result = KsyfStandartHatHiziSelectors.getKsyfStandartHatHiziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
