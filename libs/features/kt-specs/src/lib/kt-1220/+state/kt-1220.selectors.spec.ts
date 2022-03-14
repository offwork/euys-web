import { Kt1220Entity } from './kt-1220.models';
import { kt1220Adapter, Kt1220PartialState, initialState } from './kt-1220.reducer';
import * as Kt1220Selectors from './kt-1220.selectors';

describe('Kt1220 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1220Id = (it: Kt1220Entity) => it.id;
  const createKt1220Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1220Entity);

  let state: Kt1220PartialState;

  beforeEach(() => {
    state = {
      kt1201: kt1220Adapter.setAll(
        [createKt1220Entity('PRODUCT-AAA'), createKt1220Entity('PRODUCT-BBB'), createKt1220Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1220 Selectors', () => {
    it('getAllKt1220() should return the list of Kt1220', () => {
      const results = Kt1220Selectors.getAllKt1220(state);
      const selId = getKt1220Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1220Selectors.getSelected(state) as Kt1220Entity;
      const selId = getKt1220Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1220Loaded() should return the current "loaded" status', () => {
      const result = Kt1220Selectors.getKt1220Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1220Error() should return the current "error" state', () => {
      const result = Kt1220Selectors.getKt1220Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
