import { Kt1244Entity } from './kt-1244.models';
import { kt1244Adapter, Kt1244PartialState, initialState } from './kt-1244.reducer';
import * as Kt1244Selectors from './kt-1244.selectors';

describe('Kt1244 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1244Id = (it: Kt1244Entity) => it.id;
  const createKt1244Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1244Entity);

  let state: Kt1244PartialState;

  beforeEach(() => {
    state = {
      kt1244: kt1244Adapter.setAll(
        [createKt1244Entity('PRODUCT-AAA'), createKt1244Entity('PRODUCT-BBB'), createKt1244Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1244 Selectors', () => {
    it('getAllKt1244() should return the list of Kt1244', () => {
      const results = Kt1244Selectors.getAllKt1244(state);
      const selId = getKt1244Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1244Selectors.getSelected(state) as Kt1244Entity;
      const selId = getKt1244Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1244Loaded() should return the current "loaded" status', () => {
      const result = Kt1244Selectors.getKt1244Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1244Error() should return the current "error" state', () => {
      const result = Kt1244Selectors.getKt1244Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
