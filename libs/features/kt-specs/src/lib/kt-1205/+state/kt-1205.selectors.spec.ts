import { Kt1205Entity } from './kt-1205.models';
import { kt1205Adapter, Kt1205PartialState, initialState } from './kt-1205.reducer';
import * as Kt1205Selectors from './kt-1205.selectors';

describe('Kt1205 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1205Id = (it: Kt1205Entity) => it.id;
  const createKt1205Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1205Entity);

  let state: Kt1205PartialState;

  beforeEach(() => {
    state = {
      kt1205: kt1205Adapter.setAll(
        [createKt1205Entity('PRODUCT-AAA'), createKt1205Entity('PRODUCT-BBB'), createKt1205Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1205 Selectors', () => {
    it('getAllKt1205() should return the list of Kt1205', () => {
      const results = Kt1205Selectors.getAllKt1205(state);
      const selId = getKt1205Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1205Selectors.getSelected(state) as Kt1205Entity;
      const selId = getKt1205Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1205Loaded() should return the current "loaded" status', () => {
      const result = Kt1205Selectors.getKt1205Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1205Error() should return the current "error" state', () => {
      const result = Kt1205Selectors.getKt1205Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
