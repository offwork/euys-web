import { Kt1216Entity } from './kt-1216.models';
import { kt1216Adapter, Kt1216PartialState, initialState } from './kt-1216.reducer';
import * as Kt1216Selectors from './kt-1216.selectors';

describe('Kt1216 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1216Id = (it: Kt1216Entity) => it.id;
  const createKt1216Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1216Entity);

  let state: Kt1216PartialState;

  beforeEach(() => {
    state = {
      kt1216: kt1216Adapter.setAll(
        [createKt1216Entity('PRODUCT-AAA'), createKt1216Entity('PRODUCT-BBB'), createKt1216Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1216 Selectors', () => {
    it('getAllKt1216() should return the list of Kt1216', () => {
      const results = Kt1216Selectors.getAllKt1216(state);
      const selId = getKt1216Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1216Selectors.getSelected(state) as Kt1216Entity;
      const selId = getKt1216Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1216Loaded() should return the current "loaded" status', () => {
      const result = Kt1216Selectors.getKt1216Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1216Error() should return the current "error" state', () => {
      const result = Kt1216Selectors.getKt1216Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
