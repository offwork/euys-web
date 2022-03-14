import { Kt1210Entity } from './kt-1210.models';
import { kt1210Adapter, Kt1210PartialState, initialState } from './kt-1210.reducer';
import * as Kt1210Selectors from './kt-1210.selectors';

describe('Kt1210 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1210Id = (it: Kt1210Entity) => it.id;
  const createKt1210Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1210Entity);

  let state: Kt1210PartialState;

  beforeEach(() => {
    state = {
      kt1210: kt1210Adapter.setAll(
        [createKt1210Entity('PRODUCT-AAA'), createKt1210Entity('PRODUCT-BBB'), createKt1210Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1210 Selectors', () => {
    it('getAllKt1210() should return the list of Kt1210', () => {
      const results = Kt1210Selectors.getAllKt1210(state);
      const selId = getKt1210Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1210Selectors.getSelected(state) as Kt1210Entity;
      const selId = getKt1210Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1210Loaded() should return the current "loaded" status', () => {
      const result = Kt1210Selectors.getKt1210Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1210Error() should return the current "error" state', () => {
      const result = Kt1210Selectors.getKt1210Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
