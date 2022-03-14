import { Kt1211Entity } from './kt-1211.models';
import { kt1211Adapter, Kt1211PartialState, initialState } from './kt-1211.reducer';
import * as Kt1211Selectors from './kt-1211.selectors';

describe('Kt1211 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1211Id = (it: Kt1211Entity) => it.id;
  const createKt1211Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1211Entity);

  let state: Kt1211PartialState;

  beforeEach(() => {
    state = {
      kt1211: kt1211Adapter.setAll(
        [createKt1211Entity('PRODUCT-AAA'), createKt1211Entity('PRODUCT-BBB'), createKt1211Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1211 Selectors', () => {
    it('getAllKt1211() should return the list of Kt1211', () => {
      const results = Kt1211Selectors.getAllKt1211(state);
      const selId = getKt1211Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1211Selectors.getSelected(state) as Kt1211Entity;
      const selId = getKt1211Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1211Loaded() should return the current "loaded" status', () => {
      const result = Kt1211Selectors.getKt1211Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1211Error() should return the current "error" state', () => {
      const result = Kt1211Selectors.getKt1211Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
